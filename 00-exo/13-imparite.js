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
document.write('<p>*************** EXO 2 ***************</p>');

var nombre = parseInt(prompt('Entre Un Nombre S\'il Vous Plait '));
console.log(typeof nombre, nombre);

var nombreMax = (nombre + 10);
console.log(typeof nombreMax, nombreMax);

if(!isNaN(nombre)){for (var i = nombre; i <= nombreMax; i++) {
            if (nombre % 2 === 0) {
                console.log(nombre + 'est pair')
                document.getElementById('p1').innerHTML += ' <br> ' + i + ' est pair';

            } else {
                console.log(nombre + ' est impair');
                document.getElementById('p1').innerHTML += ' <br> ' + i + ' est impair';}
            }
    }else{
            document.getElementById('p1').innerHTML = '<p>Vous n avez pas saisi de nombre(s)</p>';
         }