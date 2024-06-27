import React from 'react'
import Button from './Components/Button'
import Layout from './Components/Layout'

function App() {

  return (
    <ContactScreen/>
  )
}


const ContactScreen = () => {
  return (
    <Layout>
      <h2>Esta es la pagina de contacto</h2>
      <form action="">

      </form>
      <Button>
        Click <i class="bi bi-window-sidebar"></i>
      </Button>
    </Layout>
  )
}
const ProductsScreen = () => {
  return (
    <Layout>
      <h2>Esta es la pagina de productos</h2>
      <h3>Este es el subtitulo</h3>
      
    </Layout>
  )
}

export default App
