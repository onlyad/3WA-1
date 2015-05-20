/**
 * Created by jour on 5/20/2015.
 */


const fNormalPrice = 100;
const sIfClientGetDiscount = "Avez vous une reduction? (O)ui/ (N)on";
const sClientDiscountPercentage = "Quel est le percentage de reduction?";

var bIfClientGetDiscount;
var fActualPrice;
var fDiscountAmount;
var iAge;
var iDiscountPercentage;



iAge = prompt("Votre age?");

bIfClientGetDiscount = confirm(sIfClientGetDiscount);
if (bIfClientGetDiscount == true ){
    iDiscountPercentage = prompt(sClientDiscountPercentage );
}

if (iAge < 18) {
    document.write("<p> Vous payez rien!</p>");
}
else if (iAge < 25) {
    fActualPrice = fNormalPrice / 2;
    document.write("<p>Vous payez la moitie prix: " + fActualPrice.toFixed(2) +"</p>");

}
else if (iAge > 77) {
    document.write("<p> Vous n'avez pas à payer, c'est gratuit !</p>")
}
else if (sIfClientGetDiscount.toUpperCase() == "O"){

    document.write("<ol>" +
    "<li> Prix Hors Taxe: "+ fNormalPrice + "</li>" +
    "</ol>" );
}

else {
    document.write("<p>Vous payez plein prix!</p>");
}
