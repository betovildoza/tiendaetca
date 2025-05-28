import React, { useContext } from 'react'
import Product from './Product'
import './style/Product.css';
import { CartContext } from '../context/CartContext';


const ProductList = () => {

  const {productos} = useContext(CartContext)

  return (
    <>
      <div className='galeria'>
        {productos.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default ProductList
