// 1.
// Créer une chaîne de caractères de 50
//
// let tiret = "_";
// console.log(`tiret: ${tiret.repeat(50)} `)
// console.log(maChaine.length);


// 2.
// Inverser une chaîne de caractères (sans supprimer l'originale)

// let maChaine = 'Lorem ipsum dolor sit amet consectetur adipiscing.' ;
// let rev = maChaine.split('').reverse().join('');
// console.log(maChaine);
// console.log(rev);



// 3.
// Remplacer tous les caractères d'une chaîne par une *

//let maChaine = 'Lorem ipsum dolor sit amet consectetur adipiscing.' ;-------------------------
// let maaChaine = maChaine.replace('maChaine','*');
// console.log(maaChaine);-----------------------------------------------------------


// 4.
// Remplacer toutes les occurrences d'une lettre par une autre dans une chaîne
// de caractères

//(exemple1)
// const maChaine = `Lorem ipsum dolor sit amet consectetur adipiscing.`;
// console.log(maChaine.replace('ipsum','consectetur' ));

//(exemple2)
// const maChaine = `Lorem ipsum dolor sit amet consectetur adipiscing.`;
// console.log(maChaine);
// console.log(maChaine.replace('m','c',).replace('r', 'i').replace('e','t'));

// 5.
// Supprimer toutes les occurrences d'une lettre dans une chaîne de caractères

//(exemple1)
// const maChaine = `Lorem ipsum dolor sit amet consectetur adipiscing.`;
// console.log(maChaine.replace('ipsum','consectetur' ));
// maChaine.replace('','');
// console.log(maChaine);

//(exemple2)
// const maChaine = `Lorem ipsum dolor sit amet consectetur adipiscing.`;
// console.log(maChaine.replace('m','c',).replace('r', 'i'));
// maChaine.replace('','');
// console.log(maChaine);

// 6.
// Afficher la présence d'une lettre dans une chaîne (si oui, en afficher le nombre
// ( si non, afficher "absent")

// const maChaine = `Lorem ipsum dolor sit amet consectetur adipiscing.`;
// const searchTerm = 'e';
// const indexOfFirst = maChaine.indexOf(searchTerm);
// console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);


// var indices = [];
// var tableau = ['a', 'b', 'a', 'c', 'a', 'd'];
// var élément = 'a';
// var idx = tableau.indexOf(élément);
// while (idx != -1) {
//     indices.push(idx);
//     idx = tableau.indexOf(élément, idx + 1);
// }
// console.log(indices);



// 7.
// Compter le nombre d'occurrence de chaque lettre dans une chaine
// (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/indexOf)
// const str = "Chaîne reset de test reverse";
// let count = 0;
// let pos = str.indexOf("r");
//
// while ( pos != -1 ) {
//     count++;
//     pos = str.indexOf( "r",pos + 1 );
// }
// console.log(count);

// 8.
// Remplacer les double espace (ou dans une chaîne de caractères par un
// espace






// 9.
// Découper une chaîne de caractères en mots avec l'espace comme séparateur
// et les compter

