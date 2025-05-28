import React, { useState, useEffect } from "react";
import FormularioProducto from "../components/FormularioProducto";
import './layoutMain.css'

const Admin = () => {
    const [productos, setProductos] = useState([]);
    const [form, setForm] = useState({ id: null, name: "", price: "" });
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        fetch("https://681cdce3f74de1d219ae0bdb.mockapi.io/tiendatobe/productos")
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProductos(data);
                    setLoading(false);
                }, 2000);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(true);
                setLoading(false);
            });
    }, []);

    const agregarProducto = async (producto) =>{
        try{
            const respuesta = await fetch('https://681cdce3f74de1d219ae0bdb.mockapi.io/tiendatobe/productos',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
        })
        if(!respuesta.ok){
            throw new Error('Error al agregar producto')
        }
        const data = await respuesta.json()
        alert('Producto agregado correctamente')
        }catch(error){
            console.log(error.message);
            
        }
    }

    return (
         <div className="layout-container">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <nav>
            <ul className="nav">
              <li className="navItem">
                <button className="navButton">
                  <i className="fa-solid fa-right-from-bracket"></i>
                </button>
              </li>
              <li className="navItem">
                <a href="/admin">Admin</a>
              </li>
            </ul>
          </nav>
          <h1 className="layout-title">Panel Administrativo</h1>

          <ul className="product-list">
            {productos.map((product) => (
              <li key={product.id} className="product-card">
                <img src={product.imagen} alt={product.nombre} className="product-image" />
                <h3 className="product-name">{product.nombre}</h3>
                <p className="product-price">${product.precio}</p>
                <div className="product-actions">
                  <button className="editButton">Editar</button>
                  <button className="deleteButton">Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
      <button className="btn-inicio" onClick={() => setOpen(true)}>Abrir panel agregar producto</button>
      {open && <FormularioProducto onAgregar={agregarProducto} />}
    </div>
  );
};

export default Admin;