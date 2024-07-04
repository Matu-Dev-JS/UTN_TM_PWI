import React from 'react'
import ColorsContainer from './Components/ColorsContainer/ColorsContainer'
import { cartas_colores } from './data'

function App() {
  let condicion = false
  let estaRegistrado = true

  const userData = {
    isLogged: true,
    isAdmin: true,
    lang: 'en'
  }



  /* 
  Van a crear un componente llamado Navbar y van a pasarle por props el objeto userData
  Si isLogged es false entonces mostraran un button que diga 'login'
  Si isAdmin es true mostraran un <button></button> que diga 'crear producto'
  OPCIONAL:
  Si lang esta en 'en' todos los textos deben ser en ingles
  Si lang esta en 'es' todos los textos deben ser en español
  */
  const data = {
    EN:{
      title: 'name',
      price: 'Price: $100'
    },
    ES: {
      title: 'nombre',
      price: 'Precio: $100'
    }
  }
  const dataSelected = data['ES']

  return (
    <>
      <ColorsContainer cartas_colores={cartas_colores}/>
      {
        condicion
        ? <h2>Se cumplio</h2>
        : <h3>No se cumplio</h3>
      }

      {
        condicion && <h2>Se cumple la condicion</h2>
      }
      {
        estaRegistrado && <h2>Logueado</h2>
      }
      <h1>{condicion ? 'pepe' : 'juan'}</h1>

      <div>
        <h1>{dataSelected.title}</h1>
        <span>{dataSelected.price}</span>
      </div>
    </>
  )
}

export default App


/* const propiedades = {
  color: 'verde',
  descripcion: 'lorem'
}

//DESESTRUCTURACION de Objetos

const {color, descripcion} = propiedades

//const color = propiedades.color
//const descripcion = propiedades.descripcion

console.log(descripcion)

 //desestructuracion de arrays

const array = [1, 2]
const [valor1, valor2] = array

//const valor1 = array[0]
//const valor2 = array[1]


const miFuncion = ({nombre}) => {
    
    console.log('hola me llamo ' + nombre)
}

miFuncion({nombre: 'pepe'}) */