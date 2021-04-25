var inhouddiv = document.querySelector(".inhouddiv");
var sidemenu = document.querySelector(".sidemenu"); //Dit vind de html elementen


window.onload = function(){ // Dit checkt de hoogte wanneer de pagina word geladen
  CheckHeight();            // Als dit niet word gedaan werkt dit niet goed als je midden op je pagina zou refreshen
} 


window.onscroll = CheckHeight; // Deze voert de checkheigt uit wanneer je scrollt

function CheckHeight(){
  var inhoudPosition = inhouddiv.getBoundingClientRect(); //Haal de positie van de titel op en sla deze op in een tijdelijke variabele. (inhoudPosition)
  
  if(inhoudPosition.top <= 0){ //Wanneer de bovenkant van de titel kleiner of gelijk is aan 0 (de bovenkant van de pagina),
    sidemenu.style.display = "block"; //Laat de links zien (dit kan met "flex" of "block")
  } 
  else{
     sidemenu.style.display = ""; //Wanneer de titel lager dan de bovenkant van de pagina staat, verberg de links.
  }

}