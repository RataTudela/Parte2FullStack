import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div id="header-wrapper">
      <header id="header" className="container">
        {/* Logo */}
        <div id="logo">
          <h1>
            <NavLink to="/">
              <img src="src/images/Logo_de_GameCloud.png" alt="Logo GameCloud" />
            </NavLink>
          </h1>
        </div>

        {/* Nav */}
        <nav id="nav">
          <ul>
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? "current" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/inicio-sesion" className={({ isActive }) => (isActive ? "current" : "")}>
                Inicio Sesión
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" className={({ isActive }) => (isActive ? "current" : "")}>
                Contacto
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({ isActive }) => (isActive ? "current" : "")}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/productos" className={({ isActive }) => (isActive ? "current" : "")}>
                Productos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
