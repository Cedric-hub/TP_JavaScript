// Partie 1 - Exercice 1:
// Créez une fonction qui prend deux nombres comme arguments et retourne leur somme.
// Exemple:
// addition(1, 2) ➞ 3
// addition(-2, -4) ➞ -6

// Je déclare une fonction avec 2 paramètres en entrée
function somme(a, b) {
    // Je retourne la somme de ces 2 paramètres
    return a + b;
}
// Pour tester, je déclare une variable "r" utilisant la fonction
var r = somme(5, 7);
// J'affiche le résultat de r
console.log(r);

// La solution proposée est plus complète et inclus un test afin de
//s'assurer que les 2 variables sont bien des nombre avec la fonction if avant d'en faire la somme.
// function addition(x, y) {
//     if (typeof x !== "number" || typeof y !== "number") {
//         return "Erreur : veuillez entrer deux nombres!";
//     }
//     return x + y;
// }


// Partie 1 - Exercice 2:
// Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.
// Exemple:
// minuteToSecond(4) ➞ 240
// minuteToSecond(3) ➞ 180

// Je déclare une fonction prenant en entrée le nombre de minutes à convertir en secondes
// La fonction retourne la valeur multipliée par 60
function secondes(m) {
    return m * 60;
}
// J'affiche le résultat avec 2 en paramètre d'entrée à ma fonction
console.log(secondes(2));



// Partie 1 - Exercice 3:
// Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le résultat.
// Exemple:
// increment(1) ➞ 2
// increment(4) ➞ 5

// La fonction prend 1 paramètre et retourne ce paramètre après l'avoir incrémenté.
// Placer le ++ avant la a, retourne la valeur après avoir incrémenté le paramètre.
function incremente(a) {
    return ++a;
}
// Test :
console.log(incremente(5.4));



// Exercice 4:
// Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface. Notez que la surface d’un triangle est: (base * hauteur) / 2
// Exemple:
// getSurface(8, 2) ➞ 8
// getSurface(7, 3) ➞ 10.5


// La fonction prend 2 paramètres et retourne le résultat de leur multiplication puis de leur division par 2
function surfaceTriangle(b, h) {
    return (b * h) / 2;
}
// Test :
console.log(surfaceTriangle(5, 4));



// Partie 1 - Exercice 5:
// Écrivez un programme JavaScript pour inverser une chaîne de caractères.
// Exemple:
// strReverse(‘WayToLearnX’) ➞ XnraeLoTyaW
// strReverse(‘Hello’) ➞ olleH


// J'ai dû regarder le résultat pour comprendre
// La fonction sépare la chaine de caractères en entrée, inverse ces caractères pour finalement les joindre de nouveau avant de retourner le résultat

function strReverse(str) {
    return str.split("").reverse().join("");
}
// Test :
console.log("joyeux " + strReverse("leon"));



// Partie 1 - Exercice 6:
// Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.
// Exemple:
// getMax(5, 9, 1) ➞ 9
// getMax(2, 3, 10) ➞ 10


// J'ai créé une fonction à 3 paramètres, chacun d'eux est comparé aux 2 autres afin de savoir s'il est la valeur la plus grande. Si c'est le case, la valeur est retournée.
function plusGrand(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    }
    if (b >= a && b >= c) {
        return b;
    }
    if (c >= a && c >= b) {
        return c;
    }
}
// Test :
console.log(plusGrand(56, 21, 86));

// Me doutant que ma méthode ne serait pas celle proposée, je la compare au corigé :
// 3 comparaisons sont également nécessaire mais ici, chaque comparaison est plus simple.
function getMax(a, b, c) {
    // la valeur maximale est initialisée à 0
    max = 0;
    // On regarde si a est supérieur à b,
    // Si oui, la valeur maximale devient égale à a
    if (a > b) {
        max = a;
    }
    // Si non, la valeur maximale devient b
    else {
        max = b;
    }
    // Enfin on compare notre nouvelle valeur "max" à c, si c est supérieur, la valeur devient c
    if (c > max) {
        max = c;
    }
    // On retourne la nouvelle valeur max
    return max;
}
// Test :
console.log(plusGrand(56, 21, 86));



// Partie 1 - Exercice 7:
// Créez une fonction qui prend un tableau et renvoie le premier élément.
// Notez que le premier élément d’un tableau commence toujours par l’index 0.
// Exemple:
// getFirst([1, 2, 3]) ➞ 1
// getFirst([50, 60, 70]) ➞ 50


// La fonction prend en paramètre un élément t
// L'élément t est un table [], la première valeur contenue dans celui-ci est retournée t[0]
function premierElement(t) {
    return t[0];
}
// Déaclaration du tableau puis test de la fonction:
var table = [7, 9, 32, 3];
console.log(premierElement(table));



// Exercice 8:
// Écrivez un programme JavaScript pour récupérer l’URL d’un site Web

// Je n'ai pas réussi à tester la réponse


// var string = document.URL;
// var currentURL = document.URL;
// console.log(document.URL);





// Partie 1 - Exercice 9:
// Écrivez un programme JavaScript pour renvoyer le reste de deux nombres.
// Il existe un seul opérateur en JavaScript, capable de fournir le reste d’une division.
// Deux nombres sont transmis comme paramètres. Le premier paramètre divisé par le deuxième paramètre.
// Exemple:
// resteDiv(1, 3) ➞ 1
// resteDiv(2, 4) ➞ 2
// resteDiv(3, 3) ➞ 0


// % retourne le reste d'une division
function resteDivision(a, b) {
    return a % b;
}
// Test :
console.log(resteDivision(10, 3));





