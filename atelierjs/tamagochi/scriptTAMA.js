


function Tamago (){
let EN= 10;
var Faim= 0;
var Joie= 5;
var Vie=1 ; 


  boucle(EN,Faim,Joie,Vie)
}

function boucle(EN,Faim,Joie,Vie){   

while
(Vie==1) {
    
    
    function jouer() {      
        EN=EN-2;
        Faim=Faim+1;
        Joie=Joie+1;
        console.log("en" +EN + " Faim" + Faim +" Joie" + Joie);
        }
    
    function nourir(EN,Faim,Joie) {
        EN=EN+2;
        Faim=Faim-1;
        Joie=Joie-1;
        console.log("en" +EN + " Faim" + Faim +" Joie" + Joie)
        }

    function limite(EN,Faim,Joie,Vie) {
            if(Faim>5 ||  Joie < 0 ||EN < 0){
           console.log("Votre tamagochi est mort");
           Vie=0}
            else(Vie=1)
           }  
           
    function affichage(EN,Faim,Joie)
           {
           console.log("en" +EN + " Faim" + Faim +" Joie" + Joie)
           }
           

    choix = prompt("Que voulez vous faire : 1/jouer 2/ nourir")
    
    switch(choix){
        // Choix jouer
        
        case "1":
            
            jouer(EN,Faim,Joie);
            limite(EN,Faim,Joie,Vie)
            // affichage(EN,Faim,Joie);
                     
        break; 
        // Choix nourire
        case "2" :
            
            nourir(EN,Faim,Joie);
            // affichage(EN,Faim,Joie);
            limite(EN,Faim,Joie,Vie);
            
        break;      
      }   
}

}
 Tamago()