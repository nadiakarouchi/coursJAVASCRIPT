

// page exo 07 comparaison 



var nbr1 = parseInt(prompt('quel est le 1er nombre'));
var nbr2 = parseInt(prompt('quel est le 2ème nombre'));

console.log(nbr1, nbr1);
console.log(nbr2, nbr2);

// if (nbr1 < nbr2) {
//     document.getElementById('p1').innerHTML =  '<p>' +nbr1 + '  est inférieur à ' + nbr2 + '</p> ';
// }
// else if (nbr1 > nbr2) {
//     document.getElementById('p1').innerHTML = '<p>' +nbr1 + '  est supérieur  à ' + nbr2 + '</p> ';
// }
// else {
//     document.getElementById('p1').innerHTML = '<p>' +nbr1 + '  est égale à ' + nbr2 + '</p> ';
// }

if ( (!isNaN(nbr1)) && (!isNaN(nbr2)))

    {if (nbr1 < nbr2) {
    document.getElementById('p1').innerHTML =  '<p>' +nbr1 + '  est inférieur à ' + nbr2 + '</p> ';
}
else if (nbr1 > nbr2) {
    document.getElementById('p1').innerHTML = '<p>' +nbr1 + '  est supérieur  à ' + nbr2 + '</p> ';
}
else {
    document.getElementById('p1').innerHTML = '<p>' +nbr1 + '  est égale à ' + nbr2 + '</p> ';
}}else{
    document.getElementById('p1').innerHTML = '<p>Vous n avez pas saisi de nombre(s)</p>';
}
console.log(typeof nbr1, nbr1);
console.log(typeof nbr2, nbr2);