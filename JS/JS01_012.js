/** Js1_012
 * Created by jour on 5/20/2015.
 */

/** Step 1: Declare Variable
 *
 */
var aWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var aMonths = ["January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"];
var dToday = new Date();
// alert("Coucou");

document.write("<br>It's " + aWeekDays[dToday.getDay()] + " " + dToday.getDate() + "th " + aMonths[dToday.getMonth()] +
" " + dToday.getFullYear() + " " + dToday.getHours() + ":" + dToday.getMinutes() + ":" +
dToday.getSeconds());

/** Bonus: 1. Afficher la même date que dans l'exemple.
 * Regarder les différentes choses que l'on peut mettre dans
 */
var dGivenDate = new Date(2015, 5, 19, 16, 0, 0, 0); //new Date(year, month, day, hours, minutes, seconds, milliseconds)
document.write("<br>It's " + aWeekDays[dGivenDate.getDay()] + " " + dGivenDate.getDate() + "th " + aMonths[dGivenDate.getMonth()] +
" " + dGivenDate.getFullYear() + " " + dGivenDate.getHours() + ":" + dGivenDate.getMinutes() + ":" +
dGivenDate.getSeconds());

var dGivenDate2 = new Date("September 09, 2014 09:00:00");
document.write("<br>It's " + aWeekDays[dGivenDate2.getDay()] + " " + dGivenDate2.getDate() + "th " + aMonths[dGivenDate2.getMonth()] +
" " + dGivenDate2.getFullYear() + " " + dGivenDate2.getHours() + ":" + dGivenDate2.getMinutes() + ":" +
dGivenDate2.getSeconds());