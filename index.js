document.getElementById("submitButton").onclick = function(){

    let standardMK = 
    '<br>USD 650 for 30 minutes, USD 850 for 45 minutes, USD 900 for 60 minutes, and USD 225 for every 15 minutes after the first 60 minutes <br><br> 30 minutes = USD 650<br> 45 minutes = USD 850<br> 60 minutes = USD 900<br><br> For every 15 minutes after the first 60 minutes = USD 225<br>';
    let seniorMK = 
    '<br>USD 800 for 30 minutes, USD 995 for 45 minutes, USD 1,195 for 60 minutes, and USD 280 for every 15 minutes after the first 60 minutes <br><br> 30 minutes = USD 800<br> 45 minutes = USD 995<br> 60 minutes = USD 1,195<br><br> For every 15 minutes after the first 60 minutes = USD 280<br>';
    let premiumMK = 
    '<br>USD 900 for 30 minutes, USD 1,195 for 45 minutes, USD 1,395 for 60 minutes, and USD 350 for every 15 minutes after the first 60 minutes <br><br> 30 minutes = USD 900<br> 45 minutes = USD 1,195<br> 60 minutes = USD 1,395<br><br> For every 15 minutes after the first 60 minutes = USD 350<br>';
    let standardInCnMK = 
    '<br>USD 400 for 30 minutes, USD 550 for 60 minutes, and USD 140 for every 15 minutes after the first 60 minutes <br><br> 30 minutes = USD 400<br> 60 minutes = USD 550<br><br> For every 15 minutes after the first 60 minutes = USD 140<br>';
    let seniorInCnMK = 
    '<br>USD 545 for 30 minutes, USD 650 for 45 minutes, USD 750 for 60 minutes, and USD 190 for every 15 minutes after the first 60 minutes <br><br> 30 minutes = USD 545<br> 45 minutes = USD 650<br> 60 minutes = USD 750<br><br> For every 15 minutes after the first 60 minutes = USD 190<br>';
    let premiumInCnMK = 
    '<br>USD 630 for 30 minutes, USD 760 for 45 minutes, USD 875 for 60 minutes, and USD 220 for every 15 minutes after the first 60 minutes <br><br> 30 minutes = USD 630<br> 45 minutes = USD 760<br> 60 minutes = USD 875<br><br> For every 15 minutes after the first 60 minutes = USD 220<br>';

    if(document.getElementById("noneTick").checked){
        if(document.getElementById("standardTier").checked){
            document.getElementById("Label4").innerHTML = standardMK;
        }
        if(document.getElementById("seniorTier").checked){
            document.getElementById("Label4").innerHTML = seniorMK;
        }
        if(document.getElementById("premiumTier").checked){
            document.getElementById("Label4").innerHTML = premiumMK;
        }
    }
    if(document.getElementById("indiaTick").checked){

        if(document.getElementById("standardTier").checked){
            document.getElementById("Label4").innerHTML = standardInCnMK;
        }
        else if(document.getElementById("seniorTier").checked){
            document.getElementById("Label4").innerHTML = seniorInCnMK;
        }
        else if(document.getElementById("premiumTier").checked){
            document.getElementById("Label4").innerHTML = premiumInCnMK;
        }
    }
    if(document.getElementById(("chinaTick").checked){

        if(document.getElementById("standardTier").checked){
            document.getElementById("Label4").innerHTML = standardInCnMK;
        }
        else if(document.getElementById("seniorTier").checked){
            document.getElementById("Label4").innerHTML = seniorInCnMK; 
        }
        else if(document.getElementById("premiumTier").checked){
            document.getElementById("Label4").innerHTML = premiumInCnMK;
        }
    }
}


 
