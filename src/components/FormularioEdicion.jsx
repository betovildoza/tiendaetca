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
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content p-4 rounded" style={{ maxWidth: '600px', backgroundColor: 'white' }}>
        <button
          type="button"
          className="btn-close float-end"
          aria-label="Close"
          onClick={onClose}
        ></button>

        <form onSubmit={handleSubmit} noValidate>
          <h2 className="mb-4">Editar Producto</h2>

          <div className="mb-3">
            <label htmlFor="id" className="form-label">ID:</label>
            <input
              type="number"
              id="id"
              name="id"
              value={producto.id || ''}
              onChange={handleChange}
              className="form-control"
              readOnly
            />
          </div>

          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={producto.nombre || ''}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="precio" className="form-label">Precio:</label>
            <input
              type="number"
              id="precio"
              name="precio"
              value={producto.precio || ''}
              onChange={handleChange}
              className="form-control"
              required
              min="0"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="stock" className="form-label">Stock:</label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={producto.stock || ''}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="imagen" className="form-label">Imagen URL:</label>
            <input
              type="text"
              id="imagen"
              name="imagen"
              value={producto.imagen || ''}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="categoria" className="form-label">Categoría:</label>
            <input
              type="text"
              id="categoria"
              name="categoria"
              value={producto.categoria || ''}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="descripcion" className="form-label">Descripción:</label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={producto.descripcion || ''}
              onChange={handleChange}
              rows={4}
              placeholder="Descripción del producto"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Actualizar Producto
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormularioEdicion;
