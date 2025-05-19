import React from 'react'
import { useNavigate } from 'react-router-dom'
import './layoutMain.css'

const Login = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="login-container">
      <h2>LOGIN</h2>

      <form className="login-form">
        <div className="form-group">
          <label htmlFor="usuario">Usuario</label>
          <input type="text" id="usuario" name="usuario" placeholder="Ingrese su usuario" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" />
        </div>

        <button type="submit" disabled className="btn-disabled">
          Iniciar Sesión
        </button>
      </form>

      <button onClick={handleBack} className="btn-inicio">
        VOLVER
      </button>
    </div>
  );
};

export default Login;
