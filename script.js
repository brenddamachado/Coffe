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


