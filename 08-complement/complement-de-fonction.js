function  somme ( g ,  d )  {
    return g  +  d ;
}

let modulo  = function (a, b){
    return a % b;
}
modulo(9, 4);

let division = (a, b) => {
    return a/b;
}

let message;

function auSecours() {
let message = `à l'aide, je suis fatiguée`;
console.log(message);
}
// auSecours();
// console.log(message)

let rayon = 8;

if (rayon > 7) {
    const PI = Math.PI ;
    let perimetre = 2 * PI * rayon;
}
// console.log(rayon);
// console.log(PI);
// console.log(perimetre);

// let externe = () => {
//     let hero = "Spiderman";
//     function interne() {
//         let appelAide = `${hero}, please help me `;
//         console.log(appelAide)
//     }
//     interne();
// }
//
// externe();

function definiDeuxFois(func) {
    func();
    func();
}

function rire() {
    console.log("HAHAHAHA");
}

definiDeuxFois(rire)

let tab = [1, 2, 3, 4];
let tabmap = tab.map(function (i){
    return i * 3;
});
tab.map(i => i * 3);

// console.log(tab);
// console.log(tabMap);

let tableau = [48, -69, 78, -1, -23, 45, 98];
console.log(tableau)
let tableauTrie = tableau.sort((a, b) => a - b);
console.log(tableauTrie)