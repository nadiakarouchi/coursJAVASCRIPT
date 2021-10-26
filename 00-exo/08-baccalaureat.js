
//  page exo 08 baccalaureat 




//  if (moyenBAc > 12) {
//     document.getElementById('p1').innerHTML = 'bravo, vous avez une bonne note!';

// }else if(moyenBAc>=10 && moyenBAc<=12){
//     document.getElementById('p1').innerHTML = 'réussi mais sans moyen !!';

// }
// else {
//     document.getElementById('p1').innerHTML = 'domage, vous êtes récalé :( !';
// }


var moyenBAc = parseFloat(prompt('quel est votre moyen de bac?'));
console.log(moyenBAc)


if (!isNaN(moyenBAc)) {
    if (moyenBAc > 12 && moyenBAc <= 20) {
        document.getElementById('p1').innerHTML = 'bravo, vous avez une bonne note!';
    } else if (moyenBAc >= 10 && moyenBAc <= 12) {
        document.getElementById('p1').innerHTML = 'réussi mais sans moyen !!';
    }
    else if (moyenBAc >= 0 && moyenBAc < 10) {
        document.getElementById('p1').innerHTML = 'domage, vous êtes récalé :( !';

    } else {
        document.getElementById('p1').innerHTML = 'la moyen doit être compris entre 0 et  20 .';
    }
} else {
    document.getElementById('p1').innerHTML = '<p>Vous n avez pas saisi de nombre(s)</p>';
}


console.log(typeof moyenBAc, moyenBAc);