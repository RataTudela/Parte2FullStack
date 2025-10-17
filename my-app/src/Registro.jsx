import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirigir
import "./styles/CssRegistro.css";  // Asegúrate de que esta hoja de estilo esté correcta
import "./styles/main.css";         // También importa el archivo de estilos principal de tu proyecto

export default function Registro() {
  // Inicializar navigate para redirigir después del registro
  const navigate = useNavigate();

  // Estados para manejar los valores del formulario y los errores
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [telefono, setTelefono] = useState("");
  const [region, setRegion] = useState("");
  const [comuna, setComuna] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validación simple del formulario
    let validationErrors = {};

    if (!nombre) validationErrors.nombre = "Este campo es obligatorio";
    if (!email) validationErrors.email = "Este campo es obligatorio";
    if (!contraseña) validationErrors.contraseña = "Este campo es obligatorio";
    if (contraseña !== confirmarContraseña) validationErrors.confirmarContraseña = "Las contraseñas no coinciden";
    if (!telefono) validationErrors.telefono = "Este campo es obligatorio";
    if (!region) validationErrors.region = "Este campo es obligatorio";
    if (!comuna) validationErrors.comuna = "Este campo es obligatorio";

    setErrors(validationErrors);

    // Si no hay errores, podemos proceder con el registro
    if (Object.keys(validationErrors).length === 0) {
      alert("Registro Exitoso");

      // Redirige al inicio de sesión después de un registro exitoso
      setTimeout(() => {
        navigate('/inicio-sesion');
      }, 1000); // Opcional: demora de 1 segundo para mostrar el mensaje de éxito
    }
  };

  return (
    <main className="img-fondo">
      <div className="login-box">
        <div>
          <img src="src/images/Logo_de_GameCloud.png" alt="Logo de GameCloud"/>
        </div>
        <h2>Registrarse</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre Completo</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            {errors.nombre && <div className="fore-text">{errors.nombre}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="fore-text">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="contraseña">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
            {errors.contraseña && <div className="fore-text">{errors.contraseña}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmarContraseña">Confirmar Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="confirmarContraseña"
              value={confirmarContraseña}
              onChange={(e) => setConfirmarContraseña(e.target.value)}
            />
            {errors.confirmarContraseña && <div className="fore-text">{errors.confirmarContraseña}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="number"
              className="form-control"
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            {errors.telefono && <div className="fore-text">{errors.telefono}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="region">Ingrese su Región</label>
            <input
              type="text"
              className="form-control"
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            />
            {errors.region && <div className="fore-text">{errors.region}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="comuna">Ingrese su Comuna</label>
            <input
              type="text"
              className="form-control"
              id="comuna"
              value={comuna}
              onChange={(e) => setComuna(e.target.value)}
            />
            {errors.comuna && <div className="fore-text">{errors.comuna}</div>}
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Acepto los términos y condiciones
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
            <div>
          <a onClick={() => navigate('/inicio-sesion')}style={{ cursor: 'pointer', textAlign: 'center', display: 'block', marginTop: '10px' }}>
            ¿Ya tienes cuenta? Inicia sesión aquí
          </a>
        </div>
        </form>
      </div>
    </main>
  );
}
