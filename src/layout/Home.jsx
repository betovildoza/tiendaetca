import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Main2 from '../components/Main2'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'
import loading from '../assets/loading.gif'
import NotFound from '../components/NotFound'
import { CartContext } from '../context/CartContext'
import tresArquerosBochin from '../assets/tresArquerosBochin.jpg'
//import arquera from "../assets/arquero002a.webp"
import pines from "../assets/pinesETCA.jpg"

const Home = () => {

  const { carga, error, isCartOpen, setCartOpen} = useContext(CartContext)


  if (error) {
    return <NotFound />
  }

  return (
    <>
      <Header/>

      <Main titular={'Contenido Principal'} 
            texto={'Bienvenido a nuestra aplicación. Aquí podrás descubrir productos únicos, explorar promociones especiales y disfrutar de una experiencia fácil e intuitiva. Comenzá tu recorrido ahora.'} 
            boton={'Más'}
            imagen={tresArquerosBochin}/>
      
      {
        carga ? <img style={{ display: 'block', margin: '0 auto' }} src={loading} alt='loading' /> :
          <ProductList />
      }

      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)}/>

      <Main2 titular={'Contenido Secundario'}
            texto={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nostrum libero delectus modi quas iste provident quod minus hic. Quae velit neque libero blanditiis amet quasi reprehenderit facilis, eius eveniet?'}
            boton={'Veritate'}
            imagen={pines}/>
      
      <Footer />
    </>
  )
}

export default Home
