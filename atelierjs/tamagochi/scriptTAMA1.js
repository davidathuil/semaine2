
function Tamago (){
let EN= 10;
let Faim= 0;
let Joie= 5;
let Vie=1 ; 


  boucle(EN,Faim,Joie,Vie)
}
function limite(EN,Faim,Joie,Vie) {
        
    if(Faim>5 ||  Joie < 0 ||EN < 0){
    console.log("Votre tamagochi est mort");
    
    Vie=0;

    choiN = prompt("Que voulez vous faire : 1/rejouer 2/ Fin")
    
    switch(choiN){
        // Choix rejouer
        
        case "1":
            
            Tamago();
                                
        break; 
        // Choix fin
        case "2" :
            
            console.log('au revoir');
                        
        break;      
      }   

    }
    
       }  

function boucle(EN,Faim,Joie,Vie){   

    
    function jouer(EN,Faim,Joie) {      
        while (Vie==1) { 
        EN=EN-2;
        Faim=Faim+1;
        Joie=Joie+1;
        affichage(EN,Faim,Joie)
        limite(EN,Faim,Joie,Vie) 
        console.log(Vie)
        boucle(EN,Faim,Joie)   
        }
    }
    
    function nourir(EN,Faim,Joie) {
        EN=EN+2;
        Faim=Faim-1;
        Joie=Joie-1;
        affichage(EN,Faim,Joie)
        limite(EN,Faim,Joie,Vie) 
        boucle(EN,Faim,Joie)   
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
                                
        break; 
        // Choix nourire
        case "2" :
            
            nourir(EN,Faim,Joie);
                        
        break;      
      }   
    // }

}
 Tamago()