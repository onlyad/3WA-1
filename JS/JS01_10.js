/**
 * Created by jour on 5/19/2015.
 */
/** Step 1: Declare Var
 *
 */
var iValue1;
var iValue2;
var iTotalValue; // Total = iValue1 + iValue2

/** Step 2: Get iValue1, iValue2 from User
 *
 */
iValue1 = prompt("Valeur 1?");
iValue2 = prompt("Valeur 2?");

/** Step 3: Calculate Sum of iValue1 + iValue2
 *
 */
iValue1 = parseInt(iValue1);
iValue2 = parseInt(iValue2);
iTotalValue = iValue1 + iValue2 ;

/** Step4: Display Sum of iValue1 + iValue2
 *
 */
document.write("La Somme de " + iValue1 + "+" + iValue2 + "=" + iTotalValue);


