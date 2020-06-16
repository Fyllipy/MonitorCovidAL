
function showData(rec){

    var div = document.querySelector(".modal-body");
    var modalHeader = document.querySelector(".modal-header");
    var modalText = document.querySelector(".headerText");
    var modalFooter = document.querySelector(".modal-footer");

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    while (modalText.firstChild) {
        modalText.removeChild(modalText.firstChild);
    }

    while (modalFooter.firstChild) {
        modalFooter.removeChild(modalFooter.firstChild);
    }

    var cityName = document.createElement("h2");
    var cityText  = document.createTextNode(rec.city);
    cityName.appendChild(cityText);
    modalText.appendChild(cityName);
    modalHeader.appendChild(modalText);

    var footerText = document.createElement("h3");
    var footerDate  = document.createTextNode("Dados atualizados em: " + rec.date);
    footerText.appendChild(footerDate);
    modalFooter.appendChild(footerText);

    var deaths = document.createElement("p");
    var infecteds = document.createElement("p");
    var deathRate = document.createElement("p");
    
    div.appendChild(deaths);
    div.appendChild(infecteds);
    div.appendChild(deathRate);
    //document.body.appendChild(div);




    var deathsText  = document.createTextNode("Numero de Mortos: " + rec.deaths);
    deaths.appendChild(deathsText);

    var infectedsText  = document.createTextNode("Numero de Infectados: " + rec.confirmed);
    infecteds.appendChild(infectedsText);

    var deathRateText  = document.createTextNode("taxa de mortalidade: " + (rec.death_rate*100).toFixed(2) + "% (em relação ao numero de infectados)");
    deathRate.appendChild(deathRateText);



    // Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}









}


