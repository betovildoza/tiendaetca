import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = ({ titular, texto, boton, imagen }) => {
  return (
    <main className="container py-5">
      <div className="row align-items-center bg-dark text-light p-4 rounded shadow">
        {/* Texto a la izquierda */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h2 className="fw-bold mb-3">{titular}</h2>
          <p className="lead">{texto}</p>
          <button className="btn btn-success mt-3">{boton}</button>
        </div>

        {/* Imagen a la derecha */}
        <div className="col-md-6 text-center">
          <img
            src={imagen}
            alt="Imagen de portada"
            className="img-fluid rounded shadow"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
