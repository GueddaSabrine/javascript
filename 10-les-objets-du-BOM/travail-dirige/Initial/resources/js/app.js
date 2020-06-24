//*****************

let scoresGlobals = [0, 0];
let scoreEnCours = 0;
let joueurActif = 1;

initiliseLeJeu();

let btnLancezLeDe = document.querySelector(`.btn-lancer`);
btnLancezLeDe.addEventListener('click', () =>{
    let de = Math.floor(Math.random() * 6) + 1;
    let domDe = document.querySelector('.de');
    domDe.style.display = 'block';
    domDe.src = `resources/images/de-${de}.png`;

if (de !== 1){
    scoreEnCours += de;
    document.getElementById(`encours-${joueurActif}`).textContent = scoreEnCours;
} else{
    joueurSuivant()
}
});

let btnCommutez = document.querySelector('.btn-commuter');
btnCommutez.addEventListener('click', () => {
    scoresGlobals[joueurActif - 1] += scoreEnCours;
    document.getElementById(`score-${joueurActif}`).textContent=scoresGlobals[joueurActif-1];
    joueurSuivant()
});

function joueurSuivant() {
    joueurActif === 1 ? joueurActif = 2 : joueurActif = 1;
    scoreEnCours = 0;
    document.getElementById(`encours-${joueurActif}`).textContent = '0';
    document.querySelector('.joueur-1-panel').classList.toggle('active');
    document.querySelector('.joueur-2-panel').classList.toggle('active');
    document.querySelector('.de').style.display = 'none';
}


let btnNouveauJeu = document.querySelector('.btn-nouveau');
btnNouveauJeu.addEventListener('click',() => {
    initiliseLeJeu();
}); 

    function initiliseLeJeu() {
    scoresGlobals = [0, 0];
    scoreEnCours = 0;
    joueurActif = 1;

    document.querySelector('.de').style.display = 'none';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    document.getElementById('encours-1').textContent = '0';
    document.getElementById('encours-2').textContent = '0';
}

