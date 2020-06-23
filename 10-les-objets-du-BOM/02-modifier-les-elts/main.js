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
// premierH1.innerText = "Titre modifié par JavaScript";
premierH1.innerHTML = " <div style='color: red'> Titre modifié par JavaScript";
document.querySelector('a').textContent="wikipedia.org";  //recupere l'element et le change
document.querySelector('#titreHeader').textContent="wikipedia.org"; //(pour le id par un # pour une classe par un .point )

// Modifier le contenu HTML du tag h1
// **********************************

//TODO

// Exercices
// *********

//TODO

// Modifier l'attribut d'un element
// ********************************

//TODO

// Modifier le style d'un element
// ******************************

//TODO