// Crée par Joachim Zadi le 24/06/2020 à 05:15
// ===========================================

//ETAPE1
//*****

//On selectionne les elements de la page
let formulaire = document.getElementById('formulaire');
let saisie = document.getElementById('saisie');
let erreur = document.getElementById('erreur');

//ETAPE2
//le systeme génere un nombre aléatoire (1 < - > 10)
let alea = Math.floor(Math.random()*10) + 1;
let nbCoup = 0;
let nombreChoisi;

//ETAPE3
//On verifie que la saisie est un nombre
saisie.addEventListener('keyup', ()=> {
    if(isNaN(saisie)){
        //On affiche le message d'erreur
        erreur.style.display = 'inline';
    }else {
        //on affiche le message d'erreur
    }
});

//ETAPE4
//On valide le formulaire
formulaire.addEventListener('submit', function(e:)=> {
    //desactive le comportement par defaut du navigateur
    e.preventDefault();

    //On verifie les infos saise par l'utilisateur
    if(isNaN(saisie.value) || saisie.value.trim ==``) {
        //On met une couleur de bordure rouge
        saisie.style.borderColor = 'red';

    }else {

        //On incremente le nombre de coup
        nbCoup++;

        //on met une couleur bordure sylver
        saisie.style.borderColor = 'sylver';

        //On recupere la saise de l'utilisateur
        nombreChoisi = saisie.value;

        //On reintilise le champ de saisie
        saisie.value = '';

        //On appelle la fonction de verification
        verifier(nombreChoisi);
    }
});

function verifier(nombre){
    //on cree l'element qui va encapsuler notre message
    let instruction = document.createElement('p');

    if(nombre < alea){
        instruction.className = "alert alert-danger";
        instruction.textContent = `Coup N°${nbCoup} [${nombre}], c'est plus grand`;
    }else if(nombre > alea){
        instruction.className = "alert alert-danger";
        instruction.textContent = `Coup N°${nbCoup} [${nombre}], c'est plus petit`;
    }else {
        instruction.className = "alert alert-success";
        instruction.textContent = `Bravo le nombre trouvé etait ${alea}`;
    }
    document.getElementById('instructions')
}


