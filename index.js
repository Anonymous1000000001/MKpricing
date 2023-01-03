document.getElementById("submitButton").onclick = function(){

    let standard = 
    '<br>USD 650 for 30 minutes, USD 850 for 45 minutes, USD 900 for 60 minutes, and USD 225 for every 15 minutes after the first 60 minutes <br><br> 30 minutes = USD 650<br> 45 minutes = USD 850<br> 60 minutes = USD 900<br><br> For every 15 minutes after the first 60 minutes = USD 225<br>';
    let senior = 
    '<br>USD 800 for 30 minutes, USD 995 for 45 minutes, USD 1,195 for 60 minutes, and USD 280 for every 15 minutes after the first 60 minutes <br><br> 30 minutes = USD 800<br> 45 minutes = USD 995<br> 60 minutes = USD 1,195<br><br> For every 15 minutes after the first 60 minutes = USD 280<br>';
    let premium = 
    '<br>USD 900 for 30 minutes, USD 1,195 for 45 minutes, USD 1,395 for 60 minutes, and USD 350 for every 15 minutes after the first 60 minutes <br><br> 30 minutes = USD 900<br> 45 minutes = USD 1,195<br> 60 minutes = USD 1,395<br><br> For every 15 minutes after the first 60 minutes = USD 350<br>';
    let standardInCn = 
    '<br>USD 400 for 30 minutes, USD 550 for 60 minutes, and USD 140 for every 15 minutes after the first 60 minutes <br><br> 30 minutes = USD 400<br> 60 minutes = USD 550<br><br> For every 15 minutes after the first 60 minutes = USD 140<br>';
    let seniorInCn = 
    '<br>USD 545 for 30 minutes, USD 650 for 45 minutes, USD 750 for 60 minutes, and USD 190 for every 15 minutes after the first 60 minutes <br><br> 30 minutes = USD 545<br> 45 minutes = USD 650<br> 60 minutes = USD 750<br><br> For every 15 minutes after the first 60 minutes = USD 190<br>';
    let premiumInCn = 
    '<br>USD 630 for 30 minutes, USD 760 for 45 minutes, USD 875 for 60 minutes, and USD 220 for every 15 minutes after the first 60 minutes <br><br> 30 minutes = USD 630<br> 45 minutes = USD 760<br> 60 minutes = USD 875<br><br> For every 15 minutes after the first 60 minutes = USD 220<br>';
    let SRstandard1 =
    '<br>USD 1,350 for 60 minutes<br>'
    let SRstandard2 =
    '<br>USD 1,800 for 60 minutes<br>'
    let SRstandard3 =
    '<br>USD 2,250 for 60 minutes<br>'
    let SRstandard4 =
    '<br>USD 2,700 for 60 minutes<br>'
    let SRstandard5 =
    '<br>USD 3,150 for 60 minutes<br>'
    let SRsenior1 =
    '<br>USD 1,350 for 60 minutes<br>'
    let SRsenior2 =
    '<br>USD 1,800 for 60 minutes<br>'
    let SRsenior3 =
    '<br>USD 2,250 for 60 minutes<br>'
    let SRsenior4 =
    '<br>USD 2,700 for 60 minutes<br>'
    let SRsenior5 =
    '<br>USD 3,150 for 60 minutes<br>'
    let SRpremmium1 =
    '<br>USD 1,350 for 60 minutes<br>'
    let SRpremmium2 =
    '<br>USD 1,800 for 60 minutes<br>'
    let SRpremmium3 =
    '<br>USD 2,250 for 60 minutes<br>'
    let SRpremmium4 =
    '<br>USD 2,700 for 60 minutes<br>'
    let SRpremmium5 =
    '<br>USD 3,150 for 60 minutes<br>'
    
    if(document.getElementById("noneTick").checked){
        if(document.getElementById("standardTier").checked){
            document.getElementById("Label4").innerHTML = standard;
        }
        if(document.getElementById("seniorTier").checked){
            document.getElementById("Label4").innerHTML = senior;
        }
        if(document.getElementById("premiumTier").checked){
            document.getElementById("Label4").innerHTML = premium;
        }
    }
    if(document.getElementById(("indiaTick")).checked){

        if(document.getElementById("standardTier").checked){
            document.getElementById("Label4").innerHTML = standardInCn;
        }
        else if(document.getElementById("seniorTier").checked){
            document.getElementById("Label4").innerHTML = seniorInCn;
        }
        else if(document.getElementById("premiumTier").checked){
            document.getElementById("Label4").innerHTML = premiumInCn;
        }
    }
    if(document.getElementById("chinaTick").checked){

        if(document.getElementById("standardTier").checked){
            document.getElementById("Label4").innerHTML = standardInCn;
        }
        else if(document.getElementById("seniorTier").checked){
            document.getElementById("Label4").innerHTML = seniorInCn; 
        }
        else if(document.getElementById("premiumTier").checked){
            document.getElementById("Label4").innerHTML = premiumInCn;
        }
    }
    if(document.getElementById("SRstandardTier1").checked){
            document.getElementById("Label4").innerHTML = SRstandard1;
    }
    else if(document.getElementById("SRstandardTier2").checked){
            document.getElementById("Label4").innerHTML = SRstandard2;
    }
    else if(document.getElementById("SRstandardTier3").checked){
            document.getElementById("Label4").innerHTML = SRstandard3;
    }
    else if(document.getElementById("SRstandardTier4").checked){
            document.getElementById("Label4").innerHTML = SRstandard4;
    }
    else if(document.getElementById("SRstandardTier5").checked){
            document.getElementById("Label4").innerHTML = SRstandard5;
    }
    else if(document.getElementById("SRseniorTier1").checked){
            document.getElementById("Label4").innerHTML = SRsenior1;
    }
    else if(document.getElementById("SRseniorTier2").checked){
            document.getElementById("Label4").innerHTML = SRsenior2;
    }
    else if(document.getElementById("SRseniorTier3").checked){
            document.getElementById("Label4").innerHTML = SRsenior3;
    }
    else if(document.getElementById("SRseniorTier4").checked){
            document.getElementById("Label4").innerHTML = SRsenior4;
    }
    else if(document.getElementById("SRseniorTier5").checked){
            document.getElementById("Label4").innerHTML = SRsenior5;
    }
    else if(document.getElementById("SRpremiumTier1").checked){
            document.getElementById("Label4").innerHTML = SRpremmium1;
    }
    else if(document.getElementById("SRpremiumTier2").checked){
            document.getElementById("Label4").innerHTML = SRpremmium2;
    }
    else if(document.getElementById("SRpremiumTier3").checked){
            document.getElementById("Label4").innerHTML = SRpremmium3;
    }
    else if(document.getElementById("SRpremiumTier4").checked){
            document.getElementById("Label4").innerHTML = SRpremmium4;
    }
    else if(document.getElementById("SRpremiumTier5").checked){
            document.getElementById("Label4").innerHTML = SRpremmium5;
    }
    
// <input type="radio" id="SRstandardTier1" name="tierTick">
//     <label>Standard Tier with High-rate<br>(rate between USD 600 - USD 1,049)</label><br>
//     <input type="radio" id="SRstandardTier2" name="tierTick">
//     <label>Standard Tier with High-rate<br>(rate between USD 1,050 - USD 1,499)</label><br>
//     <input type="radio" id="SRstandardTier3" name="tierTick">
//     <label>Standard Tier with High-rate<br>(rate between USD 1,500 - USD 1,949)</label><br>
//     <input type="radio" id="SRstandardTier4" name="tierTick">
//     <label>Standard Tier with High-rate<br>(rate between USD 1,950 - USD 2,399)</label><br>
//     <input type="radio" id="SRstandardTier5" name="tierTick">
//     <label>Standard Tier with High-rate<br>(rate between USD 2,400 - USD 2,800)</label><br>
    
//     <input type="radio" id="SRseniorTier1" name="tierTick">
//     <label>Senior Tier with High-rate<br>(rate between USD 800 - USD 1,049)</label><br>
//     <input type="radio" id="SRseniorTier2" name="tierTick">
//     <label>Senior Tier with High-rate<br>(rate between USD 1,050 - USD 1,499)</label><br>
//     <input type="radio" id="SRseniorTier3" name="tierTick">
//     <label>Senior Tier with High-rate<br>(rate between USD 1,500 - USD 1,949)</label><br>
//     <input type="radio" id="SRseniorTier4" name="tierTick">
//     <label>Senior Tier with High-rate<br>(rate between USD 1,950 - USD 2,399)</label><br>
//     <input type="radio" id="SRseniorTier5" name="tierTick">
//     <label>Senior Tier with High-rate<br>(rate between USD 2,400 - USD 2,800)</label><br>

//     <input type="radio" id="SRpremiumTier" name="tierTick">
//     <label>Premium Tier with High-rate<br>(rate between USD 1,050 - USD 1,499)</label><br>
//     <input type="radio" id="SRpremiumTier2" name="tierTick">
//     <label>Premium Tier with High-rate<br>(rate between USD 1,050 - USD 1,499)</label><br>
//     <input type="radio" id="SRpremiumTier3" name="tierTick">
//     <label>Premium Tier with High-rate<br>(rate between USD 1,500 - USD 1,949)</label><br>
//     <input type="radio" id="SRpremiumTier4" name="tierTick">
//     <label>Premium Tier with High-rate<br>(rate between USD 1,950 - USD 2,399)</label><br>
//     <input type="radio" id="SRpremiumTier5" name="tierTick">
//     <label>Premium Tier with High-rate<br>(rate between USD 2,400 - USD 2,800)</label><br>
