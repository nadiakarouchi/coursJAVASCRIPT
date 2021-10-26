// page if else if else 

let x = 1;

console.log(x);

if(x>1);

if(x>1){
    alert('vrai : x contient une valeur strictement supérieure à 1');
}else if(x == 1){
    alert('sinon vrai : x contient une valeur égal à 1');
}else {
    alert('faux : x contient une valeur strictement inférieure à 1');
}

x= -10;
console.log(x);

if ( x > 1) {
    alert('1/ x contient une valeur strictement supérieure à 1');
} else if ( x == 1 ) {
    alert('2/ x est égal à 1');
} else if ( x < 1 ) {
    alert('3/ x contient une valeur strictement inférieure à 1');
} else if ( x < 0 ) {
    alert('4/ x contient une valeur strictement inférieure à 0');
} else if (x < -2 ) {
    alert('5/ x contient une valeur strictement inférieure à -2');
} else {
    alert('6 la valeur de x n\a pas pu être comparée à un nombre');
}