// Création variable / constante
const plat = 20;
const BA = 8;
const boissonNonAlcoolisee = 5;

// Demande du crédit au client

let credit=prompt("Combien avez-vous dans votre portefeuille:"); 

// Demande de l'âge au client

let age =prompt("Saisissez votre age:");

function possiblechoix (credit) {

if(credit >= 20){
 console.log("Vous pouvez commander Boisson alcoolise ou la boisson non alcoolise ou le plat");
}
else if(credit>=8 && credit<20) {
console.log("Vous pouvez commander Boisson alcoolise ou la boisson non alcoolise");
}
else if(credit>=5 && credit<8){
console.log("Vous pouvez commander la boisson non alcoolise");
}
else  {
console.log("Vous ne pouvez pas commander");
}
}

// Demande du choix au client;

let choix ;

//appel fonction
possiblechoix (credit);

// boucle choix multiple

while(credit > 5 && choix != 4) {
choix = prompt("Que voulez vous commander : 1/Plat 2/ Boisson Alcoolisée 3/ Boisson Non Alcoolisé 4/fin")
//    

// CONDITIONS SI CHOIX = PLAT
if (choix == "1") {

    // Vérification du crédit
    if(credit >= plat) {
        credit = credit - plat
        console.log ("Commande accepté voici votre plat il vous reste " + credit + " euros ");
    } 
    else {
        console.log("Vous n'avez pas assez d'argent commandez autre chose");

    }
} 
// Choix boisson alcool
else if(choix == "2") {
    if(age < 18) {
        console.log("Vous n'êtes pas majeur vous ne pouvez pas commander d'alcool");
    }
    else if(credit < BA){
        
        console.log("Vas au travail pour gagner plus d'argent !");

    }
    else {
        credit = credit - BA
        console.log("A la tienne il vous reste " + credit + " euros ");
    }
}
// Partie boisson non alcoolisée
else if(choix == "3" ){
    // Vérifier le crédit du client
    if(credit >= boissonNonAlcoolisee) {
        credit = credit - boissonNonAlcoolisee
        console.log("Commande accepté voici votre soda il vous reste " + credit + " euros ");
    } else {
        console.log("Vous n'avez pas assez d'argent commandez autre chose.");

    }
} 
else if(choix==4){
    console.log("merci de votre visite")
}
// Tout les autres cas
else {
    console.log("Je n'ai pas compris veuillez réessayer");
}
}