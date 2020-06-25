// 1. Ecrire la fonction isMultiple, qui prend deux entiers n et m et
// retourne vrai si et seulementsi n est un multipledem.
//*******************************************************
// function isMultiple() {
//     let n = Number(prompt("n="));
//     let m = Number(prompt("m="));
//     if ((n % m)==0){
//         alert(`${n} est un multiple de ${m}`);
//     }
//     else {
//         alert(`${n} n'est pas un multiple de ${m}`);
//     }
//     return n%m;
// }
// isMultiple();

//***********************************************
// 2. Ecrire la fonction isEven, qui prend un entier i et retourne vrai si et
// seulement si i est un nombre pair. « Notre méthode ne peut pas utiliser
// la multiplication,le module,ou la division comme operateur en son sein»


// function pair(chiffre){
//     chiffre=Number(prompt("n="));
//     chiffre=parseInt(chiffre);
//     return ((chiffre & 1)=='0')?true:false;
// }
// alert(pair());


// 3. Un nombre est n premier s'il a seulement deux diviseurs :
// 1 et n.Ecrire une fonction isPremier qui permet de tester
// si un nombre saisi par l'utilisateurest premierou non.



// 4. Ecrire une fonction qui prend un entier n et retourne
// la somme des entiers inferieur sous égale à la valeur absolue de n.



// 5. Ecrire une méthode qui compte le nombre de voyelles
// dans une chaîne de caractèresdonnée

function getVowels(str) {
    var vowelsCount = 0;

    //turn the input into a string
    var string = str.toString();

    //loop through the string
    for (var i = 0; i <= string.length - 1; i++) {

        //if a vowel, add to vowel count
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}

