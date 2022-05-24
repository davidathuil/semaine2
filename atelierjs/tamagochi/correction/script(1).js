// CREATION DE LA FONCTION PRINCIPALE
function tamagotchi() {
  // CREATION DES VARIABLES GLOBALES
  let faim = 0;
  let energie = 10;
  let joie = 5;

  // APPEL DE MA FONCTION BOUCLE + CHOIX
  loopChooseAction(faim, energie, joie);
}

/**
 
 * @param {*} faim 
 * @param {*} energie 
 * @param {*} joie 
 */
function loopChooseAction(faim, energie, joie) {
  let choix;
  // Création de la boucle
  while (energie >= 0 && faim <= 5 && joie >= 0 && choix != "3") {
    choix = prompt(`
    -----------------------------
    ENERGIE: ${energie} 
    FAIM: ${faim}
    JOIE: ${joie}
    -----------------------------
    Que voulez vous faire ?
        1/ Jouer
        2/ Nourrir
        3/ Sortir
    ----------------------------
`);
    // Début des conditions en fonction du choix
    if (choix == "1") {
      energie -= 2;
      faim++;
      joie++;
      alert(`Votre tamagotchi s'est amusé mais ses caractéristiques ont changé:
      -----------------------------------
      ENERGIE(-2):${energie}
      FAIM(+1):${faim}
      JOIE(+1): ${joie}
      -----------------------------------
      `);
      warning(faim, energie, joie);
    } else if (choix == "2") {
      // Conséquences de l'action nourrir
      energie += 2;
      faim--;
      joie--;

      alert(`Votre tamagotchi a mangé mais ses caractéristiques ont changé:
      -----------------------------------
      ENERGIE(+2):${energie}
      FAIM(-1):${faim}
      JOIE(-1): ${joie}
      -----------------------------------
      `);
      warning(faim, energie, joie);
    } else {
      alert("Je n'ai pas compris veuillez réessayer.");
    }
  }
  autopsie(faim, energie, joie);
}

// Pourquoi mon tamagotchi est mort
function autopsie(faim, energie, joie) {
  if (joie < 0) {
    alert("Votre tamagotchi s'est suicidé");
  } else if (energie < 0) {
    alert("Votre tamagotchi est mort d'épuisement");
  } else {
    alert("Votre tamagotchi est mort de faim");
  }
  restart();
}

// FONCTION POUR RECOMMENCER A JOUER
function restart() {
  let restart = prompt("Voulez vous recommencer ? Oui ou Non");
  if (restart == "Oui") {
    tamagotchi();
  } else if (choix == "Non") {
    alert("A bientôt");
  } else {
    alert("Je n'ai pas compris");
  }
}

// FONCTION QUI AVERTI AVANT DE MOURRIR
function warning(faim, energie, joie) {
  if (faim == 5) {
    alert("Attention ton tamagotchi va bientôt mourrir de faim");
  } else if (energie == 0) {
    alert("Attention ton tamagotchi va bientôt mourrir de fatigue");
  } else if (joie == 0) {
    alert("Attention ton tamagotchi va bientôt se suicider");
  } else {
    false;
  }
}

// APPEL DE MA FONCTION
tamagotchi();
