import React from 'react';
import './style/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>ETCA</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestias assumenda reiciendis.</p>
        <h3>Envíos</h3>
        <p>Envíos exprés en CABA y GBA</p>
        <p>Envíos a toda la Argentina en 72hs</p>
      </div>

      <div className="footer-column">
        <h3>Navegación</h3>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/acercade">Nosotros</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>

      <div className="footer-column">
        

        <h3>Contacto</h3>
        <p>CABA, Argentina</p>
        <p><a href="mailto:mail@mail.com">mail@mail.com</a></p>
        <p>+54 9 11 2233 4455</p>

        <h3>Medios de pago</h3>
        <ul>
          <li>Visa</li>
          <li>Mastercard</li>
          <li>PayPal</li>
        </ul>
      </div>

      <div className="footer-copy">
        <p>&copy; 2025 - Alberto Vildoza. Mi primer proyecto.</p>
      </div>
    </footer>
  );
};

export default Footer;
