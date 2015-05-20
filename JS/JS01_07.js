/**
 * Created by jour on 5/19/2015.
 */

/**
 * Step1: Declare Variable & Constant
 *
 */
 //Declare Constant
const fTPS = 0.05; // Pour la TPS
const fTVQ = 0.09975; //Pour la TVQ

// Declare Variable
var fTotalB4Tax;
var fTotalAfterTax;
var fTaxTPS, fTaxTVQ;
var fRebatePercentage, fTotalAfterRebatePercentage;

/**
 * Step2: Ask the user what is the percentage of rebate he wants.
 */
fRebatePercentage = prompt("Combien de percentage de reduction en percentage?");
fTotalB4Tax = 234;

if (fRebatePercentage === 0)
{

    fTaxTPS = (fTotalB4Tax * fTPS);
    fTaxTVQ = (fTotalB4Tax * fTVQ);
    fTotalAfterTax = fTotalB4Tax + fTaxTPS + fTaxTVQ;
    //document.write(fTotalAfterTax);
    document.write("<ol> " +
    "<li> Total before Tax: " + fTotalB4Tax +"</li>" +
    "<li> Tax TPS: " + fTaxTPS + "</li>" +
    "<li> Tax TVQ: " + fTaxTVQ + "</li>" +
    "<li> Total: " + fTotalAfterTax + "</li>"+
    "</ol>  ");
}
else if (fRebatePercentage < 100)
{
    fTotalAfterRebatePercentage = fTotalB4Tax - (fTotalB4Tax * fRebatePercentage);
    fTaxTPS = (fTotalAfterRebatePercentage * fTPS);
    fTaxTVQ = (fTotalAfterRebatePercentage * fTVQ);
    fTotalAfterTax = fTotalAfterRebatePercentage + fTaxTPS + fTaxTVQ;
    //document.write(fTotalAfterTax);
    document.write("<ol> " +
    "<li> Total before Tax: " + fTotalAfterRebatePercentage +"</li>" +
    "<li> Tax TPS: " + fTaxTPS + "</li>" +
    "<li> Tax TVQ: " + fTaxTVQ + "</li>" +
    "<li> Total: " + fTotalAfterTax + "</li>"+
    "</ol>  ");
}


