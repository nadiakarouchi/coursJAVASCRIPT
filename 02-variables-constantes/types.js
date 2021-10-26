// js pour la page types 

//1 STRING 
// let PRESENTATION + "je m'\appelle michelle.";
let presentation = 'je m\'appelle nadia';
console.log(typeof(presentation));

let age = 25;
let age2 = 56;

//1- récupérer dans le doc un  élément dont l'id est XX
//2- remplacer le contenu d'un élément identifié par son id
//3- puis on concatène une string et le resultat de la fonction typeof()
//4-le résultat s'affiche dans la page


document.getElementById('p1').innerHTML ='Type de données pour la variable presentation :'+ typeof presentation;

document.getElementById('p2').innerHTML ='Type de données pour la variable age :'+ typeof age;

document.getElementById('p3').innerHTML ='Type de données pour la variable age2 :'+ typeof age2;

let monFILM1 = 'mon film préféré est "titanic" avec kirk Douglas';
console.log(monFILM1);

let monFILM2 = 'mon film préféré est \"REINE DE NEIGE\" avec kirk Douglas';
console.log(monFILM2);

//2 - NUMBER

let x =10;
let y = -20000;
let z = 3.14;

console.log(z);
// on peut passer deux arguments dans la console
console.log (typeof z, z);

document.getElementById('p4').innerHTML = 'type de données pour la variable x : ' + typeof x;

//3 - BOOLEAN

// true=vrai
// false=faux

let test;
test = 8 < 4;
console.log(typeof test, test);



//4 et 5 NULL et UNDEFINED

let vide = null;
console.log(typeof vide);

document.getElementById('p5').innerHTML = 'Le type de la variable nul est : ' + typeof vide;


let indefini;
console.log(typeof indefini);
document.getElementById('p6').innerHTML = 'Le type de la variable indefini est : ' + typeof indefini;