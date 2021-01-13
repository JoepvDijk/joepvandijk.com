window.addEventListener("load", () =>{                        //Zorgt ervoor dat alles wat hierin staat pas activeerd als de volledige pagina is geladen
    const links = document.querySelector(".links")

    setInterval(()=>{                                       //In deze interval wordt een class voor animatie weggehaald en weer toegevoegd waardoor de animaties opnieuw beginnen
        links.classList.remove("linksAnimated")
        setTimeout(()=>{                                    //Als je de animatie meteen weghaalt en toevoegd werkt het niet goed, door hier een kleine pauze tussen te zetten werkt het weer
            links.classList.add("linksAnimated")            //Deze kleine pauze maak je door setTimeout te gebruiken, hier staat in wat er gebeurd na de aangegeven tijd
        }, 100)                                             //Hier kun je de aangegeven tijd instellen in miliseconden
        
    }, 15000 )                     //Hier zet je hoeveel miliseconde de interval erover doet om weer opnieuw te beginnen en dus de classes weg te halen en weer toe te voegen

    

})