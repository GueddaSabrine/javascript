/ 1. Ecrire la fonction isMultiple, qui prend deux entiers n et m et
// retourne vrai si et seulementsi n est un multipledem.


function isMultiple() {
    let n = Number(prompt("n="));
    let m = Number(prompt("m="));
    if ((n % m)==0){
        alert(`${n} est un multiple de ${m}`);
    }
    else {
        alert(`${n} n'est pas un multiple de ${m}`);
    }
    return n%m;
}
isMultiple();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2. Ecrire la fonction isEven, qui prend un entier i et retourne vrai si et
// seulement si i est un nombre pair. « Notre méthode ne peut pas utiliser
// la multiplication,le module,ou la division comme operateur en son sein»



function pair(chiffre){
    chiffre=Number(prompt("n="));
    chiffre=parseInt(chiffre);
    return ((chiffre & 1)=='0')?true:false;
}
alert(pair());

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Un nombre est n premier s'il a seulement deux diviseurs :
// 1 et n.Ecrire une fonction isPremier qui permet de tester
// si un nombre saisi par l'utilisateurest premierou non.


function nbrPremier(nbr) {
    for(var i = 2; i < nbr; i++)
        if(nbr%i === 0) return false;
    return nbr > 1;
}
console.log(nbrPremier(2));


(SECONDE METHODE avec la page HTML)
<script language="JavaScript">
var n       = new Number,
    estPrem = new Boolean(true);
n=prompt('nombre a tester :',21);
for(j=2;j<n;j++)
{
    if(n%j==0) estPrem=false;
}
alert(n+' est premier : '+estPrem);
</script>

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Ecrire une fonction qui prend un entier n et retourne
// la somme des entiers inferieur sous égale à la valeur absolue de n.

function random(number) {
    var result = Math.floor(Math.random()*number);
    return result;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 5. Ecrire une méthode qui compte le nombre de voyelles
// dans une chaîne de caractèresdonnée


var vowelCount = function(str){
    var count = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i].toLowerCase() == 'a' || str[i].toLowerCase() == 'i' || str[i].toLowerCase() == 'o' ||str[i].toLowerCase() == 'e' ||str[i].toLowerCase() == 'u'){
            count+=1;
        }
    }
    return count;
}
vowelCount('joue')

int main (){

    char texte[]
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


