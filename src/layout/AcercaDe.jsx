import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './layoutMain.css'
import foto from '../assets/pinesETCA.jpg'
import Equipo from '../components/Equipo'
import Cart from '../components/Cart'
import { CartContext } from '../context/CartContext'


const AcercaDe = () => {

  const {isCartOpen, setCartOpen} = useContext(CartContext)


  const equipo = [
    { nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://i.pravatar.cc/150?img=21' },
    { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://i.pravatar.cc/400?img=8' },
    { nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://placebeard.it/640/480' },
    { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://loremflickr.com/cache/resized/defaultImage.small_320_240_nofilter.jpg' },
  ];

  return (
    <>
      <Header/>

      <main className="layout-container">
        <h2 className="layout-title">Acerca de Nosotros</h2>
        <Equipo equipo={equipo}/>
        <p className='pAcerca'>
          Bienvenido a nuestra tienda en línea. Nos especializamos en ofrecer productos de excelente calidad, con un
          enfoque en la satisfacción total de nuestros clientes. Nuestro compromiso es brindarte una experiencia de
          compra simple, segura y confiable.
        </p>

        <h2>Nuestra Misión</h2>
        <p className='pAcerca'>
          Nuestro objetivo es proporcionar productos de primera calidad mientras construimos relaciones duraderas
          basadas en la confianza y el respeto. Valoramos la innovación, la mejora continua y la atención personalizada.
        </p>

        <h2>Contacto</h2>
        <p className='pAcerca'>
          Si tienes preguntas o necesitas asistencia, puedes escribirnos a&nbsp;
          <a href="mailto:contacto@tienda.com">contacto@tienda.com</a> o comunicarte al&nbsp;
          <strong>+123 456 7890</strong>. Estamos aquí para ayudarte.
        </p>
        <img className='fotoAcercaDe' src={foto} alt="pines ETCA" />
      </main>
      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)}/>

      <Footer />
    </>
  )
}

export default AcercaDe
