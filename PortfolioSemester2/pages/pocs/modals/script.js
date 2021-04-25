//Dit haalt de myModal ID uit de html en zet die in een variabele genaamd modal
var modal = document.getElementById("myModal");

//Dit haalt de myBtn Id uit de html en zet die in een variabele genaamd btn
var btn = document.getElementById("myBtn");

//Deze haalt de close class uit de html en zet die in een variabele genaamd span
var span = document.getElementsByClassName("close")[0];

//btn.onclick zorgt ervoor dat deze functie word uitgevoerd wanneer er op de button word geklikt
btn.onclick = function() {
  modal.style.display = "block";      //de functie zorgt ervoor dat de modal een display block krijg en daardoor weer zichtbaar is
}

//Wanneer je op de span klikt (het kruisje) word de functie uitgevoerd, hierdoor krijgt de modal weer een display none en is niet te zien
span.onclick = function() {
  modal.style.display = "none";
}


//Wanneer er op de window word geklikt (maar wel buiten de modal) zal weer deze functie uitgevoerd worden en de modal een display none krijgen
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

