/**
 * Created by jour on 5/19/2015.
 */
/**
 * Etape 1
 * --------
 * Déclaration des variables & constantes.
 */
// Déclaration de constantes.
const TPS = 5.0; // pour la TPS
const TVQ = 9.975; // pour la TVQ

// Déclaration de trois variables.
var fTaxNotIncludingPrice;
var fTotalPrice;
var fTaxPrice;


/**
 * Etape 2
 * --------
 * Affectation
 */
// Affectation d"une valeur à une variable.
fTaxNotIncludingPrice = 234;

// Opérations sur des variables et constantes.
fTaxPrice = fTaxNotIncludingPrice * TPS / 100 + fTaxNotIncludingPrice * TVQ / 100;
fTotalPrice = fTaxNotIncludingPrice + fTaxPrice;


/**
 * Etape 3
 * --------
 * Traitements, opérations sur les variables.
 */
// Affichage du résultat directement dans la page HTML.
document.write("<ul>");
document.write("<li>Prix HT : ");
document.write(fTaxNotIncludingPrice);
document.write("</li>");
document.write("<li>Taxes: ");
document.write(fTaxPrice);
document.write("</li>");
document.write("<li>Total : ");
document.write(fTotalPrice);
document.write("</li>");
document.write("</ul>");
