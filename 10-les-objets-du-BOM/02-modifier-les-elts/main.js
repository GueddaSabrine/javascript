// Crée par Joachim Zadi le 21/06/2020 à 16:24
// ===========================================

// Recuperer le contenu du tag h1
// ******************************

let premierH1 = document.querySelector('h1');
// console.log(premierH1.innerText);
console.log(premierH1.textContent);

// Modifier le contenu du tag h1
// *****************************

// premierH1.textContent = "Titre modifié par JavaScript";
premierH1.innerText = "Titre modifié par JavaScript";
// premierH1.innerHTML = " <div style='color: red'> Titre modifié par JavaScript";
document.querySelector('a').textContent="wikipedia.org";  //recupere l'element et le change
// document.querySelectorAll('#titreHeader')[2].textContent="wikipedia.org"; //(pour le id par un # pour une classe par un .point )

// Modifier le contenu HTML du tag h1
// **********************************



// Exercices
// *********

// let liens = document.querySelectorAll('a');
// console.log(liens);
let liens = document.querySelectorAll('a');
console.log(liens[6].textContent);
liens[6].textContent = "Lien 4";
liens[7].textContent = "Lien 5";
liens[8].textContent = "Lien 6";


// Modifier l'attribut d'un element
// ********************************

document.querySelector('a').href="http://wikipedia.org";
document.querySelector('.container').className="container-fluid";

// Modifier le style d'un element
// ******************************

document.querySelector('#titreHeader').style.color = "Purple";
document.querySelector('#titreHeader').style.fontSize = "5rem" ;