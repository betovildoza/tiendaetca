import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mail, setMail] = useState('');

  function manejarEnvio(evento) {
    evento.preventDefault();
    alert(`Formulario enviado por: ${nombre}`);
  }

  return (
    <form className="container my-4" onSubmit={manejarEnvio}>
      <div className="row g-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="email"
            className="form-control"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            placeholder="Correo"
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Mensaje"
            required
          />
        </div>
        <div className="col-12 text-end">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
}
