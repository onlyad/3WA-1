/**
 * Created by jour on 5/20/2015.
 */
// Déclaration de deux variables.
var iAge;
var sFirstname;


// Affectation d'une valeur à une variable.
sFirstname = window.prompt('Ton nom :');
iAge = window.prompt('Ton iAge :');


// Concaténation
sFirstname = sFirstname + " Junior";

// On peut aussi concaténer directement dans une opération
document.write("<p>Salut " + sFirstname + "</p>");

// incrémentation : on ajoute 1
iAge++; // équivalent à iAge = iAge + 1;
document.write('<p>Tu es sur Terre depuis ' + iAge + ' ans</p>');


// Affiche l'iAge réel
iAge--; // décrémentation
document.write('<p>Mais, en vérité tu as ' + iAge + ' ans</p>');