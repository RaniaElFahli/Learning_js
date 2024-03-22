// Révisions du 20 mars 2024 - Javascript documentation mdn web docs_ 
// Notes et exercices 

// Ecrire des commentaires 

// un commentaire sur une ligne 

/* un commentaire
* sur plusieurs lignes
*/

/* plusieurs commentaires /* sur une même *\/ ligne */
/* toujours finir par un slash quand il y a plusieurs commentaires
* ou bien qu'il est sur plusieurs lignes 
*/ 

// Déclarer des variables 
var x = 42;
console.log(x); 
const hello = "hello";
console.log(hello);
// ce qui va nous donner 42 qu'on a déclaré plus haut. 
let a, b, rest; /* let au lieu de var */
[a , b] = [ 10, 20]
console.log(a); 
console.log(b);
let rania; rania = "amazing";
console.log(rania);
const hihi = "great";
const {hk} = hihi;
console.log(hihi);
const obj = { a: 1, b: 2 };
console.log(obj);
const {c,d}= obj;

var x;
console.log(x === undefined); // true
x = 3;

(function () {
  var x;
  console.log(x); // undefined
  x = "local value";
})();

function plusun(i) {
    return i + 1;
}

console.log(plusun(6))

let f; f = 53;
console.log(plusun(f));
parent.hello;
const MY_OBJECT = {key: "value" };
console.log(MY_OBJECT);
MY_OBJECT.key = "otherValue";
console.log(MY_OBJECT);
const coucou = ["hello", "rania"];
coucou.push("hry"); 
console.log(coucou);