// scripts pour la page concaténation 
// alert('coucou!');
// une variable dans laquelle on met notre age avec un calcul 

let monAge = 18 + 2;
console.log(monAge);

// utilisation des caractères d'échapement
let phrase = 'bonjour j\'ai';

// let phrase2 = "bonjour j\'ai faim",

// let test = '4 + 5';
console.log(phrase);

console.log(monAge, phrase);

// MINI EXO : faire une alerte et mettre dans l'alerte "bonjour j'ai 20 ans'

alert(phrase +' ' + monAge +' ans.');

let x = 501;
let y = 99;


// MINI EXO écrire, dans une alerte  "x contient 501, y contient 99 : leur somme est égale à 600."
let somme = 600;


alert('x contien ' + x + ' y contient ' + y + ' leur somme est égale à ' + somme);

// alert('x contien ' + x + ' y contient ' + y + ' leur somme est égale à ' + (x+y));


// en littéraux de gabarits avec l'accent grave (alt gr + 7)

alert(`x contient ${x}`);

alert(`somme contient ${x+y}`);

alert(`x contien ${x}\ny contien ${y} \nleur somme égale ${somme}`);

