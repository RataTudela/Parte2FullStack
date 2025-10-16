import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contacto from "./contacto";
import InicioSesion from "./InicioSesion";

function App() {
  return (
    <Router> {/* Asegúrate de que Router envuelve todo */}
      <nav>
        <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/inicio-sesion">Inicio Sesión</Link></li>
        </ul>
      </nav>

      <Routes> {/* Define las rutas con el componente Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/inicio-sesion" element={<InicioSesion />} />
      </Routes>
    </Router>
  );
}

export default App;
