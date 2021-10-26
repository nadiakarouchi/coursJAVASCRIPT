// evenement// page 07/01 intro 

1// Evenement avec une fonction
let event1 = document.querySelector('#rouge');
console.log(event1);
console.log(event1.innerHTML);
//on va utiliser addEventListener (ecouteurs d'evenements)

event1.addEventListener('click',fonctionDivRouge);

function fonctionDivRouge(){
    alert('Vous avez cliquer sur la div rouge !');
    this.style.backgroundColor = 'pink';
}

//création de la fonction 
// si je veux débugger la fonction je peux passer e comme event dans les paramètres et faire un console.log(e) dans la fonction 
// function fonctionDivRouge(e) {
//     console.log(e);
//     alert('Vous avez cliqué sur la div #rouge !');
// }

// second exemple avec une fonction anonyme
let event2 = document.querySelector('#p1');
console.log(event2);

event2.addEventListener('click',function(){
    alert('Vous avez cliquer sur le paragraphe id p1 !');
    this.style.backgroundColor = 'pink';
    this.style.color = 'black';
});

//2 nouveau mot-clef "mouseover"

document.getElementById('orange').addEventListener('mouseover',fonctionDivOrange);

function fonctionDivOrange(e){
    // console.log(e);
    alert('Vous avez survoler  la div orange !');
    this.style.backgroundColor = 'pink';
    this.innerHTML = 'coucou';
    this.style.fontSize = '1.5em';
    this.style.display = 'none';
}

// 3-nouveau mot-clef "mouseout"

document.querySelector('#bleu').addEventListener('mouseout',fonctionDivBleu);

function fonctionDivBleu(e){
    console.log(e);
    // alert('Vous êtes passé  sur la div #bleu !');
    this.innerHTML = 'coucou2';
    this.style.fontSize = '1.5em';
    
}


//4 - formulaire 

// var emailId = document.getElementById('exampleInputEmail1');
// console.log(emailId);

//focus quand on est dans le champs
document.querySelector('#Email').addEventListener('focus',inputEmailFofus);
function inputEmailFofus(){
    this.classList.add('bg-success');
    this.classList.add('text-white');
};
//blur change l'apparence quand l'input perd le focus

document.querySelector('#password').addEventListener('blur', inputPasswordBlur);
function inputpasswordBlur(){
    this.classList.add('bg-info');
    this.classList.add('text-white');
};

//écoteurs d'évènement sur lr bouton avec click
document.querySelector('#login').addEventListener('click', inputBtnlogin);

function inputBtnlogin(event){
    event.preventDefault();

    alert('nous avons bien recu votre formulaire');
    this.classList.add('bg-success');
    this.innerHTML = "vous êtes connecter !";
}
    

// "focus" pour quand on est dans le champ de saisie
// document.querySelector('#email').addEventListener('focus', inputEmailFocus);

// function inputEmailFocus() {
//     this.style.background = "lightgreen";
//     this.classlist.add('text-white');
// }

// // pour changer l'apparence quand o,n sort du "focus" : on utilise "blur"
// document.querySelector('#pass').addEventListener('blur',inputPasswordBlur);

// function inputPasswordBlur() {
//     this.style.background = "lightyellow";
//     this.classlist.add('text-white');
// }

// // écouteur d'évènement sur le bouton avec click
// document.querySelector('#submit').addEventListener('click',inputBtnSubmit);

// function inputBtnSubmit() {// on ajoute "event" en argument à cette fonction
//     //event.preventDefault();// neutrale le formulaire pour la demo; aussi les required
//     //et les champs ne sont pas réinitilisés
//     alert('Nous avons bien reçu votre formulaire ');
//     this.classlist.add('bg-success');
//     this.innerHTML = 'Connecté';
// }