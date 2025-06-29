import React from 'react';
import { Navigate } from 'react-router-dom';

function RutaProtegida({ isAuthenticated, children, role, requeridRole }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (requeridRole && role !== requeridRole) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default RutaProtegida;
