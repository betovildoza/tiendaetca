import React, { useState } from 'react';
import './style/Formulario.css'

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mail, setMail] = useState('');

  function manejarEnvio(evento) {
    evento.preventDefault();
    alert(`Formulario enviado por: ${nombre}`);
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
      />
      <input
        type="email"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        placeholder="Correo"
      />
      <input
        type="text"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        placeholder="Mensaje"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
