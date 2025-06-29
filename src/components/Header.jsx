import React, { useContext } from 'react';
import './style/Header.css';
import logo from '../assets/ETCAicon150.png';
import Cart from './Cart';
import { NavLink } from 'react-router-dom';
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
          <li><NavLink to='/' className='link'>Inicio</NavLink></li>
          <li><NavLink to='/acercade' className='link'>Nosotros</NavLink></li>
          <li><NavLink to='/productos' className='link'>Galería de productos</NavLink></li>
          <li><NavLink to='/contacto' className='link'>Contacto</NavLink></li>
          <li className='cartNav'>
            <button className='btnCart' onClick={() => setCartOpen(true)}>
            [{cartCount}]<i className="fa-solid fa-cart-shopping"></i>
            </button>
            <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)}/>
          </li>
          <li className='btnLogin'>
              <NavLink to='/login' className='link'><i className="fa-solid fa-right-to-bracket"></i></NavLink>
            </li>
            <li className='btnAdmin'>
              <NavLink to='/admin' className='link'><i className="fa-solid fa-user"></i></NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
