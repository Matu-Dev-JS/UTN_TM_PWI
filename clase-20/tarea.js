const comprarBtnHTML = document.getElementById('comprar')
const contenedorContadorHTML = document.getElementById('elegir-cantidad')

const restarBtnHTML = document.getElementById('restar')
const contadorCantidadHTML = document.getElementById('numero')
const agregarBtnHTML = document.getElementById('agregar')



contenedorContadorHTML.style.display = 'none'

const handleBuy = () =>{
    comprarBtnHTML.style.display = 'none'
    contenedorContadorHTML.style.display = 'flex'
}

comprarBtnHTML.addEventListener('click', handleBuy)

const volver = ()=>{
    comprarBtnHTML.style.display = 'flex'
    contenedorContadorHTML.style.display = 'none'
}

const renderizarContador = () =>{
    contadorCantidadHTML.innerText = numero
}

const agregar = () =>{
    numero = numero + 1
    renderizarContador()
}

const restar = () =>{
    if (numero > 1){
    numero = numero - 1
    renderizarContador()
    }
    else if (numero === 1){
        volver()
    }
}

let numero = 1
renderizarContador()

agregarBtnHTML.addEventListener ('click', agregar)
restarBtnHTML.addEventListener('click', restar)