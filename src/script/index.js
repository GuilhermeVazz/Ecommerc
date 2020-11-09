
function pegarId(id) {
let href = id
for(var i = 0; i < linksTenis.length; i++){
    if(href = linksTenis[i].nomeTenis){
        document.getElementById(href).href = linksTenis[i].linkDoTenis
        console.log(href)
    }
}

}



