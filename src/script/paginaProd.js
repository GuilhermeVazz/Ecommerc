function pegarCor(value) {

    if (value == "vermelho") {
        document.querySelector("#exibirTenis").src = "./src/images/stefanJanoskiVermelho.jpg"
    } else if (value == "azul") {
        document.querySelector("#exibirTenis").src = "./src/images/stefanJanoskiAzul.jpg"
    } else if (value == "branco") {
        document.querySelector("#exibirTenis").src = "./src/images/stefanJanoskiBranco.jpg"
    } else {
        document.querySelector("#exibirTenis").src = "./src/images/stefanJanoski.jpg"
    }
}