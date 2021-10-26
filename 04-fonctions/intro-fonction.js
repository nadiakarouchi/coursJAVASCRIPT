// js page fonction 01 intro 

// alert('hi');

console.log(Math.random());
document.getElementById('p1').innerHTML = Math.random(); //ceci on éxécute le code "caché" derrière la fonction, on appelle la fonction ou on l'invoque

//replace
let discours1 = 'Bonjour, je suis Donald Trump et j\'ai gagné';
console.log(discours1);

let discours2 = discours1.replace('Donadld Trump' , 'Joe Biden');
console.log(discours2);

document.getElementById('p2').innerHTML = discours2;

// création de fonctions

//1- multiplier le résultat de random() par 100

function randomFois100() {
    return Math.random() * 100;
}

console.log(randomFois100);

document.getElementById('p3').innerHTML = randomFois100();

// 2nde exemple une multiplication 

//mot clef + nom de la fonction()

function multiplier(nbr1,nbr2) { //les paramètres de la fonction
    // return (nbr1 * nbr2); //la fonction simplement

    return('multiplication de ' + nbr1 + ' par ' + nbr2 + ' = ' + (nbr1 * nbr2)); // bloc de code qui renvoie une string avec la calcul
}

//ici on "appelle" la fonction
//un appel de fonction

console.log(multiplier(2,56));//la fonction avec des argumentss

document.getElementById('p4').innerHTML = multiplier(10,9);//idem

// EXO faite une fonction pour soustraire un nombre d'autre 

function soustraire(nbr1,nbr2) { 
    return('soustraction de ' + nbr1 + ' - ' + nbr2 + ' = ' + (nbr1 - nbr2));
}
console.log(soustraire(10,33));
document.getElementById('p5').innerHTML = soustraire(10,3);

// adittion 

function additionner(nbr1,nbr2) { 
    return('addition de  :' + nbr1 + ' + ' + nbr2 + ' = ' + (nbr1 + nbr2));
}
console.log(additionner(100,100));
document.getElementById('p6').innerHTML = additionner(10,33);

// devision 

function deviser(nbr1,nbr2) { 
    return('devision de ' + nbr1 + ' / ' + nbr2 + ' = ' + (nbr1 / nbr2));
}
console.log(deviser(10,3));
document.getElementById('p7').innerHTML = deviser(10,3);

// le modulo 

function modulo(nbr1,nbr2) { 
    return('le modulo de (le reste de la devision) : ' + nbr1 + ' / ' + nbr2 + ' =le modulo est : ' + (nbr1 % nbr2));
}
console.log(modulo(10,3));
document.getElementById('p8').innerHTML = modulo(10,3);