https://waytolearnx.com/2020/04/exercice-javascript-corrige-partie-3.html


// Partie 3 - Exercice 1:
// Créez une fonction qui vérifier l’égalité de deux paramètres a et b.
// La valeur et le type de paramètres doivent être testés afin d’avoir une égalité.
// La fonction doit renvoyer TRUE si les paramètres sont égaux et FALSE s’ils sont différents.
// Exemple:
// checkEq(5, 5) ➞ true
// // number = number: leur type et leur valeur sont égaux
// checkEq(5, 0) ➞ false
// // number = number: leur type sont égaux et leur valeur sont différent
// checkEq(5, false) ➞ false
// // number <> boolean: leur type est différent
// checkEq(5, ‘5’) ➞ false
// // number <> string: leur type est différent


// Fonction à 2 paramètres, l'opérateur de comparaison "===" teste l'égalité de valeur et de type,
// puis renvoie true ou false.
function egalite(a, b) {
    return a === b;

}
//Test :
console.log(egalite(1, 1));
console.log(egalite(1, 2));
console.log(egalite(1, "toto"));



// Exercice 2:
// Créez une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.
// Exemple:
// isEmpty("1") ➞ false
// isEmpty("WayToLearnX") ➞ false
// isEmpty("  ") ➞ false
// isEmpty("") ➞ true


// La fonction regarde si la longueur de notre paramètre est égale à 0.
// L'opérateur de comparaison renvoie true ou false.
function empty(string) {
    return string.length == 0;
}
// Test :
console.log(empty(""));
console.log(empty("test"));



// Exercice 3: Concaténer deux chaînes en une seule chaîne
// Avec deux chaînes, str1 et str2, renvoyez une seule chaîne au format « str1 | str2 ».
// Exemple:
// concatStr("True", "False") ➞ "True | False"
// concatStr("On", "Off") ➞ "On | Off"
// concatStr("A", "B") ➞ "A | B"

function concatStr(str1, str2) {
    return str1 + str2;
}

console.log(concatStr("bon", "jour"));

// Je ne connaissais pas cette façon de concaténer
function concatStr2(str1, str2) {
    return `${str1} | ${str2}`;
}
console.log(concatStr2("bon", "jour"));



// Exercice 4:
// Créez une fonction qui prend un nom et renvoie un message d’accueil sous la forme d’une chaîne.
// N’utilisez pas une fonction normale mais utilisez une fonction fléchée(Arrow)
// Exemple:
// msg("Thomas") ➞ "Hello Thomas, Welcome to WayToLearnX!"
// msg("Alex") ➞ "Hello Alex, Welcome to WayToLearnX!"
// msg("Emily") ➞ "Hello Emily, Welcome to WayToLearnX!

const message = (nom) => "Bonjour " + nom + " !";
var r = message("Toto");
console.log(r);

// Corrigé :
// const msg = name => `Hello ${name}, Welcome to WayToLearnX!`
// console.log(msg("Thomas"));
// console.log(msg("Alex"));
// console.log(msg("Emily"));



// Exercice 5:
// Écrivez une fonction qui renvoie la longueur d’une chaîne. Utiliser une fonction récursive.
// Exemple:
// size("alex") ➞ 5
// size("x") ➞ 1
// size("") ➞ 0

// Corrigé
// Je ne saisi pas cet exercice ...
function size(str, n = 0) {
    if (str[n] === undefined) {
        return n
    }
    return size(str, n + 1)
}
console.log(size("test"));



//  Partie 3 - Exercice 6:
// Créez une fonction qui prend deux chaînes str1 et str2 comme arguments et renvoie TRUE
// si le nombre total de caractères dans la première chaîne est égal au nombre total de caractères
// dans la deuxième chaîne sinon renvoie FALSE.
// Exemple:
// compareSize("AA", "BB") ➞ true
// compareSize("123", "1") ➞ false
// compareSize("Ali", "Bob") ➞ true

// On retourne l'opération de comparation de la longueur des chaînes de caractères
function compareSize(str1, str2) {
    return str1.length == str2.length;
}

console.log(compareSize("te", "jfnrle"));
console.log(compareSize("deux", "1234"));



// Exercice 7:
// Créez une fonction qui prend la hauteur et la largeur et trouve le périmètre d’un rectangle.
// Exemple:
// getPerimeter(2, 6) ➞ 16
// getPerimeter(3, 10) ➞ 26
// getPerimeter(1, 5) ➞ 12

// On retourne ici la hauteur et la largeur multipliés par 2 pour obtenir la valeur du périmètre.
function perimetre(h, l) {
    return ((h + l) * 2);
}
console.log(perimetre(5, 4));



// Exercice 8: Le problème du fermier
// Dans ce défi, un fermier vous demande de lui dire combien de pattes peuvent être comptées parmi tous ses animaux.
// Il y a trois espèces:
// poulets = 2 pattes
// vaches = 4 pattes
// chevaux = 4 pattes
// Le fermier a compté ses animaux et il vous donne un sous-total pour chaque espèce.
// Vous devez implémenter une fonction qui renvoie le nombre total de pattes de tous les animaux.
// L’ordre des animaux transmis à la fonction est nbrsPattes(poulets, vaches, chevaux).
// Exemple:
// nbrsPattes(1, 4, 2) ➞ 26
// nbrsPattes(2, 2, 2) ➞ 20
// nbrsPattes(2, 0, 3) ➞ 16
// N’oubliez pas que le fermier veut connaître le nombre total de pattes et non pas le nombre total d’animaux.

// On retourne simlpement le calcul en fonction du nombre de pattes par animal
function nbrsPattes(poulets, vaches, chevaux) {
    return (poulets * 2 + vaches * 4 + chevaux * 4);
}
console.log(nbrsPattes(2, 1, 1));



// Exercice 9: Nombre paire ou impaire
// Créez une fonction qui prend un nombre comme argument et renvoie « pair » pour les nombres pairs
// et « impair » pour les nombres impairs.
// Exemple:
// check(2) ➞ "pair"
// check(7) ➞ "impair"
// check(22) ➞ "pair"

// Si le modulo de n/2 est égal à 0, il s'agit d'un nombre pair.
function pairImpair(n) {
    if (n % 2 == 0) {
        return n + " est un nombre pair"
    }
    else {
        return n + " est un nombre impair"
    }
}
console.log(pairImpair(57));
console.log(pairImpair(62));

// Corigé
// Je ne connaissais pas cet opérateur de comparaison
function check(n) {
    return n % 2 ? 'impaire' : 'paire';
}
console.log(check(2));
console.log(check(7));
console.log(check(22));



