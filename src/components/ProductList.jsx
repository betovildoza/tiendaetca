import React from 'react'
import Product from './Product'
import './style/Product.css';


const ProductList = ({products, addToCart }) => {
  

  return (
    <>
      <div className='galeria'>
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </>
  )
}

export default ProductList
