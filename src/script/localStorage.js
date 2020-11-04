var stfJanoski = document.querySelector('.stfJanoski')
var ImprimirstfJanoski = document.querySelector('.ImprimirstfJanoski')

 function setLocalStorage(){
    stfJanoski.addEventListener('click', () => {
     localStorage.setItem('nome','Stefan Janoski')
     localStorage.setItem('preco','289.90')
   })
 }
 setLocalStorage()

 
       console.log(localStorage.getItem('nome'))
       console.log(localStorage.getItem('preco'))