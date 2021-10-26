// page return 

function division(x, y) {
    if (y == 0) {
        return 'Division par 0 impossible'
        
    } else {
        alert('attend je calcul');
        return x / y;
        // on peut pas rajouter un cde après return 
        
    }
}

let nbr1 = prompt('Entrez un premier nombre à diviserb');
let nbr2 = prompt('Entrez un second nombre qui divisera le premier');

let resultatdivision = division(nbr1, nbr2);
console.log(resultatdivision);

document.getElementById('p1').innerHTML = 'le resultat d\'une division de le nombre ' + nbr1 + ' / ' + nbr2 + ' = '
    + resultatdivision;

// console.log(division(5, 2));



// let nbr3 = prompt('entrez encors un nombre à diviser');
// let three = prompt('entrez un diviseur!');
// console.log(nbr3 , three);
// console.log(division(nbr3,three));


// remplacer le point par la virgule
console.log(typeof resultatdivision, resultatdivision);

//new variable pour contenir le passage de resultatDivision de number à string


let divisionString = resultatdivision.toString();// je change le number en string grâce à la fonction prédéfinie toString()

console.log(typeof divisionString, divisionString);//je fais un console log pour vérifier que cela marche 

let newePhrase =  divisionString.replace('.',',');
document.getElementById('p2').innerHTML = nbr1 + ' divisé par ' + nbr2 + ' = ' + newePhrase;

// transformer string to number 

transformformeEnNombre = parseInt(divisionString);

console.log(typeof transformformeEnNombre, divisionString);


