import React from "react";
import "./style/NotFound.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-subtitle">Ups... Página no encontrada</p>
        <p className="notfound-text">
          Parece que llegaste a un lugar inesperado, no te preocupes. Volvé a la página anterior e intentá otra vez.
        </p>
        <button className="notfound-button" onClick={handleBack}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default NotFound;
