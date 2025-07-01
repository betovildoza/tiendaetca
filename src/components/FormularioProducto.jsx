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
    if (!producto.descripcion.trim() || producto.descripcion.length < 10)
      nuevosErrores.descripcion = 'La descripción debe tener al menos 10 caracteres.';
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
      <div className="modal-content p-4 rounded" style={{ maxWidth: '500px', backgroundColor: 'white' }}>
        <button
          type="button"
          className="btn-close float-end"
          aria-label="Close"
          onClick={onClose}
        ></button>

        <form onSubmit={handleSubmit} noValidate>
          <h2 className="mb-4">Agregar Producto</h2>

          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={producto.nombre}
              onChange={handleChange}
              className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
              required
            />
            {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="precio" className="form-label">
              Precio:
            </label>
            <input
              type="number"
              id="precio"
              name="precio"
              value={producto.precio}
              onChange={handleChange}
              min="0"
              className={`form-control ${errores.precio ? 'is-invalid' : ''}`}
              required
            />
            {errores.precio && <div className="invalid-feedback">{errores.precio}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">
              Descripción:
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={producto.descripcion}
              onChange={handleChange}
              className={`form-control ${errores.descripcion ? 'is-invalid' : ''}`}
              rows={3}
              required
            />
            {errores.descripcion && <div className="invalid-feedback">{errores.descripcion}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Agregar Producto
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormularioProducto;
