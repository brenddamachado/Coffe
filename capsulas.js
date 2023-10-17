var tabCaf = [
    ["", "", "Vazio", 0],
    ["Espresso", "CapDolceGusto_10_Espresso", 10, 18],
    ["Intenso ", "CapDolceGusto_10_Intenso", 10, 19],
    ["Forza/ Vibrante", "CapTresCoracoes_30_ForzaVibrante", 30, 44],
    ["Três Cor. Intenso ", "CapTresCoracoesNespreso_10_Intenso", 10, 20],
    ["Lor Forza", "CapLorNespreso_10_Forza", 10, 21]
];
function Mostra(ind) {
    var titu = document.getElementById("titDes");
    var foto = document.getElementById("imgDes");
    var prec = document.getElementById("qtdprcDes");

    titu.innerHTML = "<h3>" + tabCaf[ind][0] + "</h3>";
    foto.src = "img/" + tabCaf[ind][1] + ".jpg";
    prec.innerHTML = "<br/> <h5> QTD: " + tabCaf[ind][2] + "<br/>"+ "<br/> Preço: R$ <span class='preco'>" +
        tabCaf[ind][3] + ",00</span> </h5>";
}