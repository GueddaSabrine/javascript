// let varPrimitif = "Bonjour";
// console.log(varPrimitif)
// console.log(typeof varPrimitif);

class Personne {
    prenom;
    age;
    conjoint;
    constructor(prenom, age) {
        this.prenom  =  prenom;
        this.age  =  age ;
    }
//methode fonction à l'interieur d'une classe
    seMarier(autrePersonne){
        if(this.age >= 18 && autrePersonne.age >=18 && this.conjoint === undefined && autrePersonne.conjoint === undefined){
            this.conjoint = autrePersonne;
            autrePersonne.conjoint = this;
        }
    }

    affichePersonne() {
        let affichage = ` ${this.prenom}, ${this.age}, ans\n; `
        if (this.conjoint == undefined
    )
        {
            affichage += `a pour conjoint ${this.conjoint.prenom}, ${this.conjoint.age}ans`
        }
        return affichage;
    }
}

// let personneTalia = new Personne("talia", 23);
//     console.log(personneTalia.affichePersonne())
//
//
let personneTalia = new Personne("Talia", 23);
// console.log(personneTalia.prenom);
// let toulepi = new Personne();
// toulepi.age =   21;
// toulepi.prenom = "toulepi"
// toulepi.conjoint = null;

// console.log(personneTalia);

console.log(typeof personneBakary);
let autrePersonne = new Personne("Bakary", 24);
// console.log(autrePersonne == personneBakary);
let p3 = personneBakary;
console.log(p3 == personneBakary)

p3.prenom = "Toulepi";
console.log(p3);
console.log(personneBakary);

