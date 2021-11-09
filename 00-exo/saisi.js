
// page js saisi 

var nombre = 0;
console.log(typeof nombre, nombre);

console.log('***while***');

while(nombre < 50 || nombre > 100){
    nombre = prompt('entrez un nombre entre 50 et 100 : ');
    console.log(typeof nombre);
}
document.getElementById('p1').innerHTML = 'vous avez saisi rentré le chiffre ' + nombre + ' la variable récupérée est compri entre 50 et 100.';