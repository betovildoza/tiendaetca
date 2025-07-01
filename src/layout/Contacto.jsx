import React, { useContext } from 'react'
import Formulario from '../components/Formulario'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Cart from '../components/Cart'
import { CartContext } from '../context/CartContext'

const Contacto = () => {
  const { isCartOpen, setCartOpen } = useContext(CartContext)

  return (
    <>
      <Header />
      <div
        className="container py-5"
        style={{ backgroundColor: '#ffffff', minHeight: '70vh', color: '#212529' }}
      >
        <h2 className="text-center mb-4">Contacto</h2>
        <p className="text-center mb-5">
          Si tienes alguna consulta, no dudes en escribirnos a través del siguiente formulario.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <Formulario />
          </div>
        </div>
      </div>

      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
      <Footer />
    </>
  )
}

export default Contacto
