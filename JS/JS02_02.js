/**
 * Created by jour on 5/20/2015.
 */

var iAge;


iAge = prompt("Votre age?");

if (iAge < 18) {
    document.write("<p> Vous payez rien!</p>");
}
else if (iAge < 25) {
    document.write("<p>Vous payez la moitie prix!</p>");
}
else if (iAge > 77) {
    document.write("<p> Vous n'avez pas à payer, c'est gratuit !</p>")
}
else {
    document.write("<p>Vous payez plein prix!</p>");
}