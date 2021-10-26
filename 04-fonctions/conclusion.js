// page conclusion 


// alert('coucou');

// on créé une fonction anonyme 

// function() {
//     alert('alerert exécuter dans une fonction anonyme');

// }

// let monAlert = function () {
//     alert('alert exécuter dans une fonction anonyme');
// }
// monAlert();

// auto-invocation d'une fonction anonyme 

// function() {
//     alert('alert exécuter dans une second fonction anonyme');

// }

// (function () {
//     alert('alerert exécuter dans une second fonction anonyme');
// }
// )();

// 1 clique

let para1 = document.getElementById('p1');

// console.log(typeof para1, para1);

para1.addEventListener('click' ,function(){
    alert('Eh ! tu as bien cliqué sur le paragraphe 1 !');
});

// double clique 

let para2 = document.getElementById('p2');

para2.addEventListener('dblclick' ,function(){
    alert('Et là double clique sur le paragraphe 2 !');
});


//fonction récursive
function decompte(t) {
    if ( t > 10) {
        document.getElementById('p3').innerHTML += t + ' - ';
        return decompte(t - 10);
    }else{
        return t;
    }

}

decompte(1000);