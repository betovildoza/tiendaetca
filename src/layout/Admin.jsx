import React, { useContext } from "react";
import FormularioProducto from "../components/FormularioProducto";
import './layoutMain.css'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import FormularioEdicion from "../components/FormularioEdicion";
import { AdminContext } from "../context/AdminContext";


const Admin = () => {
  const { setIsAuth } = useAuth()
  const { productos, loading, open, setOpen, openEditor, setOpenEditor, seleccionado, setSeleccionado, agregarProducto, actualizarProducto, eliminarProducto } = useContext(AdminContext)

  const navigate = useNavigate()




  return (
    <div className="layout-container">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <nav>
            <ul className="nav">
              <li className="navItem">
                <button className="navButton" onClick={() => {
                  setIsAuth(false);
                  navigate('/');
                  localStorage.removeItem('isAuth');
                }}>
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
                  <button className="editButton" onClick={() => {
                    setOpenEditor(true)
                    setSeleccionado(product)
                  }}>Editar</button>
                  <button className="deleteButton" onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
      <button className="btn-inicio" onClick={() => setOpen(true)}>Abrir panel agregar producto</button>
      {open && <FormularioProducto onAgregar={agregarProducto} onClose={() => setOpen(false)} />}

      {openEditor && (<FormularioEdicion productoSeleccionado={seleccionado} onActualizar={actualizarProducto} onClose={() => setOpenEditor(false)}/>)}

    </div>
  );
};

export default Admin;  