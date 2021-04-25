
// BLUE
var st2Elements = document.querySelectorAll(".st2");     // Dit haalt de .st2 classes uit de html en zet deze in een variabele genaamd st2Elements

st2Elements.forEach(function(st2Elem) {                 //Voor elke st2Elements word een functie uitgevoerd wanneer je met je mouse erover hovert en wanneer deze weer weg is
  st2Elem.onmouseover = SetColor;                       // de functie setcolor zie je hieronder en vervangt de kleur met een andere kleur
  st2Elem.onmouseout = RemoveColor;                    // de functie removecolor zie je ook hieronder en haalt weer de kleur weg
}); 

function SetColor() {
  st2Elements.forEach(function(e){
  e.style.fill = "red";                             // deze functie zorgt ervoor dat de fill van je svg path verandert naar rood
  });
}
function RemoveColor() {
  st2Elements.forEach(function(e){
  // (reset)
  e.style.fill = "";                               // deze functie zorgt ervoor dat de fill weer weg gaat en de svg zijn originele kleur krijgt
  });
}                                                  // omdat elke kleur anders word en is moet ik voor elke kleur deze code herhalen
 


// DARK BLUE
var st7Elements = document.querySelectorAll(".st7");

st7Elements.forEach(function(st7Elem) {
  st7Elem.onmouseover = SetColor7;
  st7Elem.onmouseout = RemoveColor7;
});

function SetColor7() {
  st7Elements.forEach(function(e){
  e.style.fill = "yellow";
  });
}
function RemoveColor7() {
  st7Elements.forEach(function(e){
  // (reset)
  e.style.fill = "";
  });
}



// PURPLE
var st4Elements = document.querySelectorAll(".st4");

st4Elements.forEach(function(st4Elem) {
  st4Elem.onmouseover = SetColor4;
  st4Elem.onmouseout = RemoveColor4;
});

function SetColor4() {
  st4Elements.forEach(function(e){
  e.style.fill = "green";
  });
}
function RemoveColor4() {
  st4Elements.forEach(function(e){
  // (reset)
  e.style.fill = "";
  });
}



// ORANGE
var st6Elements = document.querySelectorAll(".st6");

st6Elements.forEach(function(st6Elem) {
  st6Elem.onmouseover = SetColor6;
  st6Elem.onmouseout = RemoveColor6;
});

function SetColor6() {
  st6Elements.forEach(function(e){
  e.style.fill = "magenta";
  });
}
function RemoveColor6() {
  st6Elements.forEach(function(e){
  // (reset)
  e.style.fill = "";
  });
}






var st2Elements = document.querySelectorAll(".st2");
// vind alle st2 elementen
var textone = document.querySelector(".textone");
// vind .text element

var clickstate = false;
// maakt een variabele voor de clickstate aan zodat hierin geswitched kan worden

st2Elements.forEach(function(st2El){
 
  st2El.onclick = ChangeSomething;
  // zorgt dat de functie ChangeSomething opgeroepen word wanneer er een click op de variabele st2Elements is

});

function ChangeSomething() {
    if(clickstate == true){
        clickstate = false
        textone.style.display = "none";
    }
    else{
        clickstate = true
        textone.style.display = "flex";            // Eerst had ik nog clickstate en changesomething zonder een 2 erachter, dit betekende dat de clickstate bleef veranderen
                                                   // ook als er ergens anders geklikt werd waardoor je soms 2x moest klikken om een text zichtbaar te krijgen.
    }
  }



  var st7Elements = document.querySelectorAll(".st7");
// vind alle st7 elementen
var texttwo = document.querySelector(".texttwo");
// vind .text element

var clickstate2 = false;
// maakt een variabele voor de clickstate aan zodat hierin geswitched kan worden

st7Elements.forEach(function(st7El){
 
  st7El.onclick = ChangeSomething2;
  // zorgt dat de functie ChangeSomething opgeroepen word wanneer er een click op de variabele st2Elements is

});

function ChangeSomething2() {
    if(clickstate2 == true){
        clickstate2 = false
        texttwo.style.display = "none";
    }
    else{
        clickstate2 = true
        texttwo.style.display = "flex";          // Eerst had ik nog clickstate en changesomething zonder een 2 erachter, dit betekende dat de clickstate bleef veranderen
                                                 // ook als er ergens anders geklikt werd waardoor je soms 2x moest klikken om een text zichtbaar te krijgen.
    }
  }



  var st4Elements = document.querySelectorAll(".st4");
// vind alle st4 elementen
var textthree = document.querySelector(".textthree");
// vind .text element

var clickstate3 = false;
// maakt een variabele voor de clickstate aan zodat hierin geswitched kan worden

st4Elements.forEach(function(st4El){
 
  st4El.onclick = ChangeSomething3;
  // zorgt dat de functie ChangeSomething opgeroepen word wanneer er een click op de variabele st2Elements is

});

function ChangeSomething3() {
    if(clickstate3 == true){
        clickstate3 = false
        textthree.style.display = "none";
    }
    else{
        clickstate3 = true
        textthree.style.display = "flex";
    }
  }




  var st6Elements = document.querySelectorAll(".st6");
  // vind alle st6 elementen
  var textfour = document.querySelector(".textfour");
  // vind .text element
  
  var clickstate4 = false;
  // maakt een variabele voor de clickstate aan zodat hierin geswitched kan worden
  
  st6Elements.forEach(function(st6El){
   
    st6El.onclick = ChangeSomething4;
    // zorgt dat de functie ChangeSomething opgeroepen word wanneer er een click op de variabele st2Elements is
  
  });
  
  function ChangeSomething4() {
      if(clickstate4 == true){
          clickstate4 = false
          textfour.style.display = "none";
      }
      else{
          clickstate4 = true
          textfour.style.display = "flex";
      }
    }