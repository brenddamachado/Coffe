var optionsToDisable = document.querySelectorAll('option[value="saab"]');
optionsToDisable.forEach(function (option) {
    option.disabled = true;
});// Desative as opções com valor "saab" e deixe cinza

// Obtenha uma referência ao botão
const botao = document.getElementById("abrirPagina");

// Adicione um ouvinte de evento de clique ao botão
botao.addEventListener("click", function() {
    // Redirecione para a outra página
    window.location.href = "index.html"; // Substitua "outra_pagina.html" pela URL da página que deseja abrir
});
