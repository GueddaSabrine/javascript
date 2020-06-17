// //Les tableaux
//
// //Declaration
// let stagiaires = [`Roxana`, `Talia`, `Sabrine`, `Bakary`, `Souly`, `Aoukas`, `Toulepi`, `Badji`];
// let numero = Array( 1, 35, 84, -98);
// let tabMixed = new Array( true, 68, `chat`, null, [45, `Joachim`])
//
// //Taille du tableau
// let taille = stagiaires.length;
// console.log(`tailleStagiaires = ${taille}`);
// console.log(`tailleNumero = ${numero.length}`);
// console.log(`tailleTabMixed = ${TabMixed.length}`);
//
// //Acces aux elements du tableau
// console.log(stagiaires[0]);
// console.log(stagiaires[2]);
//
// //Modifier les elements du tableau
// stagiaires[8] = `Tayachi`
// console.log(stagiaires[8]);
//
// stagiaires[8] = `Guedda`
// console.log(stagiaires[2]);
//
// //Methodes de tableau
//
// let numeros = [1, 2, 3, 4];
// console.log(numeros);
//
// //ajout en fin de tableau
// numeros.push(-5);
// console.log(numeros);
//
// //supprime le dernier element du tableau
// numeros.pop()
// console.log(numeros);
//
// //Ajout en debut de tableau
// numeros.unshift(items -5);
// console.log(numeros);
//
// // supprime le premier element du tableau
// // numeros.shift(5);
// // console.log(numeros);

//les boucles

//Pour--->For
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

//Tant que ---< WHILE
// let i = 1;
// while   (i <= 10){
//     console.log(i);
//     i++;
// }
//
// //Repeter tant que ---> Do....while
// let compteur = 1;
//
// console.log("DO...WHILE")
//
// do {
//     console.log(compteur);
//     compteur++;
// } while (compteur <= 10);

// let stagiaires = [`Roxana`, `Talia`, `Sabrine`, `Bakary`, `Souly`, `Aoukas`, `Toulepi`, `Badji`];
// // for (let i = 0; i < stagiaires.length; i++){
// //     console.log(stagiaires[i])
// // }
// let compteur = 0;
// while   (compteur<stagiaires.length){
//     console.log(stagiaires[compteur]);
//     compteur++;
// }

//for...of
// let stagiaires = [`Roxana`, `Talia`, `Sabrine`, `Bakary`, `Souly`, `Aoukas`, `Toulepi`, `Badji`];
// for (let stagiaire of stagiaires){
//     console.log(stagiaire);
// }

// //for..OF ---> Pour accerder aux elements du tableau
// let stagiaires = [`Roxana`, `Talia`, `Sabrine`, `Bakary`, `Souly`, `Aoukas`, `Toulepi`, `Badji`];
// for (let stagiaire of stagiaires){
//     console.log(stagiaire);
// }
//
// //for...IN --> Pour acceder aux index du tableau
// for (let  position in stagiaires){
//     console.log(`(${position}, ${stagiaires[position]})`);
// }

//mot cle break & continue

// for (let i = 1; i <= 10; i++){
//     if (i === 6) {
//         break;
//     }
//     console.log(i);
// }

for (let i = 1; i <= 10; i++){
    if (i === 6) {
        continue;
    }
    console.log(i);
}