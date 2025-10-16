import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/CssInicioSesion.css";
import "./styles/main.css";
export default function InicioSesion() {
  const correoYcontraseña = (e) => {
    e.preventDefault();
    // Lógica para manejar inicio sesión
    alert("Función de inicio de sesión no implementada");
  };

  return (
    <>
      <Header />
      <div className="img-fondo">
        <div className="login-box">
          <div>
            <img src="src/images/Logo_de_GameCloud.png" alt="Logo de GameCloud" />
          </div>
          <h2>Iniciar Sesión</h2>
          <form onSubmit={correoYcontraseña}>
            <div className="form-group">
              <label htmlFor="email">Correo</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
              <div id="emailError" className="fore-text"></div>
            </div>
            <div className="form-group">
              <label htmlFor="contraseña">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="contraseña"
              />
              <div id="contraseñaError" className="fore-text"></div>
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Enviar
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Inicio
            </button>
            <div>
              <a href="registro.html">Registrarse</a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
