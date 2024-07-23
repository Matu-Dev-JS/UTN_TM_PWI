import React from 'react'
import { ProductList } from '../../Components'

import icono from '../../assets/vite.svg'
import { obtenerProductos } from '../../helpers/productos'
import { crearProducto } from '../../helpers/productos'
import { useGlobalContext } from '../../Context/GlobalContext'
import './Home.css'

const Home = () => {
  const {productos} = useGlobalContext()



  return (
    <div>
      <div className='imageContainer'>
        <img src="/imagenes/Juan.jpg" alt="" />
      </div>
      <h1>Elige nuestros productos <img src={icono} alt="" /></h1>
      <ProductList productos={productos}/>
    </div>
  )
}

export default Home