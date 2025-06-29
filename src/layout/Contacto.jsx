import React, { useContext } from 'react'
import Formulario from '../components/Formulario'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './layoutMain.css'
import Cart from '../components/Cart'
import { CartContext } from '../context/CartContext'

const Contacto = () => {
  const { isCartOpen, setCartOpen } = useContext(CartContext)
    
  return (
    <>
      <Header/>
      <div className="layout-container">
        <h2 className="layout-title">Contacto</h2>
        <p className="pContacto">
          Si tienes alguna consulta, no dudes en escribirnos a través del siguiente formulario.
        </p>

        <Formulario />

      </div>

      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)}/>
        
      <Footer />
    
    </>
  )
}

export default Contacto
