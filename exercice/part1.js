//boucle for
//----------

// for (let compteur = 1; compteur < 11; compteur++){
//     console.log(compteur);
// }
// let affichage = "";
// for (let compteur = 1; compteur < 11; compteur++){
//     affichage = affichage + compteur
//     console.log(compteur);
//     affichage += compteur + " ";
//     affichage += `${compteur}`;
// }
// console.log(affichage);

//Boucle while
//------------

// let compteur = 1;
// while (compteur < 11){
//     console.Log(compteur);
//     compteur++;
// }

//Boucle do...while

// let compteur = 1;
// do{
//     console.log(compteur);
//     compteur++;
// }

//2.Afficher la somme des nombres de 1 à 10:

// let somme = 0;
// for (let i = 1; i <= 10; i++){
//     somme += i;
// }
// console.log(somme)

//3.saisie deux nombre n et m, dans le cas ou n est superieur à m

let m = Number(prompt("M"));
let n = Number(prompt("N"));

//A
// if (n > m){
//     console.log("n doit etre inferieur à m");
// }

//B==>TODO
//C
// if (n > m){
//     for (let i = n; i >= m; i--){
//         console.log(i);
//     }
// }

//D
// let somme = 0;
// if (n > m) {
// for (let i = n; i >= m; i--){
//     if (i % 2 === 0){
//         somme += i;
//     }
// }
// }
// console.log(somme)

//6
// let n
// do {
//     n = Number(prompt("Entrez le nombre de valeur à saisir"));
// }   while(Number.isNaN(n));
//
// for (let i = 0; i < n; i++){
//     let value = Number(prompt('valeur${i}'));
// }

// n = Number(prompt("Entrez le nombre de valeur à saisir"));
// console.log(Number.isNaN(n));

let n, somme, moyenne, compteur = 0;
do {
    n = Number(prompt("Entrez le nombre de valeur à saisir"));
}   while(Number.isNaN(n));

for (let i = 1; i <= n; i++){
    let value = Number(prompt(`Saisir la valeur ${i}`));
    if (!Number.isNaN(value)) {
        somme += value;
        compteur++;
    }
}
moyenne = somme /compteur;
console.log(somme)


