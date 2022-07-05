function Enviar() {
  var nome = document.getElementById("nomeid");

  if (nome.value != "") {
    alert("Obrigado sr(a) " + nome.value + "  pela sua doação. O dinheiro será muito útil e bem usado.");

    window.open("index.html");
   
  }  
}
