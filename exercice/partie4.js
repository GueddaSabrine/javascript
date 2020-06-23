/*Le jeu consiste à découvrirpar essais successifsle prix d'un lot. Pour chaque essai,le joueur reçoit un message :
« Trop grand »,« Trop petit » ou « BRAVO !Vous avez trouvéen K essais ».
Le jeu est fini quand le joueur a trouvé le prix du lot. On propose d'écrire un programmequijouele rôle
 de meneurde jeu ;
L'exécutiondece programme vous fera tenir le rôle du joueur.
Le programme doit définir le prix du lot en tirant un entier aléatoire
 entre 1 et 1000et dialogueravecle joueurpendantle jeu*/

do {
    int prix = (int)(1001 * Math.random());
    int essai ;
    int nbEssais = 1 ;
    int nbMaxEssais = LectureClavier.lireEntier("Nombre maximum d'essais : ");
    essai = LectureClavier.lireEntier("Votre proposition 1  : ");

    while (essai != prix && nbEssais < nbMaxEssais) {
        if (essai < prix)
            System.out.println("Trop petit !");
        else if (essai > prix)
            System.out.println("Trop grand");

        nbEssais++;
        essai = LectureClavier.lireEntier("Votre proposition " + nbEssais + " ");
    }

    if (essai == prix)
        System.out.println("Bravo ! Vous avez trouvé le nombre caché en " + nbEssais + " essais.");
    else {
        System.out.println("Vous avez dépassé le nombre maximum d'essais autorisés");
        System.out.println("La valeur à rechercher était : " + prix);
    }

    encore =LectureClavier.lireOuiNon("\nAutre partie O/N ? : ");

} while (encore);

}



