import React, { useContext } from 'react';
import './style/Product.css';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';

const Cart = () => {
  const {
    cart,
    vaciarCarrito,
    borrarProducto,
    handleAddToCart,
    eliminarProducto,
    isCartOpen,
    setCartOpen,
  } = useContext(CartContext);

  const increase = (item) => {
    handleAddToCart({ ...item, cantidad: 1 });
  };

  const decrease = (item) => {
    if (item.cantidad > 1) {
      borrarProducto(item);
    }
  };

  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const finalizarCompra = () => {
    if (cart.length === 0) {
      Swal.fire('Carrito vacío', 'No hay productos para comprar.', 'info');
      return;
    }


    const productosCompradosHTML = cart
      .map((item) => {
        const precioNum = Number(item.precio);
        const subtotal = (precioNum * item.cantidad).toFixed(2);
        return `
      <li style="margin-bottom: 6px;">
        <strong>${item.nombre}</strong> - ${item.cantidad} x $${precioNum.toFixed(2)} = <strong>$${subtotal}</strong>
      </li>
    `;
      })
      .join('');

    Swal.fire({
      title: 'Confirma tu compra',
      html: `
        <p>Revisa tu resumen antes de finalizar:</p>
        <ul style="text-align: left; padding-left: 20px; max-height: 200px; overflow-y: auto;">
          ${productosCompradosHTML}
        </ul>
        <p style="font-weight: bold; margin-top: 10px;">Total: $${total.toFixed(2)}</p>
      `,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      width: '600px',
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCarrito();
        Swal.fire({
          icon: 'success',
          title: 'Compra finalizada',
          text: '¡La compra se ha realizado con éxito!',
          confirmButtonText: 'Aceptar',
        });
      }
    });
  };

  return (
    <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Carrito de Compras</h2>
        <button onClick={() => setCartOpen(false)} className="close-button">
          ✕
        </button>
      </div>
      <div className="cart-content">
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            <ul className="cart-item">
              {cart.map((item) => (
                <li key={item.id} style={{ color: 'black' }}>
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

            <div
              style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '1.1rem', color: 'black' }}
            >
              Total: ${total.toFixed(2)}
            </div>

            <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
              <button onClick={vaciarCarrito}>Vaciar Carrito</button>

              <button
                onClick={finalizarCompra}
                style={{ backgroundColor: '#4CAF50', color: 'white' }}
              >
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
