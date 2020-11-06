function pegarCor(value) {
    corTenis = value
    if (value == "Camo") {
        document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/Camo/defaultJanoski.webp"
        document.querySelector("#sola").src = "./src/images/tenis/stefanJanoski/Camo/solaJanoski.webp"
        document.querySelector("#parteCima").src = "./src/images/tenis/stefanJanoski/Camo/cimaJanoski.webp"
        document.querySelector("#lateral").src = "./src/images/tenis/stefanJanoski/Camo/lateralJanoski.webp"
        document.querySelector("#default").src = "./src/images/tenis/stefanJanoski/Camo/defaultJanoski.webp"
    } else if (value == "azul") {
        document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/stefanJanoskiAzul.jpg"
    } else if (value == "branco") {
        document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/stefanJanoskiBranco.jpg"
    } else if (value == "preto") {
        document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/Preto/stefanJanoski.jpg"
        document.querySelector("#sola").src = "./src/images/tenis/stefanJanoski/Preto/solaJanoski.png"
        document.querySelector("#parteCima").src = "./src/images/tenis/stefanJanoski/Preto/partecimaJanoski.png"
        document.querySelector("#lateral").src = "./src/images/tenis/stefanJanoski/Preto/partelateralJanoski.png"
        document.querySelector("#default").src = "./src/images/tenis/stefanJanoski/Preto/stefanJanoski.jpg"
    }
}

function alterarImagePrincipal(id) {

    if (id == "sola") {
        document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/Preto/solaJanoski.png"
    } else if (id == "parteCima") {
        document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/Preto/partecimaJanoski.png"
    } else if (id == "lateral") {
        document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/Preto/partelateralJanoski.png"
    } else {
        document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/Preto/stefanJanoski.jpg"
    }

    if (corTenis == "Camo") {
        if (id == "sola") {
            document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/Camo/solaJanoski.webp"
        } else if (id == "parteCima") {
            document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/Camo/cimaJanoski.webp"
        } else if (id == "lateral") {
            document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/Camo/lateralJanoski.webp"
        } else {
            document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/Camo/defaultJanoski.webp"
        }
    } else if (corTenis == "preto") {
        if (id == "sola") {
            document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/Preto/solaJanoski.png"
        } else if (id == "parteCima") {
            document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/Preto/partecimaJanoski.png"
        } else if (id == "lateral") {
            document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/Preto/partelateralJanoski.png"
        } else {
            document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/Preto/stefanJanoski.jpg"
        }
    }




}

// function alterarImagePrincipal(id){
//     if(id == "sola"){
//         document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/Preto/solaJanoski.png"
//     }else if(id == "parteCima"){
//         document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/Preto/partecimaJanoski.png"
//     }else if(id == "lateral"){
//         document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/Preto/partelateralJanoski.png"
//     }else{
//         document.querySelector("#exibirTenis").src = "./src/images/tenis/stefanJanoski/Preto/stefanJanoski.jpg"
//     }
// }