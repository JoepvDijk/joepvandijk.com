
var modallist = document.querySelectorAll(".myModal");   // Pakt alle .myModal klasses en zet die in een list


var btn = document.querySelectorAll(".myBtn");          // Pakt alle .myBtn klasses en zet die in een list


var span = document.querySelectorAll(".close");          // Pakt alle .close klasses en zet die in een list



window.onclick = function(event) {
  if (Array.from(modallist).includes(event.target)) {      // er word een normale array gemaakt van modallist en kijkt of het element waar je op klikt in de lijst staat
    closemodals();
    
  }
}

btn.forEach(element => {                                 // de functie gaat door het lijstje van btn en de loop voert hij uit voor elk item in dat lijstje

    
element.onclick = function() {
    var modal = element.nextElementSibling;    //het element dat naast de knop staat word geselecteerd, dit is de modal. Zo open je de juiste modal met de bijbehorende knop
    console.log(modal);
    modal.style.display = "block";            //zorgt dat de modal van display none naar display block gaat
    document.body.style.overflow="hidden";    
    
  }

});

span.forEach(element => {                   //zorgt ervoor dat de functie closemodals word uitgevoerd wanneer er op het kruisje geklikt word
element.onclick = function() {
    closemodals();
  }
});

function closemodals(){                  //deze functie zorgt ervoor dat de model weer een display none krijgt en dus verdwijnt. 
    modallist.forEach(element => {
        element.style.display = "none";
        document.body.style.overflow="";
    });
}






// SLICK

$('.carousel').slick();
$('.carousel2').slick();
$('.carousel3').slick();
$('.carousel4').slick();
$('.carousel5').slick();
$('.carousel6').slick();
$('.carousel7').slick();


  // $('.carousel').slick({
  //   centerMode: true
  // });



        var audio = document.getElementById("myaudio");   //Hiermee zetten we de muziek standaard wat zachter zodat niemand gehoorschade krijgt
        audio.volume = 0.07;
     