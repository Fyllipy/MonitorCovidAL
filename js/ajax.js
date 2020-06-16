

//function requestAjax(rec){

    var ourRequest = new XMLHttpRequest();

    ourRequest.open('GET', 'https://brasil.io/api/dataset/covid19/caso/data/?format=json&is_last=True&state=AL');
    ourRequest.onload = function (){
        var ans;
            ans = ourRequest.responseText;
            contador(ans);
            //console.log(ans);
            //var teste = ans[rec];

            var dadosJSON = JSON.parse(ans);
            var recState = dadosJSON.results;
        
        
            var div = document.querySelector(".dados");
        
            var numDeaths = 0;
            var numInfecteds = 0;
            for(var i = 0;i<recState.length;i++){
                numDeaths = numDeaths + recState[i].deaths;
                numInfecteds = numInfecteds + recState[i].confirmed;
            }
        
        
            var allDeaths = document.createElement("p");
            var allInfecteds = document.createElement("p");
            //var infecteds = document.createElement("p");
            //var info = document.createElement("p");
            //div.appendChild(cityName);
        
            
        
        
            //var cityText  = document.createTextNode("Nome da cidade: " + rec.city);
            //cityName.appendChild(cityText);
        
            var deathsText  = document.createTextNode("Numero de Mortos: " + numDeaths);
            allDeaths.appendChild(deathsText);
        
            var infectedsText  = document.createTextNode("Numero de Infectados: " + numInfecteds);
            allInfecteds.appendChild(infectedsText);
        
            div.appendChild(allDeaths);
            div.appendChild(allInfecteds);
        
            var requestDate = document.createElement("h3");
            var requestDateText  = document.createTextNode("Dados atualizados em: " + recState[0].date);
            requestDate.appendChild(requestDateText);
            div.appendChild(requestDateText);
    }
    ourRequest.send();
//}