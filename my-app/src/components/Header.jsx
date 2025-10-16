import React from "react";

export default function Header() {
  return (
    <div id="header-wrapper">
      <header id="header" className="container">
        {/* Logo */}
        <div id="logo">
          <h1>
            <a href="home.html">
              <img src="src/images/Logo_de_GameCloud.png" alt="Logo GameCloud" />
            </a>
          </h1>
        </div>

        {/* Nav */}
        <nav id="nav">
          <ul>
            <li className="current">
              <a href="App.jsx">Home</a>
            </li>
            <li>
              <a href="productos.html">Productos</a>
            </li>
            <li>
              <a href="inicioSesion.html">Inicio Sesion</a>
            </li>
            <li>
              <a href="contacto.html">Contacto</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}