

//contrôle du formulaire avec une fonction 
//on vérifie la longueur des contenus dans les 2 input


function controleForm() {//event paramètre a enlever également

    // event.preventDefault();//pour empêcher l'envoi du formulaire, à enlever quand le site est terminé

    if (document.form1.pseudo.value.length < 5 || document.form1.pseudo.value.length > 15) {

        console.log(document.form1.pseudo.value);
        console.log(document.form1.pseudo.value.length);
        alert('votre pseudo fait normalement entre 5 et 15 caractères!');

    }
    //idem pour mot de pass entre 3 et 12 caractères

    if (document.form1.password1.value.length < 3 || document.form1.password1.value.length > 12) {

        console.log(document.form1.password1.value);
        console.log(document.form1.password1.value.length);
        alert('votre mot de passe fait normalement entre 3 et 12 caractères!');

    }
}


// function checkPass(form2) {
//     pw1 = form2.password1.value;
//     pw2 = form2.password2.value;

//     if (pw1 != pw2) {
//     alert ("\erreur: les mots de passes ne correspondent pas")
//     return false;
//     }
//     else return true;
//     }

// function checkPass() {
//     let pass1 = document.form2.password1Id.value;
//     let pass2 = document.form2.password2Id.value;

//     if (pass1 != pass2) {
//        alert('Vous n\'avez pas resaisi le meme mot de passe !');

//     } else {
//         alert('C\'est bon, les deux mots de passe sont identiques');

//     }
//     console.log(pass1, pass2);
// }




// contrôle du formulaire d'inscription avec une fonction inscriptionForm()

// récupérer le form par son id dans une variable
let formInscrip = document.getElementById('formulaire2');
console.log(formInscrip);



// écoute de l'envoie du formulaire 
formInscrip.addEventListener('submit', form2);

// création de la fonction

function form2(event) {
    event.preventDefault();

    // récupération du contenu des champs du formulaire
    // on cible dans des variables les value de tous les champs du form
    let prenom = event.target.prenom.value,
        nom = event.target.nom.value,
        email = event.target.email.value,
        pass1 = event.target.password2.value,
        pass2 = event.target.confirmpassword2.value;
    console.log(prenom, nom, email, pass1, pass2);
    // Expression régulière
    // https://regex101.com/
    let regex = /([a-z0-9](\.?|\_|\-))*@([a-z0-9]{2,})(\.[a-z]{2,}){1,}/;

    // let regex = new RegExp("([a-z0-9](\.?|\_|\-))*@([a-z0-9]{2,})(\.[a-z]{2,}){1,}");

    // prenom & nom sont pas vides.
    // classList représente toute les classes de l'élément event.target
    // add ajoute une class à l'élément event.target
    // console.log(event.target.prenom.classList)
    if (prenom !== '' || nom !== '') {
        if (prenom.length < 2) {
            event.target.prenom.classList.add('error');
            event.target.prenom.classList.remove('valide');
        } else {
            event.target.prenom.classList.add('valide');
            event.target.prenom.classList.remove('error');
        }

        if (nom.length < 4) {
            event.target.nom.classList.add('error');
            event.target.nom.classList.remove('valide');
        } else {
            event.target.nom.classList.add('valide');
            event.target.nom.classList.remove('error');
        }
    } //fin fonction 1

    if (pass1 !== pass2) {
        // event.target.password2.classList.add('error');
        // event.target.password2.classList.remove('valide');
        // event.target.confirmpassword2.classList.add('error');
        // event.target.confirmpassword2.classList.remove('valide');
        // on test avec label

        document.getElementById('placeholder2').innerHTML = "attention !! vos mots de passe doivent être identique.";
        document.getElementById('placeholder2').classList.add("rouge");
       
    } else if (pass1.length < 8 || pass1.length > 15) {
        event.target.password2.classList.add('long');
        event.target.password2.classList.remove('confirm');
        event.target.confirmpassword2.classList.add('long');
        event.target.confirmpassword2.classList.remove('confirm');
        // alert('votre mot de pass doit être entre 8 et 15 caractères!');


    } else {
        event.target.password2.classList.add('valide');
        event.target.password2.classList.remove('error');
        event.target.confirmpassword2.classList.add('valide');
        event.target.confirmpassword2.classList.remove('error');

    } //fin fonction 2

    // utilisation de la fonction regulière
    console.info(regex.test(email));

    // let regex = /([a-z0-9](\.?|\_|\-))*@([a-z0-9]{2,})(\.[a-z]{2,}){1,}/;
    // avant le @ on a le droit de mettre de a à z de 0 à 9 un . et _ et - 
    //après @ il faut au minimun 2 caractères puis un . et de à a z et au minimum 2 caractères
    // console.log(regex);

    if (regex.test(email) === false) {
        event.target.email.classList.add("error");
        event.target.email.classList.remove("valide");

    } else {
        event.target.email.classList.remove("error");
        event.target.email.classList.add("valide");
    } //fin fonction 3

    document.getElementById('resetForm').addEventListener('click', function (event) {
        event.target.form.prenom.value = '';
        event.target.form.nom.value = '';
        event.target.form.email.value = '';
        event.target.form.password2.value = '';
        event.target.form.confirmpassword2.value = '';

    }); //fin fonction reset

}
function show() {
    var p = document.getElementById('password2');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('password2');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);