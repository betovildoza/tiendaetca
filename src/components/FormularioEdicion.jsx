import React, { useState, useEffect } from 'react';

function FormularioEdicion({ productoSeleccionado, onActualizar, onClose }) {
  const [producto, setProducto] = useState(productoSeleccionado);

  useEffect(() => {
    setProducto(productoSeleccionado);
  }, [productoSeleccionado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onActualizar(producto);
    onClose();  // Cerramos modal al actualizar
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✕</button>

        <form className="modal-form-container" onSubmit={handleSubmit}>
          <h2>Editar Producto</h2>

          <div>
            <label>ID:</label>
            <input
              type="number"
              name="id"
              value={producto.id || ''}
              onChange={handleChange}
              readOnly
            />
          </div>

          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={producto.nombre || ''}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Precio:</label>
            <input
              type="number"
              name="precio"
              value={producto.precio || ''}
              onChange={handleChange}
              required
              min="0"
            />
          </div>

          <div>
            <label>Stock:</label>
            <input
              type="number"
              name="stock"
              value={producto.stock || ''}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Imagen URL:</label>
            <input
              type="text"
              name="imagen"
              value={producto.imagen || ''}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Categoria:</label>
            <input
              type="text"
              name="categoria"
              value={producto.categoria || ''}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Actualizar Producto</button>
        </form>
      </div>
    </div>
  );
}

export default FormularioEdicion;
