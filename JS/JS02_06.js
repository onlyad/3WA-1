/**
 * Created by jour on 5/21/2015.
 */

const iVAL_MAX = 999;
var iSquareNumber;

for (var iCounter = 1; iCounter <= iVAL_MAX; iCounter += 2) {
    if (iCounter < 100) {
        iSquareNumber = Math.pow(iCounter, 2);

        if (iCounter % 5 == 0) {
            document.write("<br>Valeur: " + iCounter  + " est: -" + iSquareNumber);
        }
        else {
            document.write("<br>Valeur: " + iCounter  + " est: " + iSquareNumber);
        }

    }
    else if (iCounter > 300) {
        document.write("<br>" + iCounter);
        if ( iCounter / 5 == parseInt(iCounter / 5)) {
            document.write("<br>Valeur: " + iCounter  + " est: -" + iCounter);
        }
    }
}

// Bonus
var iValue;

for (var iOddNumber = 0; iOddNumber <= 999; iOddNumber += 2) {
    iValue = 0;



}



