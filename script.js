var tabCafeteiras = new Array(5);
tabCafeteiras[0] = ["Mini ME",
    "DolceGustoMiniME",
    "Dolce Gusto",
    480];

tabCafeteiras[1] = ["Genio S Plus",
    "DolceGustoGenioSPlus",
    "Dolce Gusto",
    530];

tabCafeteiras[2] = ["Inissia",
    "NespressoInissia",
    "Nespresso",
    500];

tabCafeteiras[3] = ["LOV ",
    "TresCoracoesLOV",
    "Três Corações",
    400];

function ExibirCaf(tipo) {
    var jan = open("", tabCafeteiras[tipo][0],
        "location=no,status=no," +
        "width=290,height=390");

    with (jan.document) {
        write("<!DOCTYPE html>");
        write("<html><head><title>A Espuma era Lei</title>");
        write("<link rel='stylesheet' type='text/css'");
        write(" href='style.css'>");
        write("</head><body>");
        write("<h2>", tabCafeteiras[tipo][0], "</h2></div>");
        write("<p><img src='img/",
            tabCafeteiras[tipo][1], ".jpg' /></p></div>");
        write("<p>Cápsula: ", tabCafeteiras[tipo][2], "</p>");
        write("<p>Preço: R$ ");
        write(tabCafeteiras[tipo][3], ",00</p>");
        write("<input type='button' value='Fechar' ");
        write("onClick='window.close();'/>");
        write("</body></html>");
        close();
    }
}



var tabprod = [
    ["", "", "Vazio", 0],
    ["Espresso", 10, "CapDolceGusto_10_Espresso", 18],
    [" Intenso ", 10, "CapDolceGusto_10_Intenso", 19],
    ["Forza / Vibrante", 30, "CapTresCoracoes_30_ForzaVibrante", 44],
    ["Três Cor. Intenso ", 10, "CapTresCoracoesNespreso_10_Intenso", 20],
    ["Lor Forza<", 10, "CapLorNespreso_10_Forza", 21]];

function Mostra(ind) {
    var titu = document.getElementById("titDes");
    var foto = document.getElementById("imgDes");
    var quant = document.getElementById("quantDes");
    var prec = document.getElementById("prcDes");

    titu.innerHTML = tabprod[ind][0];
    foto.src = "img/" + tabprod[ind][2] + ".jpg";
    quant.innerHTML = "Quantidade: " + tabprod[ind][1];
    prec.innerHTML = "Preço: R$ <span class='preco'>" + tabprod[ind][3] + ",00</span";
}


// Função para atualizar o campo "Valor X QTD"
function atualizarValorXQTD() {
    var produtoSelecionado = document.getElementById("selMaquina").value || document.getElementById("selCapsula").value;
    var quantidade = parseInt(document.getElementById("QtdMaq").value || document.getElementById("QtdCap").value, 10);

    var valorUnitario = 0; // Defina os valores unitários dos produtos aqui

    if (produtoSelecionado === "Mini ME") {
        valorUnitario = 10.99;
    } else if (produtoSelecionado === "Genio S Plus") {
        valorUnitario = 12.99;
    } else if (produtoSelecionado === "Inissia") {
        valorUnitario = 9.99;
    } else if (produtoSelecionado === "Dolce Gusto Espresso") {
        valorUnitario = 5.99;
    } else if (produtoSelecionado === "Dolce Gusto Intenso") {
        valorUnitario = 6.99;
    } else if (produtoSelecionado === "Força / Vibrante") {
        valorUnitario = 4.99;
    } else if (produtoSelecionado === "Três Corações Intenso") {
        valorUnitario = 7.99;
    } else if (produtoSelecionado === "Lor Forza") {
        valorUnitario = 8.99;
    }

    var valorXQTD = (valorUnitario * quantidade).toFixed(2);
    document.getElementById("TxtValUnit").value = valorXQTD;
}

// Adicionar eventos de alteração para os selects e inputs de quantidade
document.getElementById("selMaquina").addEventListener("change", atualizarValorXQTD);
document.getElementById("selCapsula").addEventListener("change", function () {
    atualizarValorXQTD();
    document.getElementById("selMaquina").selectedIndex = 0; // Reinicializar a lista de máquinas
});
document.getElementById("QtdMaq").addEventListener("input", atualizarValorXQTD);
document.getElementById("QtdCap").addEventListener("input", atualizarValorXQTD);
