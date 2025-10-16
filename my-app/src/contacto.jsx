import React from 'react';

import "./styles/CssInicioSesion.css";
import "./styles/CssContactHtml.css";
import "./styles/main.css";


const Contacto = () => {

  const validarContacto = (e) => {
    e.preventDefault();
    alert('Formulario enviado');
  };

  return (
    <>
      <div id="page-wrapper">

        {/* Formulario */}
        <div className="img-fondo">
          <div className="login-box">
            <div>
              <img src="src/images/Logo_de_GameCloud.png" alt="Logo de GameCloud" />
            </div>
            <h2>Formulario Contacto</h2>
            <div>
              <form onSubmit={validarContacto}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre Completo</label>
                  <input type="text" className="form-control" id="nombre" />
                  <div id="nombreError" className="fore-text"></div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                  <div id="emailError" className="fore-text"></div>
                </div>
                <div className="form-group">
                  <label htmlFor="texto">Comentario</label>
                  <textarea className="form-control" id="texto" rows="3"></textarea>
                  <div id="textoError" className="fore-text"></div>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Enviar</label>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
                <div id="Enviado" className="fore-text"></div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Contacto;
