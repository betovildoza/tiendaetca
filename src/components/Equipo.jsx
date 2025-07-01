import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Equipo = ({ equipo }) => {
  return (
    <section className="container my-4">
      <div className="row justify-content-center">
        {equipo.map((individuos, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card text-center bg-dark text-white h-100 border-light shadow-sm">
              <div className="card-body d-flex flex-column align-items-center">
                <img
                  src={individuos.imagen}
                  alt={`Foto de ${individuos.nombre}`}
                  className="rounded-circle mb-3"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <h5 className="card-title">{individuos.nombre}</h5>
                <p className="card-text">{individuos.rol}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Equipo;
