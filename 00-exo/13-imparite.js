// EXO 1
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + ' est pair.');
    }
}
// EXO 2

console.log('*******************');
for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + ' est pair.');
    } else {
        console.log(i + ' est impair');
    }
}
console.log('*******************');

// EXO 3 

// var nombre = parseInt(prompt('Entre Un Nombre S\'il Vous Plait '));
// console.log(nombre);


// if(!isNaN(nombre)){for (var nombre=1;nombre>0; nombre++) {
//     if (nombre%2===0) {
//             console.log(nombre + 'est pair' )
//             document.getElementById('p1').innerHTML += '<br> '+ nombre  + ' est pair';

//      } else {
//             console.log(nombre + ' est impair');
//             document.getElementById('p1').innerHTML +=   ' <p style="background-color: chartreuse;> <br> ' + nombre  +  ' est impair</p>';
//     }
// }
// }else{
//     document.getElementById('p1').innerHTML = '<p>Vous n avez pas saisi de nombre(s)</p>';
// }

// exo 2 FOR
// document.write('<p>*************** EXO 2 ***************</p>');

// var nombre = parseInt(prompt('Entre Un Nombre S\'il Vous Plait '));
// console.log(typeof nombre, nombre);

// var nombreMax = (nombre + 10);
// console.log(typeof nombreMax, nombreMax);

// if (!isNaN(nombre)) {
//     for (var i = nombre; i <= nombreMax; i++) {
//         if (nombre % 2 === 0) {
//             console.log(nombre + 'est pair')
//             document.getElementById('p1').innerHTML += ' <br> ' + i + ' est pair';

//         } else {
//             console.log(nombre + ' est impair');
//             document.getElementById('p1').innerHTML += ' <br> ' + i + ' est impair';
//         }
//     }
// } else {
//     document.getElementById('p1').innerHTML = '<p>Vous n avez pas saisi de nombre(s)</p>';
// }

// exo 2 FOR
document.write('<p>*************** EXO 2 ***************</p>');

var nbrUtilisateur1 = parseInt(prompt('Exo 2 : rentrez un nombre entier, merci '));
console.log(typeof nbrUtilisateur1, nbrUtilisateur1);

var nbrUtilisteurMax = (nbrUtilisateur1 + 10);
console.log(typeof nbrUtilisteurMax, nbrUtilisteurMax);

for (var i = nbrUtilisateur1; i<=nbrUtilisteurMax; i++) {
   if (i % 2 === 0) {
      document.getElementById('p1').innerHTML += '<p> ' + i + ' est pair.</p>';
   } else {
    document.getElementById('p1').innerHTML += '<p> ' + i + ' est impair.</p>';
   }
}

//  Exo  3 while 

var nbrUtilisateur2 = parseInt(prompt('Exo 2 : rentrez un nombre entier, merci '));
 console.log(typeof nbrUtilisateur2, nbrUtilisateur2);

 var nbrUtilisteurMax2 = nbrUtilisateur2 + 10;
 console.log(typeof nbrUtilisteurMax2, nbrUtilisteurMax2);

 while(nbrUtilisateur2<nbrUtilisteurMax2){
    //  document.write('...');
    //  nbrUtilisateur2++;
    if (nbrUtilisateur2 % 2 === 0) {
        document.getElementById('p3').innerHTML += '<br> '+ nbrUtilisateur2  + ' est pair';
    } else {
        document.getElementById('p3').innerHTML += '<br> '+ nbrUtilisateur2  + ' est impair';
    };
    nbrUtilisateur2++;
 };
 