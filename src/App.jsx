import React, { useContext } from "react";
import "./App.css";
import Home from "./layout/Home";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GaleriaProductos from "./layout/GaleriaProductos";
import AcercaDe from "./layout/AcercaDe";
import Contacto from "./layout/Contacto";
import DetallesProductos from "./layout/DetallesProductos";
import Login from "./layout/Login";
import Admin from "./layout/Admin"
import RutaProtegida from "./auth/RutaProtegida";
import { CartContext } from "./context/CartContext";
import { useAuth } from "./context/AuthContext";

function App() {
  
  const {isAuthenticated} = useAuth()

  return (
    <>
      
        <Routes>
          <Route path="/" element={ <Home/>}/>

          <Route path="/productos" element={<GaleriaProductos/>}/>

          <Route path="/productos/:id" element={<DetallesProductos/>}/>

          <Route path="/acercade" element={<AcercaDe />}/>

          <Route path="/contacto" element={<Contacto />}/>

          <Route path='/admin' element={<RutaProtegida isAuthenticated={isAuthenticated}> <Admin /> </RutaProtegida>}/>

          <Route path='/login' element={<Login />}/>

          <Route path="*" element={<NotFound />}/>
        </Routes>
      
    </>
  );
}

export default App;
