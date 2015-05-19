/**
 * Created by jour on 5/20/2015.
 */

/** Step 1: Declare Variable
 *
 */
var aWeekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
document.write("La premiere jour de la semaine est: " + aWeekDays[0]+ "." +
               "La derniere jour de la semaine est: " + aWeekDays[aWeekDays.length-1] );
document.write("<br>Le nombre de jour dans une semain: " + aWeekDays.length );


for(var i =0; i < aWeekDays.length; i++) {
    document.write("<br>" + aWeekDays[i]); //Affiche tous les jours de la semaine
}
