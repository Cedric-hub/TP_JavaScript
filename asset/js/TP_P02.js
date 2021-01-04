// Partie 2 - Exercice 1:
// Corrigez le code suivant (Erreur de syntaxe), pour calculer le carré.
// Exemple:
// carre(2) ➞ 4
// carre(4) ➞ 16

// function carre(b) {
// 	return $a*$a;
// }
// La fonction a pour paramètre "b", l'erreur vient que $a n'est pas défini dans la fonction.
// On peut soit définir une variable $a :
function carre(b) {
    var $a = b;
    return $a * $a;
}
console.log(carre(5));

// Soit simplement multiplier b par b :
function carre(b) {
    return b * b;
}
console.log(carre(5));



// Partie 2 - Exercice 2: < 100
// Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. Sinon, retournez FALSE.
// Exemple:
// check(5, 20) ➞ true
// // 5 + 20 = 25
// check(60, 55) ➞ false
// // 60 + 55 = 115

// La fonction teste la condition demandée, à savoir ((a + b ) < 100). Si vraie, elle retourne TRUE, sinon FALSE
function sommeInf100(a, b) {
    if ((a + b) < 100) {
        return "TRUE";
    }
    else {
        return "FALSE";
    }
}
//Test :
console.log(sommeInf100(98, 1));
console.log(sommeInf100(98, 3));

// Le corrigé propose d'utiliser l'opérteur de comparaison
// function check(a, b) {
//     return a + b < 100;
//   }




// Exercice 3:
// Écrivez une fonction qui convertit les heures en secondes.
// Notez qu’il y a 60 secondes en une minute et 60 minutes en une heure.
// Exemple:
// heureSeconde(1) ➞ 3600
// heureSeconde(5) ➞ 18000

// La fonction multiplie le paramètre d'entrée par 3600 et retourne le résultat
function heureSeconde(h) {
    return h + " heure(s) = " + (h * 3600) + " secondes";
}
console.log(heureSeconde(4));



// Partie 2 - Exercice 4:
// Créez une fonction qui prend un nombre et renvoie TRUE s’il est inférieur ou égal à zéro, sinon retournez FALSE.
// Exemple:
// checkNbr(1) ➞ false
// checkNbr(-1) ➞ true
// checkNbr(0) ➞ true

// Idem exercice 2. L'opérateur de comparaison est directement utilisé dans return
function testZero(n) {
    return n <= 0
}
console.log(testZero(1));
console.log(testZero(0));
console.log(testZero(-1));



// Exercice 5:
// Créez une fonction qui renvoie TRUE lorsque nbr1 est égal à nbr2; sinon retournez FALSE.
// Exemple:
// isEqual(3, 6) ➞ false
// isEqual(1, ‘1’) ➞ false
// isEqual(1, 1) ➞ true

// On retourne le résulta du test effectué entre a et b, == permettant de tester l'égalité de 2 valeurs
function egal(a, b) {
    return a == b;
}
console.log(egal(4, 5));
console.log(egal(4, 4));
console.log(egal(5, 4));



// Partie 2 - Exercice 6:
// Créez une fonction qui renvoie TRUE si un entier est divisible par 5, sinon retournez FALSE.
// Exemple:
// isDivisible(5) ➞ true
// isDivisible(10) ➞ true
// isDivisible(6) ➞ false

// On regarde ici si le modulo du paramètre n de notre fonction divisé par 5 est bien égal à 0.
// L'opérateur de comparaison renvoie true si c'est le cas sinon false.
function divisible5(n) {
    return n % 5 == 0;
}
console.log(divisible5(25));
console.log(divisible5(27));



// Partie 2 - Exercice 7:
// Écrivez une fonction qui prend deux entiers (heures, minutes) et les convertit en secondes.
// Exemple:
// hmTos(1, 10) ➞ 4200
// hmTos(0, 59) ➞ 3540
// hmTos(0, 0) ➞ 0

// On retourne le résultat de notre opération
function hmSecondes(heures, minutes) {
    return (heures * 3600) + (minutes * 60);
}
console.log(hmSecondes(0, 1));
console.log(hmSecondes(1, 1));



// Partie 2 - Exercice 8:
// Écrivez une fonction pour inverser un tableau. Attention: N’utilisez pas la méthode intégrée reverse();
// Exemple:
// reverseTab([1, 2, 3]) ➞ [3, 2, 1]
// reverseTab([1, 1, 2, 2, 3]) ➞ [3, 2, 2, 1, 1]

// J'ai dû m'aider du corigé

function reverseTab(tab) {
// On déclare ici un tableau vide avec l'instruction let, cela fonctionne également avec var,
// je ne suis pas sûr de comprendre ce qu'est une variable dont la portée est celle du bloc courant.
    let res = [];
// On crée ici une boucle for, i représente la position d'un élément du tableau
// On initialise notre position à la longueur de notre tableau - 1 soit le dernier élément
// Notre boucle continuera tant que i > -1, soit jusqu'à t[0], le premier élément.
// On parcoure donc bien notre tableau du dernier au premier élément, à l'envers.
// A chaque boucle, on décrémente i de 1, pour passer à la position précédente
    for (let i = tab.length -1; i > -1; i--) {
// A chaque boucle, on pousse notre élément positionné en t[i] dans notre tableau.
// La première boucle placera donc bien le dernier élément dans notre tableau vide, etc.
      res.push(tab[i]);
    }
// La fonction retourne notre tableau inversé.
    return res;
  }
// Test :
var array = [1, 2, 3, 4, 5];
console.log(reverseTab(array));



// Partie 2 - Exercice 9:
// Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau.
// Exemple:
// getLastElem([1, 2, 3, 4]) ➞ 4
// getLastElem([‘Alex’, ‘Bob’, ‘Emily’]) ➞ ‘Emily’

// Le premier élément d'un tableau étant en t[0], il faut soustraire 1 à la longueur du tableau pour obtenir sa position.
// La fonction retourne donc située en t.length - 1
function lastElement (t) {
    return t[t.length - 1];
}
var tableau = ["Question", "Univers", 41];
console.log(lastElement(tableau));



