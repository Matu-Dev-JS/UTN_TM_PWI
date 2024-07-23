import React from 'react'
import { ProductList } from '../../Components'

import icono from '../../assets/vite.svg'
import { obtenerProductos } from '../../helpers/productos'
import { crearProducto } from '../../helpers/productos'
import { useGlobalContext } from '../../Context/GlobalContext'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  const {productos} = useGlobalContext()
  const user = JSON.parse(localStorage.getItem('user'))


  return (
    <div>
      {user.role === 'admin' && <Link>Crear producto</Link>}
      <div className='imageContainer'>
        <img src="/imagenes/Juan.jpg" alt="" />
      </div>
      <h1>Elige nuestros productos <img src={icono} alt="" /></h1>
      <ProductList productos={productos}/>
    </div>
  )
}

export default Home