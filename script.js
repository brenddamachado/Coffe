var optionsToDisable = document.querySelectorAll('option[value="saab"]');
optionsToDisable.forEach(function (option) {
    option.disabled = true;
});//deixar cinza


const botao = document.getElementById("abrirPagina");

botao.addEventListener("click", function() {
    // a outra página
    window.location.href = "index.html"; 
});
