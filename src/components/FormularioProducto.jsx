import React, { useState } from 'react';
import './style/Modal.css';

function FormularioProducto({ onAgregar, onClose }) {
  const [producto, setProducto] = useState({
    nombre: '',
    precio: '',
    descripcion: '',
  });
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!producto.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio.';
    if (!producto.precio || producto.precio <= 0) nuevosErrores.precio = 'El precio debe ser mayor a 0.';
    if (!producto.descripcion.trim() || producto.descripcion.length < 10) nuevosErrores.descripcion = 'La descripción debe tener al menos 10 caracteres.';
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;
    onAgregar(producto);
    setProducto({ nombre: '', precio: '', descripcion: '' });
    onClose(); 
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✕</button>

        <form className="modal-form-container" onSubmit={handleSubmit}>
          <h2>Agregar Producto</h2>

          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={producto.nombre}
              onChange={handleChange}
              required
            />
            {errores.nombre && <p>{errores.nombre}</p>}
          </div>

          <div>
            <label>Precio:</label>
            <input
              type="number"
              name="precio"
              value={producto.precio}
              onChange={handleChange}
              min="0"
              required
            />
            {errores.precio && <p>{errores.precio}</p>}
          </div>

          <div>
            <label>Descripción:</label>
            <textarea
              name="descripcion"
              value={producto.descripcion}
              onChange={handleChange}
              required
            />
            {errores.descripcion && <p>{errores.descripcion}</p>}
          </div>

          <button type="submit">Agregar Producto</button>
        </form>

      </div>
    </div>
  );
}

export default FormularioProducto;
