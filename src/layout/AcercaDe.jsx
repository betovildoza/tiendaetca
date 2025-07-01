import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Cart from '../components/Cart';
import { CartContext } from '../context/CartContext';
import foto from '../assets/pinesETCA.jpg';
import Equipo from '../components/Equipo';
import 'bootstrap/dist/css/bootstrap.min.css';

const AcercaDe = () => {
  const { isCartOpen, setCartOpen } = useContext(CartContext);

  const equipo = [
    { nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://i.pravatar.cc/150?img=21' },
    { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://i.pravatar.cc/400?img=8' },
    { nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://placebeard.it/640/480' },
    { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://loremflickr.com/cache/resized/defaultImage.small_320_240_nofilter.jpg' },
  ];

  return (
    <>
      <Header />

      <main className="container py-5" style={{ backgroundColor: '#fff', color: '#212529' }}>
        <h2 className="text-center mb-5">Acerca de Nosotros</h2>
        <Equipo equipo={equipo} />

        <section className="my-5">
          <h3>Bienvenida</h3>
          <p className="lead">
            Nos especializamos en ofrecer productos de excelente calidad, con un enfoque en la satisfacción total de nuestros clientes.
            Nuestro compromiso es brindarte una experiencia de compra simple, segura y confiable.
          </p>
        </section>

        <section className="my-5">
          <h3>Nuestra Misión</h3>
          <p className="lead">
            Nuestro objetivo es proporcionar productos de primera calidad mientras construimos relaciones duraderas basadas en la confianza y el respeto.
            Valoramos la innovación, la mejora continua y la atención personalizada.
          </p>
        </section>

        <section className="my-5">
          <h3>Contacto</h3>
          <p className="lead">
            Si tienes preguntas o necesitas asistencia, puedes escribirnos a&nbsp;
            <a href="mailto:contacto@tienda.com" className="text-primary fw-bold">contacto@tienda.com</a>
            &nbsp;o comunicarte al&nbsp;
            <strong>+123 456 7890</strong>.
          </p>
        </section>

        <div className="text-center mt-4">
          <img
            src={foto}
            alt="Pines ETCA"
            className="img-fluid rounded shadow"
            style={{ maxWidth: '500px' }}
          />
        </div>
      </main>

      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
      <Footer />
    </>
  );
};

export default AcercaDe;
