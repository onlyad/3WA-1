/**
 * Created by jour on 5/21/2015.
 */
const aPHRASES =
    [
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "Aenean commodo ligula eget dolor. Aenean massa.",
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        "Nulla consequat massa quis enim.",
        "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        "Nullam dictum felis eu pede mollis pretium.",
        "Integer tincidunt. Cras dapibus.",
        "Vivamus elementum semper nisi.",
        "Aenean vulputate eleifend tellus.",
        "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
        "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
        "Phasellus viverra nulla ut metus varius laoreet.",
        "Quisque rutrum. Aenean imperdiet.",
        "Etiam ultricies nisi vel augue.",
        "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "Aenean commodo ligula eget dolor. Aenean massa.",
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.",
        "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        "Nulla consequat massa quis enim.",
        "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        "Nullam dictum felis eu pede mollis pretium.",
        "Integer tincidunt. Cras dapibus.",
        "Vivamus elementum semper nisi.",
        "Aenean vulputate eleifend tellus.",
        "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
        "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
        "Phasellus viverra nulla ut metus varius laoreet.",
        "Quisque rutrum. Aenean imperdiet.",
        "Etiam ultricies nisi vel augue.",
        "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
        "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit ipsuminus max.",
        "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
        "Maecenas nec odio et ante tincidunt tempus.",
        "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.",
        "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
        "Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
        "Sed consequat, leo eget bibendum sodales, augue velit cursus nunc."
    ];


var iLongestPhrasePosition;
var iShortestPhrasePosition ;

iLongestPhrasePosition = 0;
iShortestPhrasePosition = 0;



for (var iPhrasesPosition = 1; iPhrasesPosition < aPHRASES.length; iPhrasesPosition++) {


    if (aPHRASES[iLongestPhrasePosition].length < aPHRASES[iPhrasesPosition].length) {

        //alert(aPHRASES[iLongestPhrasePosition].length + " < " + aPHRASES[iPhrasesPosition + 1].length);
        iLongestPhrasePosition = iPhrasesPosition;
    }
    else if (aPHRASES[iShortestPhrasePosition].length > aPHRASES[iPhrasesPosition].length )
        iShortestPhrasePosition = iPhrasesPosition;
    //alert("The position of the longest pharse:" + iLongestPhrasePosition + " Position: " + iPhrasesPosition);
}

document.write("<br>The Position:" + iLongestPhrasePosition + "Phrase: " + aPHRASES[iLongestPhrasePosition]);
document.write("<br>The Position:" + iShortestPhrasePosition + "Phrase: " + aPHRASES[iShortestPhrasePosition]);

