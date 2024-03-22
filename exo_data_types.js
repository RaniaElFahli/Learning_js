// 20 mars 2024 : Data types 
let answer = 42; 
answer = "hey there!";
console.log(answer);
const array_j = [ 1, 2, 3];
console.log(array_j);
let resultats ; resultats = array_j.map((x) => x*2);
console.log(resultats);
const h = array_j[1]; 
console.log(h);

if (new Boolean(true)) {
    console.log("This log is printed.");
  }
  
  if (new Boolean(false)) {
    console.log("This log is ALSO printed.");
  }
  
  const myFalse = new Boolean(false); // myFalse is a Boolean object (not the primitive value false)
  const g = Boolean(myFalse); // g is true
  const myString = new String("Hello"); // myString is a String object
  const s = Boolean(myString); // s is true
let timestamp = Date.now(); 
let now = new Date();
let ms = now.getTime();
console.log(ms);


let O = Object.create({a: 1, b: 2});
let p = O.a + O.b; 
console.log(p);
let o = { x: "don't change this value" };
library.function(Object.create(o));

