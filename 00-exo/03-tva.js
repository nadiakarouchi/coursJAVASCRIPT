// EXO TVA 


let prixHT = prompt('prix hors taxes : ');

console.log(prixHT);

// console.log("le prix ttc est de : " + prixHT * 1.2 + '$');

let prixTTC = prixHT * 1.2;

console.log('prix TTC est de :' +prixTTC + '$');

document.getElementById('p1').innerHTML = ('pour un achat HT de ' +prixHT + ' $, le prix TTC est de : ' + prixTTC + '$');



