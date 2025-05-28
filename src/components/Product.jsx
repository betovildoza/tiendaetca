import React, { useContext } from 'react';
import './style/Product.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


const Product = ({ product}) => {

  const {handleAddToCart} = useContext(CartContext)

  return (
    <section className="product">
      <div className="fondoProducto">
        <img src={product.imagen} alt={product.nombre} className="imagenProducto" />
      </div>
      <h3 className="product-name">{product.nombre}</h3>
      <p className="product-price">${product.precio}</p>
      <p className="product-stock">Stock: {product.stock}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>

        <button onClick={() => handleAddToCart({ ...product, cantidad: 1 })}>
          Agregar
        </button>
        <Link to={`/productos/${product.id}`} style={{ textAlign: 'center', padding: '10px' }}>
          Ver detalles
        </Link>
      </div>
    </section>
  );
};

export default Product;
