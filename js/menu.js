
function contador(dados){

    var dadosJSON = JSON.parse(dados);
    var total = dadosJSON.results;

    for(var i=0; i<(total.length-1);i++){
        var protoCidade=total[i];
        var cidade = protoCidade.city;


        var divBtn = document.querySelector(".dropdown-content");
        var btn = document.createElement("a");   // Create a <button> element

        btn.identity = i;
        btn.onclick = function() {
            showData(total[this.identity])
        }
        btn.innerHTML = cidade;                   // Insert text
        divBtn.appendChild(btn);               // Append <button> to <body>
   
    }

}
