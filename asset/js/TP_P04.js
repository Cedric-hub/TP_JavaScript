// https://waytolearnx.com/2020/04/exercice-javascript-corrige-partie-4.html

// Partie 4 - Exercice 1:
// Créez une fonction pour concaténer deux tableaux entiers.
// Exemple:
// concatener([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
// concatener([9, 8], [1, 5, 6, 7]) ➞ [9, 8, 1, 5, 6, 7]
// concatener([1, 1, 1], [2, 2, 2]) ➞ [1, 1, 1, 2, 2, 2]

// Corrigé :
function concatener(tab1, tab2) {
    return [...tab1, ...tab2]
}
console.log(concatener([1, 2], [3, 4]));
console.log(concatener([9, 8], [1, 5, 6, 7]));
console.log(concatener([1, 1, 1], [2, 2, 2]));



// Exercice 2:
// Créez une fonction qui trouve l’index d’un élément donné. Si l’élément n’existe pas, retournez -1.
// Exemple:
// find([2, 7, 1], 7) ➞ 1
// find([6, 9, 5], 6) ➞ 0
// find([6, 7, 8], 9) ➞ -1


// La boucle for parcourt le tableau à la recherche de la valeur "val"
// Si l'égalité est constatée, la position de celle-ci "i" est retournée, sinon -1 est retourné
function find(tab, val) {
    for (var i = 0; i < tab.length; i++) {
        if (val == tab[i]) return i;
    }
    return -1
}
console.log(find([2, 7, 1], 7));
console.log(find([6, 9, 5], 6));
console.log(find([6, 7, 8], 9));



// Partie 4 - Exercice 3:
// Écrivez une fonction pour vérifier si un tableau contient un nombre particulier.
// Exemple:
// nbrExist([6, 7, 8], 7) ➞ true
// nbrExist([1, 2, 3], 5) ➞ false
// nbrExist([], 0) ➞ false


// De la même façon que pour l'exercice précédent, on parcourt le tableau avec la boucle for
// Si la valeur "val" est égale à l'un des composant du tableau, on retourne la valeur TRUE
function nbrExist(tab, val) {
    for (var i = 0; i < tab.length; i++) {
        if (val == tab[i]) return "TRUE"
    }
    return "FALSE"
}
console.log(nbrExist([6, 7, 8], 7));
console.log(nbrExist([1, 2, 3], 5));
console.log(nbrExist([], 0));



// Exercice 4:
// Créez une fonction qui prend une chaîne (un nom aléatoire).
// Si le dernier caractère du nom est un « s », retournez TRUE, sinon retournez FALSE.
// Exemple:
// checkS("Thomas") ➞ true
// checkS("Ali") ➞ false
// checkS("Alex") ➞ false
// checkS("Alvis") ➞ true

// La longueur d'une chaîne de caractères -1 donne l'identifiant du dernier caractère de la chaîne.
// Sa valeur est donc comparrée à S
function checkS(str) {
    return str[str.length - 1] == "s";
}

console.log(checkS("Thomas"));
console.log(checkS("Ali"));
console.log(checkS("Alex"));
console.log(checkS("Alvis"));



// Partie 4 - Exercice 5:
// Créez une fonction qui renvoie TRUE si une chaîne contient des espaces. Sinon renvoie FALSE.
// Exemple:
// containSpaces("Thomas") ➞ false
// containSpaces("Hello World!") ➞ true
// containSpaces(" ") ➞ true
// containSpaces("") ➞ false

// J'ai fait un boucle for pour parcourir la chaîne de caractères et comparer chacun d'eux avec " "
function containSpaces(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") return "TRUE"
    }
    return "FALSE"
}
// Afficher la sortie
console.log(containSpaces("Thomas"));
console.log(containSpaces("Hello World!"));
console.log(containSpaces(" "));
console.log(containSpaces(""));

// Le corrigé est plus simple, utilisant l'opération includes :
// function containSpaces(str) {
//     return str.includes(' ')
//   }



// Partie 4 - Exercice 6:
// Créez une fonction qui prend un objet comme argument et renvoie une chaîne qui représente une personne.
// Les attributs de la personne devront être extraits des trois propriétés de l’objet:
// nom
// age
// adresse
// La chaîne doit avoir le format suivant: X a Y ans. Il habite à Z.
// (où X est le nom de la personne, Y est l’age et Z est l’adresse).
// Exemple:
// formatPrs({
//   nom: "Thomas",
//   age: "25",
//   adresse: "Paris"
// })
// ➞ "Thomas a 25 ans. Il habite à Paris."
// formatPrs({
//   nom: "Emily",
//   age: "22",
//   adresse: "Nantes"
// })
// ➞ "Emily a 22 ans. Il habite à Nantes."

// Vu ce matin en formation avec Damien, le corrigé est tout autre une nouvelle fois
var Personne = {
    nom: 'Thomas',
    age: 25,
    adresse: 'Paris',
}
console.log(Personne.nom + " a " + Personne.age + " ans. Il habite à " + Personne.adresse + ".")

// Corrigé :
function formatPrs(personne) {
    return `${personne.nom} a ${personne.age} ans. Il habite à ${personne.adresse}.`;
}
console.log(formatPrs({ nom: "Thomas", age: "25", adresse: "Paris" }));
console.log(formatPrs({ nom: "Emily", age: "22", adresse: "Nantes" }));