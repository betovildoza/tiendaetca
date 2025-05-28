import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'
import './layoutMain.css'
import { CartContext } from '../context/CartContext'

const GaleriaProductos = () => {
  const { carga, productos, isCartOpen, setCartOpen } = useContext(CartContext)
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas')

  const categorias = [...new Set(productos.map(p => p.categoria))];

  const handleCategoriaChange = (e) => {
    setCategoriaSeleccionada(e.target.value);
  };

  // Filtrar productos por categoría
  const productosFiltrados = categoriaSeleccionada === 'todas'
    ? productos
    : productos.filter(p => p.categoria === categoriaSeleccionada);

  return (
    <>
      <Header />

      {carga ? (
        <img style={{ display: 'block', margin: '0 auto' }} src={loading} alt='loading' />
      ) : (
        <>
          {/* Filtro por categoría */}
          <div className="filtro-categoria" style={{ textAlign: 'center', margin: '20px' }}>
            <label htmlFor="categoria">Filtrar por categoría: </label>
            <select id="categoria" onChange={handleCategoriaChange} value={categoriaSeleccionada}>
              <option value="todas">Todas</option>
              {categorias.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <ProductList products={productosFiltrados}  />
        </>
      )}

      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
      <Footer />
    </>
  );
};

export default GaleriaProductos;
