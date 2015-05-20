/**
 * Created by jour on 5/20/2015.
 */
/** Step1: Declare Var
 *
 */
var dToday = new Date();
var iCarAge;
var oCar;
var sLastPassengerName;
var sPassengerNames = "";

/** Step2: Set Var
 *
 */
oCar = {
    brand: "Toyota", makeYear: "1999", datePurchased: "2014-12-24-T09:00:00",
    passengerNames: ["Mike", "Charles", "Annie"]
};


document.write("<p> Your car is made by " + oCar.brand + ", Make Year:" + oCar.makeYear + ", Purchased Date: " + oCar.datePurchased +
", There is " + oCar.passengerNames.length + " passengers. " +
"</p>");

for (var i = 0; i < oCar.passengerNames.length; i++) {
    iNumber = i + 1;
    sPassengerNames += "Passenger " + iNumber + " Name is: " + oCar.passengerNames[i] + ", ";
}
sPassengerNames = sPassengerNames.substr(0, sPassengerNames.length - 2) + ".";
//Bonus
/** Step:
 *  This write all the names of each passenger;
 */
document.write(sPassengerNames);

/** Step:
 *  This write the names of last passenger;
 */
sLastPassengerName = oCar.passengerNames[oCar.passengerNames.length - 1];
document.write("<p> Last passenger name: " + sLastPassengerName + ".</p>");

//alert("Coucou0");
/** Step:
 *  This write the iAge of the car;
 */
iCarAge = dToday.getFullYear() - parseInt(oCar.makeYear);
//alert("Coucou");
document.write("<p>Car's iAge: " + iCarAge + ".</p>");
