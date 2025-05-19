import React from 'react';
import './style/Equipo.css';

const Equipo = ({ equipo }) => {
  return (
    <section className="equipoSeccion">
      {equipo.map((individuos, index) => (
        <div key={individuos.nombre} className="equipoTarjeta">
          <h3>{individuos.nombre}</h3>
          <p>{individuos.rol}</p>
          <img className="equipoImg" src={individuos.imagen} alt={`imagen ${index + 1}`} />
        </div>
      ))}
    </section>
  );
};

export default Equipo;
