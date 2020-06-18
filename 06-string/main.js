// //les chaines de caractere
// //Declaration d'une variable
// //[C,h,i,e,n]
// let maChaine = 'Chien';
// console.log(typeof maChaine);
// //longueur chaine
// console.log(`longeur = ${maChaine.length}`)
// maChaine= "sabrine"
// // console.log('longueur = ${maChaine.length}')
// //caractere d'1position dans la chaine >>>chArat
// // console.log('maChaine.charAt(3)')
// // console.log(maChaine.charAt(0)) //récupere la lettre C avec 0
// // console.log(maChaine.charAt(3))
// // console.log(`longeur = ${maChaine.length} `)
//
// maChaine = "Youtube"
// // console.log(maChaine.substring(1, 4));
// // console.log(maChaine.substring(3, 7));
// // console.log(maChaine.substring(1));
// // console.log(`longeur = ${maChaine.length} `);
//
// let a = 'a';
// let b = 'b';
// console.log(a < b);
//
// a='add';
// b='b';
// // console.log(a < b);
// a='add';
// b='ab';
// console.log(a < b);
//
// a = "a";
// b = "B";
// console.log(a < b);

maChaine = "Red Dragon"
// console.log(maChaine.length);
// console.log(maChaine.indexOf("Red"));
// console.log(maChaine.indexOf("RedScale"));
// console.log(maChaine.indexOf("Dragon", 0));
// console.log(maChaine.indexOf("Dragon", 4));
// console.log(maChaine.indexOf("", 9));
// console.log(maChaine.indexOf(" ", 3));
// console.log(typeof NaN);
// console.log(maChaine.startsWith("Red"));
// console.log(maChaine.startsWith("red"));
// console.log(maChaine.endsWith("Red"));
// console.log(maChaine.endsWith("n"));
// console.log(maChaine.endsWith("nn"));
// console.log(maChaine.endsWith("Dragon"));
// console.log(maChaine.endsWith("Red Dragon"));

maChaine ="forlation,html,css,javascript,jquery,ajax merise,sql";
// console.log(maChaine.split());
// let resultat = maChaine.split();
// console.log(resultat.length);
// console.log(maChaine.length);
// let resultat = maChaine.split(separator/ ",");
// console.log(resultat.length);
// console.log(resultat.split(","));

maChaine = "Bak,ary";
// console.log(maChaine.split());

maChaine = "La poussiere du desert de l'Afrique";
let resultat = maChaine.replace(searchValue: "afrique", replaceValue:"amerique").replace(searchValue: "poussiere", replaceValue:"pluie")
console.log(resultat);

resultat.replace(searchValue: " ", replaceValue:"_");
console.log(resultat);