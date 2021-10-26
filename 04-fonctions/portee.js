// coucou();

//attention évitons de déclarer plusieurs variables dans différents espaces en utilisan un même nom : ici on le fait pour le démo !!!

function porteNew() {
    let xLet = 1;
    var yVar = 2;

    if (true) {
        let xLet = 500;
        var yVar = 200;

        document.getElementById('p1').innerHTML = 'la variable let "xLet" dans le if = ' + xLet;
        document.getElementById('p2').innerHTML = 'la variable Var "yVar" dans le if = ' + yVar;
    }//fin if
    document.getElementById('p3').innerHTML = 'la variable let "xLet" hors du if = ' + xLet;
    document.getElementById('p4').innerHTML = 'la variable Var "yVar" hors du if = ' + yVar;
    //yvar affichera la dernière valeur déclarée car var a une portée élargie

}//fin fonction

porteNew();

let x = 5;
var y = 10;

function portee1() {// dans cette fonction j'appelle des variables qui ont une portée globale
    document.getElementById('p5').innerHTML = 'depuis la fonction <code> portee1 </code> : x = ' + x + ' et y = ' + y;
}

portee1();

function portee2() {
    let a = 123;
    var b = 456;
    document.getElementById('p6').innerHTML = 'depuis la fonction <code> portee2 </code> : a = ' +a+ ' et b = ' +b;
}
portee2();

function portee3() {//les variables locales de la fonction ont le même nom que les globales 
    let x = 222;
    var y = 444; // la fonction ici va utiliser les variables locales
    document.getElementById('p7').innerHTML = 'depuis la fonction <code> portee3 </code> : x = ' +x+ ' et y = ' +y;
}
portee3();

document.getElementById('p8').innerHTML = 'ce code n\'est pas dans une fonction ! je suis dans l\'espace global et je cherche les contenus de x et y :<br> x = ' +x+' et y = ' +y;


//on va tenter d'afficher les locales 
document.getElementById('p9').innerHTML = 'Depuis l\'espace locale : a = ' +a+ 'et b = ' +b;
