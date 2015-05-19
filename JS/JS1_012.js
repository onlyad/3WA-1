/**
 * Created by jour on 5/20/2015.
 */

/** Step 1: Declare Variable
 *
 */
var aWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var aMonths = ["January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"];
var dDate = new Date();
// alert("Coucou");

document.write("<br>It's " + aWeekDays[dDate.getDay()] + " " + dDate.getDate() + "th " + aMonths[dDate.getMonth()] +
" " + dDate.getFullYear() + " " + dDate.getHours() + ":" + dDate.getMinutes() + ":" +
dDate.getSeconds());

/** Bonus: 1. Afficher la même date que dans l'exemple.
 * Regarder les différentes choses que l'on peut mettre dans
 */
var dDate1 = new Date(2015, 05, 19, 16, 0, 0, 0); //new Date(year, month, day, hours, minutes, seconds, milliseconds)
document.write("<br>It's " + aWeekDays[dDate1.getDay()] + " " + dDate1.getDate() + "th " + aMonths[dDate1.getMonth()] +
" " + dDate1.getFullYear() + " " + dDate1.getHours() + ":" + dDate1.getMinutes() + ":" +
dDate1.getSeconds());

var dDate2 = new Date("September 09, 2014 09:00:00");
document.write("<br>It's " + aWeekDays[dDate2.getDay()] + " " + dDate2.getDate() + "th " + aMonths[dDate2.getMonth()] +
" " + dDate2.getFullYear() + " " + dDate2.getHours() + ":" + dDate2.getMinutes() + ":" +
dDate2.getSeconds());