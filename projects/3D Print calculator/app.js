/* =========================================================
   NookPrint Pro — shared client logic
   ========================================================= */

const NP = {
  STORAGE_PRINTS: 'nookprint.prints.v1',
  STORAGE_SETTINGS: 'nookprint.settings.v1',

  defaultSettings: {
    currency: 'EUR',         // 'EUR' or 'USD'
    printerWatts: 150,       // default printer wattage
    electricityRate: 0.28    // default electricity rate (€/kWh)
  },

  // ---------- Settings ----------
  getSettings() {
    try {
      const raw = localStorage.getItem(this.STORAGE_SETTINGS);
      if (!raw) return { ...this.defaultSettings };
      const parsed = JSON.parse(raw);
      return { ...this.defaultSettings, ...parsed };
    } catch (e) {
      return { ...this.defaultSettings };
    }
  },
  saveSettings(settings) {
    localStorage.setItem(this.STORAGE_SETTINGS, JSON.stringify(settings));
  },

  // ---------- Currency formatting ----------
  currencySymbol() {
    const s = this.getSettings();
    return s.currency === 'EUR' ? '€' : '$';
  },
  currencyCode() {
    return this.getSettings().currency;
  },
  formatMoney(value) {
    const code = this.currencyCode();
    const sym = code === 'EUR' ? '€' : '$';
    const num = (Number.isFinite(value) ? value : 0).toFixed(2);
    // Match the mockup style: "$11.85" / "€11.85"
    return `${sym}${num}`;
  },

  // ---------- Prints storage ----------
  getPrints() {
    try {
      const raw = localStorage.getItem(this.STORAGE_PRINTS);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  },
  savePrints(prints) {
    localStorage.setItem(this.STORAGE_PRINTS, JSON.stringify(prints));
  },
  addPrint(print) {
    const all = this.getPrints();
    all.unshift(print);
    this.savePrints(all);
  },
  deletePrint(id) {
    const all = this.getPrints().filter(p => p.id !== id);
    this.savePrints(all);
  },
  updatePrint(id, updates) {
    const all = this.getPrints();
    const idx = all.findIndex(p => p.id === id);
    if (idx === -1) return null;
    all[idx] = { ...all[idx], ...updates };
    this.savePrints(all);
    return all[idx];
  },
  getPrint(id) {
    return this.getPrints().find(p => p.id === id) || null;
  },

  // ---------- Math ----------
  /**
   * Calculate a 3D print cost breakdown.
   * @param {Object} inputs
   * @param {number} inputs.weightGrams      - grams of filament used
   * @param {number} inputs.printHours       - print time in hours
   * @param {number} inputs.rollPrice        - price of a 1kg roll
   * @param {number} inputs.electricityRate  - price per kWh
   * @param {number} inputs.margin           - multiplier, e.g. 2.5
   * @param {boolean} inputs.includeVat
   * @param {number} inputs.vatRate          - e.g. 0.21
   * @param {number} inputs.printerWatts     - printer wattage, default 150
   */
  calculate(inputs) {
    const w = Number(inputs.weightGrams) || 0;
    const h = Number(inputs.printHours) || 0;
    const roll = Number(inputs.rollPrice) || 0;
    const kwhPrice = Number(inputs.electricityRate) || 0;
    const accessory = Number(inputs.accessoryCost) || 0;
    const margin = Number(inputs.margin) || 1;
    const vatRate = Number(inputs.vatRate) || 0.21;
    const watts = Number(inputs.printerWatts) || 150;

    const filamentCost = (w / 1000) * roll;
    const energyKwh = (watts / 1000) * h;
    const energyCost = energyKwh * kwhPrice;
    const accessoryCost = accessory;

    const baseSubtotal = filamentCost + energyCost + accessoryCost;
    const beforeVat = baseSubtotal * margin;
    const profitMargin = beforeVat - baseSubtotal;
    const vatAmount = inputs.includeVat ? beforeVat * vatRate : 0;
    const sellPrice = beforeVat + vatAmount;

    return {
      filamentCost,
      energyCost,
      accessoryCost,
      baseSubtotal,
      profitMargin,
      vatAmount,
      sellPrice
    };
  },

  // ---------- UI helpers ----------
  toast(message) {
    let t = document.querySelector('.toast');
    if (!t) {
      t = document.createElement('div');
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = message;
    t.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
  },

  todayLabel() {
    const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    const d = new Date();
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  },

  uid() {
    return 'p_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  },

  // ---------- Settings modal ----------
  _settingsModalInited: false,

  _paintCurrencyButtons(modal, currency) {
    const btns = modal.querySelectorAll('.np-currency-btn');
    btns.forEach(b => {
      const active = b.dataset.value === currency;
      if (active) {
        b.classList.add('bg-primary-container', 'text-on-primary-container', 'z-10');
        b.classList.remove('text-on-surface-variant');
      } else {
        b.classList.remove('bg-primary-container', 'text-on-primary-container', 'z-10');
        b.classList.add('text-on-surface-variant');
      }
    });
    // Update currency-dependent labels inside the modal
    const sym = currency === 'EUR' ? '€' : '$';
    const ratePrefix = modal.querySelector('#np-settings-rate-prefix');
    if (ratePrefix) ratePrefix.textContent = sym;
  },

  initSettingsModal() {
    if (this._settingsModalInited) return;
    const modal = document.getElementById('np-settings-modal');
    if (!modal) return;
    this._settingsModalInited = true;

    const closeBtn = modal.querySelector('#np-settings-close');
    const okBtn = modal.querySelector('#np-settings-ok');
    const wattsInput = modal.querySelector('#np-settings-watts');
    const rateInput = modal.querySelector('#np-settings-rate');
    const currencyBtns = modal.querySelectorAll('.np-currency-btn');

    currencyBtns.forEach(b => {
      b.addEventListener('click', () => this._paintCurrencyButtons(modal, b.dataset.value));
    });

    closeBtn.addEventListener('click', () => this.closeSettingsModal());

    // Click outside the card to close
    modal.addEventListener('click', (e) => {
      if (e.target === modal) this.closeSettingsModal();
    });

    // ESC to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        this.closeSettingsModal();
      }
    });

    okBtn.addEventListener('click', () => {
      const activeBtn = Array.from(currencyBtns).find(b => b.classList.contains('bg-primary-container'));
      const currency = activeBtn ? activeBtn.dataset.value : 'EUR';
      const w = parseInt(wattsInput.value, 10);
      const printerWatts = (Number.isFinite(w) && w > 0) ? w : 150;
      const r = parseFloat(rateInput ? rateInput.value : NaN);
      const electricityRate = (Number.isFinite(r) && r >= 0) ? r : 0.28;

      this.saveSettings({ currency, printerWatts, electricityRate });
      this.toast('Settings saved 🌿');
      this.closeSettingsModal();
      document.dispatchEvent(new CustomEvent('np:settings-updated'));
    });
  },

  openSettingsModal() {
    this.initSettingsModal();
    const modal = document.getElementById('np-settings-modal');
    if (!modal) return;
    // Refresh fields with current settings
    const s = this.getSettings();
    modal.querySelector('#np-settings-watts').value = s.printerWatts;
    const rateInput = modal.querySelector('#np-settings-rate');
    if (rateInput) rateInput.value = s.electricityRate;
    this._paintCurrencyButtons(modal, s.currency);
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  },

  closeSettingsModal() {
    const modal = document.getElementById('np-settings-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
};

window.NP = NP;
