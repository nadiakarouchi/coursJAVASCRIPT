// js page opérateur ternaire

let x = 15;
let y = -20;

// faire un if else pour vérifier si x est supérieur ou égal à 10 
//et on injecte le resultat dans p1

console.log(x , y);
if (x >= 10 ){
    document.getElementById('p1').innerHTML = '<p style="background:pink;border:2px solid red;padding:10px;">x vaut ' +x+' est supérieur ou égal à 10 .</p>';
}else{
    document.getElementById('p1').innerHTML = '<p style="background:pink;border:2px solid red;padding:10px;">x vaut ' +x+' est inférieur ou  égal 10 .</p>';
}

// la même  condition en ternaire 
// ? = if; : =else 
// test ?/if 'bloc de code ' :/else 'bloc de code'

document.getElementById('p2').innerHTML = x >= 10 ? 'x est supérieur ou égal à  10' : 'x est inférieur à 10';

// tester si y est supérieur à 10
// if else p3

document.getElementById('p3').innerHTML = y > 10 ? '<p style="background:green;padding:10px;border:2px solid black;color:white;"> y est supérieur à 10 </p>' : '<p style="background:green;padding:10px;border:2px solid black;color:white;">y n\'est pas supérieur à 10</p>';