import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams, useNavigate } from 'react-router-dom'
import './layoutMain.css'
import { CartContext } from '../context/CartContext'


const DetallesProductos = () => {
    const { productos} = useContext(CartContext)

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    };

    const { id } = useParams()

    const product = productos.find(product => product.id === id)


    return (
        <>
            <Header/>

            <h2 className="titulo-detalle">Detalle del producto: {id}</h2>

            {product ? (
                <>
                    <h3 className="nombre-producto">{product.nombre}</h3>
                    <img className="imagen-producto" src={product.imagen} alt={product.nombre} />
                    <p className="descripcion-producto">Categoria: {product.categoria}</p>
                    <p className="descripcion-producto">Descripcion: {product.descripcion}</p>
                </>
            ) : (
                <h3>producto no encontrado...</h3>
            )}

            <button onClick={handleBack} className="btn-inicio">VOLVER</button>

            <Footer />
        </>
    )
}

export default DetallesProductos
