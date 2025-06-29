import React, { useContext } from 'react';
import './style/Product.css';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const {cart,vaciarCarrito,borrarProducto,handleAddToCart, eliminarProducto, isCartOpen,  setCartOpen} = useContext(CartContext);

  const increase = (item) => {
    handleAddToCart({ ...item, cantidad: 1 });
  };

  const decrease = (item) => {
    if (item.cantidad > 1) {
      borrarProducto(item);
    }
  };

  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className={`cart-drawer ${isCartOpen  ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Carrito de Compras</h2>
        <button onClick={() => setCartOpen(false)} className="close-button">✕</button>
      </div>
      <div className="cart-content">
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            <ul className="cart-item">
              {cart.map((item) => (
                <li key={item.id} style={{ color: "black" }}>
                  {item.nombre} - ${item.precio} c/u
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button onClick={() => decrease(item)}>-</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => increase(item)}>+</button>
                    <button onClick={() => eliminarProducto(item)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '1.1rem', color: 'black' }}>
              Total: ${total.toFixed(2)}
            </div>

            <button onClick={vaciarCarrito} style={{ marginTop: '10px' }}>
              Vaciar Carrito
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
