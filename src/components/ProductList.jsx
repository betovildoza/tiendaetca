import React, { useContext, useState, useEffect, useRef } from 'react'
import Product from './Product'
import './style/Product.css';
import { CartContext } from '../context/CartContext';
import Pagination from 'react-bootstrap/Pagination'

const ProductList = () => {
  const { productosFiltrados, busqueda, setBusqueda } = useContext(CartContext)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const indexOfLast = currentPage * itemsPerPage
  const indexOfFirst = indexOfLast - itemsPerPage
  const currentProducts = productosFiltrados.slice(indexOfFirst, indexOfLast)
  const totalPages = Math.ceil(productosFiltrados.length / itemsPerPage)

  const galeriaRef = useRef(null);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (galeriaRef.current) {
      galeriaRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  return (
    <>
      <div className="busqueda-container">
        <input
          type='text'
          placeholder='Buscar productos...'
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      
      <div className='galeria' ref={galeriaRef}>
        {currentProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <div className="paginacion-container">
        <Pagination className="pagination">
          <Pagination.Prev
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          />
          {Array.from({ length: totalPages }, (_, i) => (
            <Pagination.Item
              key={i + 1}
              active={i + 1 === currentPage}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </>
  )
}

export default ProductList
