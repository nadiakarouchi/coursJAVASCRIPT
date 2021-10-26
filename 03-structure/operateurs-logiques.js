// js page les opérateurs logiges

// ET OU et non 
let x = 5, y = -20;
console.log(x , y);
// ET &&

if (x >= 0 && x <= 10){//ET noté && dans cet exemple chaque condition doit être vraie
    document.getElementById('p1').innerHTML = 'x vaut ' +x+ 'et est compris entre 0 et 10';
}

// OU = ||

if (y < -10 || y > 10){
    document.getElementById('p2').innerHTML = 'y vaut ' +y+ ' et est une valeur plus petite que -10 ou plus grande que 10';
}

// NO = ! ce n'est pas vrai 

if ( ! ( x <= 2) ){
    document.getElementById('p3').innerHTML = 'x qui contient ' + x + ' est supérieur à 2';

}
