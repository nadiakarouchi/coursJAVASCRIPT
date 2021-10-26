// js page switch 

let x = 15;
console.log(typeof x, x);

// switch() case break, case break, default

// x = 2 ? x = 5 ? x = 10 ?x= 15 ? 20 ?

switch (x) {
    case 2:
        document.getElementById('p1').innerHTML = 'x stock la valeur de 2';
        break; //break ne pas oublier le break >> il sort du switch si le cas est vrai est vrai
    case 5:
        document.getElementById('p1').innerHTML = 'x stock la valeur de 5';
        break;
    case 10:
        document.getElementById('p1').innerHTML = 'x stock la valeur de 10';
        break;
    case 15:
        document.getElementById('p1').innerHTML = '<p style="background:yellow;padding:10px;border:2px solid green;color:green;">x stock la valeur de 15';
        break;
    case 20:
        document.getElementById('p1').innerHTML = 'x stock la valeur de 20';
        break;
    default: //après default il sortira du switch naturellement
        document.getElementById('p1').innerHTML = 'x ne contient ni 2, ni 5, ni 10, ni 15, ni 20!!';
} //fin switch



/*const z = 30;
const color = z<30 ? 'Green' : 'Red';
//const color = 'blue'
console.log(color);

switch(color){
    case('Green'):
    console.log('It is true');
    break;
    case('Red'):
    console.log('It is false');
    break;
    default: console.log('It is wrong');
    break;
};*/



