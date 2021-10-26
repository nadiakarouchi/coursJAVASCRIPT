// page objet litteral 

let victor = {//nom,email,age et adresse sont des propriétés de l'objet
    nom:['Victor','Marie','Hugo'],
    age: 2,
    email:'toto@hugo.fr',

    // bonjour est une methode 
    bonjour: function() {
        alert('bonjour je suis ' + this.nom[0] + ' ' + this.nom[2] + ' et j\'ai ' + this.age + ' ans.');
    }
}
console.info(typeof victor, victor);

victor.bonjour();

// on accéde aux propriété qui contiennent des valeurs 
document.getElementById('p1').innerHTML = 'Nom : ' + victor.nom;
document.getElementById('p2').innerHTML = 'Age : ' + victor.age + ' ans.';
document.getElementById('p3').innerHTML = 'Email : ' + victor.email ;

victor.age = 80;

console.info(typeof victor, victor);
document.getElementById('p4').innerHTML = 'Nouvel age : ' + victor.age + ' ans.';

// on rajoute deux nouvelles propriétés et leurs valeurs associées//
victor.metier = 'écrivain, dramaturge et poète';
console.info(typeof victor, victor);
victor.metier = 'écrivain éxilé, dramaturge et poète';
console.info(typeof victor.metier);
victor.adresse = 'en son avenue, à paris';
console.info(victor.adresse);

//et on crée une nouvelle méthode//
victor.bonjour2 = function() {
    alert('bonjour j\'ai maintenant ' + this.age + ' age, je suis ' +this.metier+ ' et je suis célèbre dans le monde entier.');

}
victor.bonjour2();
console.info(typeof victor, victor);

document.getElementById('p5').innerHTML = 'bonjour , je suis ' +victor.nom[0]+ ' ' + victor.nom[2] ;


