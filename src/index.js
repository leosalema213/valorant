const carrosel = document.querySelectorAll('.img-carrosel')
const botao = document.querySelector('#btn-carrosel')
const tamanho = carrosel.length-1
let index = 0

// function to change the maps
botao.addEventListener('click',function(){
    index++
    carrosel[index]?.classList.add('selected')
    carrosel[index-1]?.classList.remove('selected')
    if(index > tamanho){
        index = 0
        carrosel[index]?.classList.add('selected')
    }
})
