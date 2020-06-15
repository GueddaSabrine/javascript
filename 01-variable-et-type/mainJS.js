//declaration de variables
/*
Ceci est un commentaire
 */

//on declare la variable maVariable
let maVariable;

/*deteremination du type de la variable avec typeof*/
typeof maVariable;
console.log(typeof maVariable);

//on fait une assignation ou une affectation
maVariable=25;
console.log(typeof maVariable);//number

maVariable= "sabrine";
console.log((typeof maVariable));//string

maVariable= true;
console.log(typeof maVariable);//boolean faux ou vrai/1 OU 0

maVariable= null;
console.log(typeof maVariable);//object

//on dit que javascript est un language faiblement typé

/*
On ne peut pas déclarer une variable plusieur fois, seuleument une fois
let maVariable=75;
console.log(typeof maVariable);
 */

let prenom = "sabrine";

//on peut déclarer aussi des variables sur une mm ligne
let age = 24, nom, estMajeur;
nom = 'sabrine';
estMajeur = false;

//les mots réserver au JS ne peuvent servir de nom de variable
//let var ;//INTERDIT

//le nom d'une variable ne peut commencer par un nombre
let nom5 = "DAWM";
console.log(nom5)
let _nom = "DAWM";
console.log(_nom)
let _nom_ = "DAWM";
console.log(_nom_)

let monPrenom; //Notation kamel case
let mon_prenom;

//Déclaration de constante -->const
const ma_constante = "sabrine";
//ma_constante = "Talia"; interdit
//ma_constante = "sabrine"; modification interdite

//utilisations des variables
//*************************

let a = 45;
let b = -12;
console.log(a + b);

let c = "5";
console.log(a + b + c);

