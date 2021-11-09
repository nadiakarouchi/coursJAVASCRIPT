
// page multiplication 


// EXO 1 
// var nombre = prompt("Entrer un chiffre");
var nombre = Number(prompt("Entrer un chiffre"));
console.log(typeof nombre, nombre);


for (i = 1; i <= 10; i++) {
   var resultat = nombre * i;
   document.getElementById('p1').innerHTML+= nombre + ' x ' + i + ' = ' + resultat+ '<br>';
    
}

// EXO 2 

var nombre2 = Number(prompt("Entrer un chiffre entre 1 et 9!"));
console.log(typeof nombre2, nombre2);

if (nombre2 >=2 && nombre2 <= 9) {
    for(var i = 1; i<= 10 ; i++){
        var resultat2 = nombre2 * i;
      document.getElementById('p2').innerHTML += nombre2 + ' x ' + i + ' = ' + resultat2 + '<br>';
      document.getElementById('p2').style.background = "pink";  
    }

    
} else {
    document.getElementById('p2').innerHTML = 'vous deviez saisi un nombre entre 1 et 9!';
    document.getElementById('p2').style.background = "pink"; 

}


