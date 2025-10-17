import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate de React Router
import { validarCorreoYContraseña } from './utils/validaciones'; // Importa la función de validación
import "./styles/CssInicioSesion.css";
import "./styles/main.css";

export default function InicioSesion() {
   // Estados para manejar los valores del formulario y los errores
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [emailError, setEmailError] = useState('');
   const [passwordError, setPasswordError] = useState('');

   // Inicializa el hook useNavigate para la navegación
   const navigate = useNavigate();

   // Validar formulario de inicio de sesión al hacer submit
   const handleSubmit = (event) => {
     // Llamamos a la función de validación importada
     const valid = validarCorreoYContraseña(
       event,
       email,
       password,
       setEmailError,
       setPasswordError
     );
 
     // Si la validación es exitosa, limpiamos los campos y mostramos el mensaje
     if (valid) {
       setEmail('');
       setPassword('');
     }
   };

   return (
     <>
       <div className="img-fondo">
         <div className="login-box">
           <div>
             <img src="src/images/Logo_de_GameCloud.png" alt="Logo de GameCloud" />
           </div>
           <h2>Iniciar Sesión</h2>
           <form onSubmit={handleSubmit}>
             <div className="form-group">
               <label htmlFor="email">Correo</label>
               <input
                 type="email"
                 className="form-control"
                 id="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)} // Asegúrate de actualizar el estado
               />
               {emailError && <div className="fore-text">{emailError}</div>}
             </div>

             <div className="form-group">
               <label htmlFor="contraseña">Contraseña</label>
               <input
                 type="password"
                 className="form-control"
                 id="contraseña"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)} // Asegúrate de actualizar el estado
               />
               {passwordError && <div className="fore-text">{passwordError}</div>}
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
               Iniciar Sesión
             </button>

             {/* Navegar al registro */}
             <div>
               <a
                 onClick={() => navigate('/Registro')}  // Aquí es donde se redirige a la página de Registro
                 style={{ cursor: 'pointer', textAlign: 'center', display: 'block', marginTop: '10px' }}
               >
                 ¿No tienes cuenta? Regístrate aquí
               </a>
             </div>
           </form>
         </div>
       </div>
     </>
   );
}

