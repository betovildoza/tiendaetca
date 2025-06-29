//import React, { useState, useContext } from 'react';

import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom'
import './layoutMain.css'

const Login = () => {
  const { errors, email, setEmail, password, setPassword, handleSubmit } = useAuth();

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="formBasicEmail" className="form-label">
          Email
        </label>
        <input
          id="formBasicEmail"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`form-input ${errors.email ? 'form-input-error' : ''}`}
        />
        {errors.email && <div className="form-error">{errors.email}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="formBasicPassword" className="form-label">
          Contraseña
        </label>
        <input
          id="formBasicPassword"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`form-input ${errors.password ? 'form-input-error' : ''}`}
        />
        {errors.password && <div className="form-error">{errors.password}</div>}
      </div>

      <button type="submit" className="btn-submit">
        Enviar
      </button>
      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
        <Link to="/">← Volver al inicio</Link>
      </p>
    </form>
  );
};

export default Login;