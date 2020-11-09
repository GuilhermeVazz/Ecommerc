function pegarCor(value) {
    corTenis = value
    for (var i = 0; i < listaTenis.length; i++) {
        if (corTenis == listaTenis[i].nome) {
            document.querySelector("#exibirTenis").src = listaTenis[i].exibirTenis
            document.querySelector("#sola").src = listaTenis[i].sola
            document.querySelector("#parteCima").src = listaTenis[i].parteCima
            document.querySelector("#lateral").src = listaTenis[i].parteLateral
            document.querySelector("#default").src = listaTenis[i].default
        }
    }
}

function alterarImagePrincipal(id) {
    for (var i = 0; i < listaTenis.length; i++) {
        if (corTenis == listaTenis[i].nome) {
            if (id == "sola") {
                document.querySelector("#exibirTenis").src = listaTenis[i].sola
            } else if (id == "parteCima") {
                document.querySelector("#exibirTenis").src = listaTenis[i].parteCima
            } else if (id == "lateral") {
                document.querySelector("#exibirTenis").src = listaTenis[i].parteLateral
            } else {
                document.querySelector("#exibirTenis").src = listaTenis[i].default
            }
        }
    }
}
