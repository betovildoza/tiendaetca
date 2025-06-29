import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'
import './layoutMain.css'
import { CartContext } from '../context/CartContext'

const GaleriaProductos = () => {
  const { carga } = useContext(CartContext)

  return (
    <>
      <Header />

      {carga ? (
        <img style={{ display: 'block', margin: '0 auto' }} src={loading} alt='loading' />
      ) : (


        <ProductList />

      )}

      <Cart />
      <Footer />
    </>
  );
};

export default GaleriaProductos;
