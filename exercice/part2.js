//Partie 2
//1. Dans un tableau de 10 entiers, trouver les rangs du plus petit et du plus grand élément, et afficher les rangs et leurs valeurs.
// let tableau = [], posMin, valMin, posMax, valMax;
// for (let i = 0; i < 10; i++){
//     // let alea = Math.random()*100;
//     // let alea = Math.random()*100 - Math.random()*100;
//     let alea = Math.round(Math.random()*100 - Math.random()*100);
//     if (valMin === undefined || valMin < alea){
//         valMin = alea;
//         posMin = i;
//     }
//     if (valMax === undefined || valMax < alea){
//         valMax = alea;
//         posMax = i;
//     }
//    tableau.push(alea);
// }
// console.log(tableau);
// console.log(`valMin = ${valMin} ==>posMin = ${posMin}`);
// console.log(`valMin = ${valMax} ==>posMin = ${posMax}`);

// function tableaualeatoire() {
//     let tableau = [] ;
//     for (let i = 0; i < 10; i++){
//         let alea = Math.round(Math.random()*100 - Math.random()*100);
//     }
//     return tab;
// }
// console.log(tableaualeatoire)

// let tableau = tableauAleatoire(){
// let tab = [];
//     for (let i = 0; i < 10; i++){
//         let alea = Math.round(Math.random()*100 - Math.random()*100);
//     }
//     return tab;
// }
//
// let tableau = tableauAleatoire();
// let posMin, valMin, posMax, valMax;
// for (let value of tableau)
//     if (valMin === undefined || valMin > value){
//         valMin = value;
//         posMin = tableau.indexOf(value);
//     }
//     if (valMax === undefined || valMax < value){
//         valMax = value;
//         posMax = tableau.indexOf(value);
//     }

let tableau = tableauAleatoire(taille: 10);
let valMin = Math.min(...tableau);
let posMin = tableau.indexOf(valMin);

let valMax = Math.max(...tableau);
let posMax = tableau.indexOf(valMax);

console.log(tableau);
console.log(`valMin = ${valMin}==> posMin = ${posMin}`)
console.log(`valMax = ${valMax}==> posMin = ${posMax}`)

