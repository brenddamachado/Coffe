document.addEventListener("DOMContentLoaded", function () {
    // Variáveis de seleção dos inputs
    const selMaquina = document.getElementById("selMaquina");
    const selCapsula = document.getElementById("selCapsula");
    const qtdMaq = document.getElementById("QtdMaq");
    const qtdCap = document.getElementById("QtdCap");
    const valorQtd = document.getElementById("TxtValUnit");
    const btnAddMaq = document.querySelector(".ColDir .mais");
    const btnAddCap = document.getElementById("btnAddCap");
    const listItem = document.getElementById("lisPedArea");
    const valorTotal = document.getElementById("TxtTotal");

    // Event listener para detectar mudanças nos inputs
    const inputs = [selMaquina, selCapsula, qtdMaq, qtdCap];
    inputs.forEach((input) => {
        input.addEventListener("change", calcularValores);
    });

    // Função para calcular os valores com base nas seleções
    function calcularValores() {
        if (selMaquina.value !== "-----" && qtdMaq.value >= 1) {
            selCapsula.value = "-----";
            valorQtd.value = selMaquina.value * qtdMaq.value;
        } else if (selCapsula.value !== "-----" && qtdCap.value >= 1) {
            selMaquina.value = "-----";
            valorQtd.value = selCapsula.value * qtdCap.value;
        }
    }

    // Event listener para adicionar itens à lista
    btnAddMaq.addEventListener("click", adicionarItemMaquina);
    btnAddCap.addEventListener("click", adicionarItemCapsula);

    // Função para adicionar itens à lista de compras (Máquinas)
    function adicionarItemMaquina() {
        if (selMaquina.value !== "-----" && qtdMaq.value >= 1) {
            const produto = selMaquina.options[selMaquina.selectedIndex].innerText;
            const preco = parseFloat(valorQtd.value);

            listItem.value += `Produto: ${produto} (Quantidade: ${qtdMaq.value}) - R$ ${preco.toFixed(2)}\n`;
            valorTotal.value = (parseFloat(valorTotal.value) + preco).toFixed(2);
            calcularSomaValores();
        } else {
            alert("Nenhum produto de máquina selecionado!");
        }
    }

    // Função para adicionar itens à lista de compras (Cápsulas)
    function adicionarItemCapsula() {
        if (selCapsula.value !== "-----" && qtdCap.value >= 1) {
            const produto = selCapsula.options[selCapsula.selectedIndex].innerText;
            const preco = parseFloat(valorQtd.value);

            listItem.value += `Produto: ${produto} (Quantidade: ${qtdCap.value}) - R$ ${preco.toFixed(2)}\n`;
            valorTotal.value = (parseFloat(valorTotal.value) + preco).toFixed(2);
            calcularSomaValores();
        } else {
            alert("Nenhum produto de cápsula selecionado!");
        }
    }

    // Função para calcular a soma dos valores no textarea
    function calcularSomaValores() {
        const textarea = document.getElementById("lisPedArea");
        const valorTotal = document.getElementById("TxtTotal");

        const linhas = textarea.value.split('\n');

        let soma = 0;

        for (let linha of linhas) {
            if (linha.trim() !== "") {
                const matches = linha.match(/R\$ (\d+\.\d+)/);
                if (matches) {
                    soma += parseFloat(matches[1]);
                }
            }
        }

        valorTotal.value = soma.toFixed(2);
    }
});
