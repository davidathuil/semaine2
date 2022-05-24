function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 10


var choix="non"
var i=10;

do {
 i=10 
 let entier = entierAleatoire(1, 10);
while(entier!=y ^ i==0)  {
var guess = prompt("chiffre");
var y = Number(guess);
 
    if(y>entier){console.log("au dessus")}
    else if(y<entier){console.log("en dessous")}
    else{console.log("gagné")}
    i--
    console.log(entier)    
} 
choix= prompt("voulez vous recommencer");

} while(choix == "oui")