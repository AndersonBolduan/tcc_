function leiaMais(){
    var traço = document.getElementById("traço");
    var maisTexto = document.getElementById("mais");
    var btnLeiaMais = document.getElementById("btnLeiaMais");

    if (traço.style.display === "none") {
        traço.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia Mais";    
    }else {
        traço.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Leia Menos";
    }
    
}