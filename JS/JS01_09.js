/**
 * Created by jour on 5/19/2015.
 */

/** Step 1: Declare Var
 *
 */
var sUserName;
var iUserAge;

/** Step 2: Get User name and iAge
 *
 */
sUserName = prompt("Quel est votre nom?");
iUserAge  = prompt("Quel est votre iAge?");

/** Step 3: Display User Name with the word "junior" at the end
 *
 */
 document.write("Bonjour " + sUserName + " Junior");

/** Step 4: Display how many year user exist.
 * If user is 10 years old, s/he exist for 11 years.
 */
iUserAge++;
document.write("<br> Votre iAge reel: " + iUserAge  );