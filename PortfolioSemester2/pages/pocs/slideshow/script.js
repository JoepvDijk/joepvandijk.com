var slideIndex = [1,1];            
var slideId = ["mySlides1", "mySlides2",]  /*Hier maak ik variabele voor de slide id's */
showSlides(1, 0);
showSlides(1, 1); /*Dit zijn functies showslides die uitgevoerd worden, de waardes hierachter worden meegegeven*/
      // (1,0) is voor de eerste slider en (1,1) is voor de tweede slider, in de html staat <a class="prev" onclick="plusSlides(-1, 0)">&#10094;</a> bij de terugknop
      // en <a class="next" onclick="plusSlides(1, 0)">&#10095;</a> bij de next knop, deze geven dus de +1 en de -1 om verder te gaan en terug.
      
      // er staat onclick="plusSlides" dit betekent dus dat de functie hieronder word opgeroepen

function plusSlides(n, no) {  /*Met deze functie kun je heen en terug in de slideshow door n te veranderen, ga je verder dan komt er een bij, ga je terug dan gaat er een vanaf */
  showSlides(slideIndex[no] += n, no);    
}

function showSlides(n, no) {               
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    //als n groter is dan de lengte van de array word deze weer terug gezet waardoor n nooit groter word dan het aantal foto's
  if (n < 1) {slideIndex[no] = x.length}                      //dit doet hetzelfde als de regel hierboven maar dan 
  for (i = 0; i < x.length; i++) {                            // voor wanneer n kleiner word zodat je ook achteruit kan gaan in de array en dus de foto's
     x[i].style.display = "none";      //Dit zorgt ervoor dat er met een loop alle foto's steeds worden verborgen      
  }
  console.log(x[no]-1)
  x[slideIndex[no]-1].style.display = "block";    // hier word gecheckt welke waarde n heeft. Als n = 0 word de eerste afbeelding weergegeven, is n = 1 dan de tweede etc.
}

