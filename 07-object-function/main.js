//Notion des objects en JS

// let personne = new Object() ;
// personne.prenom = "Joachim";
// personne.age = 52;
// personne.sexe = 'M';

//prefer la notation JSON
// let personne = { prenom:`Joachim`, age: 23, sexe: `M`}
//
// console.log(personne);
// console.log(personne.age);
// console.log(personne ['age']);
// console.log(typeof personne);
//
// let personneProps = Object.getOwnPropertyNames(personne);
// console.log(personneProps);

//notion de fonction en JS
// let a = 2;
// let b = 3;
//
// //definir une fonction
// function addition(){
//     let resultat = a + b;
//     console.log(resultat);
// }
//
// //execution de la fonction
// addition();
//
// //cree dossier HTML pour exécuter l'instruction
// function addition(){
//     let a = Number(prompt( "a"));
//     let b = Number(prompt( "b"));
//     let resultat = a + b;
//     console.log(resultat);
// }

// function addition(m, n) {
//     let resultat = m + n;
// //     // return resultat;
//     return resultat;
// // console.log(m + n);
// }
// let autreResultat = addition( -7, 5) * 6;
// console.log(autreResultat);

// function addition(m = 3, n = -1) {
//     let resultat = m + n;
//     return resultat;
// }

// function addition(...n) {
//     let resultat;
//     for (const i of n){
//         resultat+= i
//     }
//     return resultat;
// }

// function addition(...listArg) {
//     let resultat;
//     for (const i of listArg){
//         resultat+= i
//     }
//     return resultat;
// }



//console.log(addition());
// console.log(addition(5));
//console.log(addition(5, 69));
console.log(addition(5,6, 96));

function addition2(...listArg) {
    let resultat = 0;
    for (const valeur of listArg){
        resultat += valeur;
    }
    return resultat;
}
addition2( 5)