import React, { useContext } from 'react';
import './style/Header.css';
import logo from '../assets/ETCAicon150.png';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {

  const {cartCount, isCartOpen, setCartOpen } = useContext(CartContext)
  

  return (
    <header className="header">
      <div className="header-top">
        <h2>ESCUELA DE TIRO CON ARCO</h2>
      </div>
      
      <nav>
        <ul>
          <img className='logo' src={logo} alt="logo ETCA" />
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/acercade'>Nosotros</Link></li>
          <li><Link to='/productos'>Galería de productos</Link></li>
          <li><Link to='/contacto'>Contacto</Link></li>
          <li className='cartNav'>
            <button className='btnCart' onClick={() => setCartOpen(true)}>
            [{cartCount}]<i className="fa-solid fa-cart-shopping"></i>
            </button>
            <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
