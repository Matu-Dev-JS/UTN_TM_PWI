import React from 'react'
import {nombre as pepe, persona as person} from './funciones'
import { Button } from './components/Boton'
import Carta from './components/Carta'
/* 
Los archivos .jsx permiten la sintaxis JSX (html)
*/

/* 
function App() {

  return (
    <div>
      <h1>Hola</h1>
    </div>
  )
} 
*/

const App = () => {
    console.clear()
    console.log(person)
    let nombreUsuario = 'julieta'
    const obtenerRandom = () => 'dato random'
    return (
        <>
            <div>
                <h1>Hola {nombreUsuario}</h1>
                <Button 
                    texto={'boton 1'}
                />
                <Carta />
            </div>
            <div>
                <h1>Hola {obtenerRandom()}</h1>
                <Button 
                    texto={'agregar a favoritos'}
                />
                <Carta />
            </div>
        </>
    )
}

/* 
Las funciones que retornan HTML/JSX se llamaran como Componentes
los componentes es buena practica declararlos con mayuscula
Los componentes solo pueden retornar 1 elemento padre
*/

/* 
el fragmento (<></>) nos permite hacer una etiqueta padre que al instanciarse/invocarse el componente se desechara
*/




export default App
