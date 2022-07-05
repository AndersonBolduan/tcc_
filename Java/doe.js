//Estado de aplicação - Valor arrecadado até o momento pelo nosso site
let numero = 450;
let number = 0;

// Alteradores de Estado - Função incluída no botão através do onclick
function Doe() {
    numero = numero + 10;
    number = number + 10;
    mostrarNaTela()
}

function Somar(){
    numero = numero + 15;
    number = number + 15;
    mostrarNaTela()
}

function Adicionar(){
    numero = numero + 20;
    number = number + 20;
    mostrarNaTela()
}

// Mostrar a alteração no HTML
function mostrarNaTela() {
    const valorArrecadado = document.getElementById("valorArrecadado");
    valorArrecadado.innerText = `R$ ${numero}`;
    const valorDoado = document.getElementById("valorDoado");
    valorDoado.innerText = `R$ ${number} `;
}

mostrarNaTela();