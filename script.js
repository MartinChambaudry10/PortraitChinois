document.addEventListener("DOMContentLoaded", function() {
var numCase = 0;
    
    data.forEach(function afficheAnalogie(resultat){
        document.querySelector('#list-analogies').innerHTML +=   "<section class='sec2' id="+ resultat.id +"> <h2>Si j’étais " + resultat.analogie + " , je serais :</h2> <h1>" + resultat.valeuranalogie + "</h1> <p class='text'> "+ resultat.descriptionanalogie +"</p> <img class='img' src="+resultat.imagesanalogie+" /></section>";
    
        numCase = numCase + 1;
    });

    
});