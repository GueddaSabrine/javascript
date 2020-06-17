
/*
//les booleans

let estVrai = true;
let  estFaux = false;

//Opérateur de Négation
console.log(!estVrai);
console.log(!estFaux);

//une parenthese en passant
console.log("a" < "b");
console.log("A" > "b");
console.log("A" == '');

let age = 45;

if (age >= 25) {
    console.log("Super Division");
}else if ((age >= 18) && (age < 25)) {
    console.log("Division Normale");
}else {
    console.log("Division mineure");
}
*/
/*
let condition = false;
condition = 0;
condition = '';
condition = NoN;
condition = undefined;
condition = null;

condition = true;
condition = 2;
condition = 'yfhfg';

 if(condition){
     console.log("condition verifiée !!!");
 }
 */
/*
//opérateur ternaire
let age = Number(prompt(message "Saidir votre age"));
let message;
if (age >= 18){
    message = 'Vous etes majeur(e)';
} else {
    message = `Vous etes majeur(e) j'ai ${age}`;
}
*/

/*message = (age >= 18 ? `Vous etes majeur(e)` : 'Vous etes majeur(e)');

alert(`message ---> ${message}`);*/

//Switch

let numeroDuJour = Number(prompt(message `Saisir le numero du jour de la semaine`));
let message;

switch  (numeroDuJour){
    case 1:
        message = `Lundi`;
        break;
    case 2:
        message = `Mardi`;
        break;
    case 3:
        message = `Mercredi`;
        break;
    case 4:
        message = `Jeudi`;
        break;
    case 5:
        message = `Vendredi`;
        break;
    case 6:
        message = `Samedi`;
        break;
    case 7:
        message = `Dimanche`;
        break;
    default:
        message = `Jour inconnu du systeme`
}

alert(`Votre saisie correspond au jour ${message}`)