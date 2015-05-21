/**
 * Created by jour on 5/20/2015.
 */


const fNORMAL_PRICE = 100;
const sIF_CLIENT_GET_DISCOUNT = "Avez vous une reduction? (O)ui/ (N)on";
const sCLIENT_DISCOUNT_PERCENTAGE = "Quel est le percentage de reduction?";

var bIfClientGetDiscount;
var fActualPrice;
var fDiscountAmount;
var fPriceAfterDiscount;
var fPriceAfterTax;;
var iAge;
var iDiscountPercentage;



iAge = prompt("Votre age?");

bIfClientGetDiscount = confirm(sIF_CLIENT_GET_DISCOUNT);
if (bIfClientGetDiscount == true ){
    iDiscountPercentage = prompt(sCLIENT_DISCOUNT_PERCENTAGE );
}

if (iAge < 18) {
    document.write("<p> Vous payez rien!</p>");
}
else if (iAge < 25) {
    fActualPrice = fNORMAL_PRICE / 2;
    document.write("<p>Vous payez la moitie prix: " + fActualPrice.toFixed(2) +"</p>");

}
else if (iAge > 77) {
    document.write("<p> Vous n'avez pas à payer, c'est gratuit !</p>")
}
else if (sIF_CLIENT_GET_DISCOUNT.toUpperCase() == "O"){
    fDiscountAmount = fNORMAL_PRICE * iDiscountPercentage /100;
    fPriceAfterDiscount = fNORMAL_PRICE - fDiscountAmount;
    fPriceAfterTax =  fPriceAfterDiscount *

    document.write("<ol>" +
    "<li> Prix Hors Taxe: "+ fNORMAL_PRICE + "</li>" +
    "<li> Montant de reduction: " + fDiscountAmount + "</li>" +
    "</ol>" );
}

else {
    document.write("<p>Vous payez plein prix!</p>");
}
