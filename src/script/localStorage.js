var stfJanoski = document.querySelector('#stfJanoski')
var airforce1 = document.querySelector('#airforce1')

function setLocalStorage() {
  stfJanoski.addEventListener('click', () => {
    localStorage.setItem('nome', 'Stefan Janoski')
    localStorage.setItem('preco', '289.90')
  })
}
setLocalStorage()

console.log(localStorage.getItem('nome'))
console.log(localStorage.getItem('preco'))