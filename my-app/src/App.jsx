import React from "react";
import "./styles/CssRegistro.css";
import "./styles/main.css";
import "./styles/detalleproducto.css";
import "./styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div id="page-wrapper" className="is-preload homepage">
      {/* Header */}
      <div id="header-wrapper">
        <header id="header" className="container">
          {/* Logo */}
          <div id="logo">
            <h1>
              <a href="home.html">
                <img
                  src="src/images/Logo_de_GameCloud.png"
                  alt="Logo GameCloud"
                />
              </a>
            </h1>
          </div>

          {/* Nav */}
          <nav id="nav">
            <ul>
              <li className="current">
                <a href="home.html">Home</a>
              </li>
              <li>
                <a href="productos.html">Productos</a>
              </li>
              <li>
                <a href="inicioSesion.html">Inicio Sesión</a>
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

      {/* Main content */}
      <div className="img-fondo">
        <div className="wrapper">
          <div className="contenedor-flex">
            <div className="cajilla-box">
              <h1>
                <strong>Tienda De Juegos GameCloud</strong>
              </h1>
              <h3>
                Somos una tienda de juegos nacida en el año 2025, donde buscamos
                entregarte los mejores precios en videojuegos, con la mejor
                calidad, En Chile.
              </h3>
              <a className="button" href="productos.html" role="button">
                Ir a productos
              </a>
            </div>

            <div className="cajilla2-box">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/6XGeJwsUP9c"
                  title="Video del día"
                  allowFullScreen
                ></iframe>
              </div>
              <p>
                <strong>Video Del Día</strong>
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="container">
            <div className="row">
              {[
                {
                  img: "src/images/pic01.jpg",
                  title: "Persona 3: Reload",
                  text: "Persona 3 Reload es un remake del RPG de 2006 Persona 3.",
                },
                {
                  img: "src/images/pic02.jpg",
                  title: "God of War: Ragnarok",
                  text: "Secuela de God Of War, donde volvemos a ser Kratos.",
                },
                {
                  img: "src/images/pic03.jpg",
                  title: "SilkSong",
                  text: "Secuela de Hollow Knight, Controlamos a Hornet.",
                },
                {
                  img: "src/images/pic04.jpg",
                  title: "Lego: Batman",
                  text: "Vuelves Como el Caballero de la noche en forma de Lego.",
                },
                {
                  img: "src/images/pic05.jpg",
                  title: "Elden Ring",
                  text: "Nuevo Entrega de FromSoftware, Juego Tipo DarkSouls.",
                },
                {
                  img: "src/images/pic06.jpg",
                  title: "Sekiro",
                  text: "Es un Japón ficticio de finales del siglo XVI Reinado por la violencia.",
                },
              ].map(({ img, title, text }, i) => (
                <div className="col-sm" key={i}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={img} className="card-img-top" alt={title} />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div id="footer-wrapper">
        <footer id="footer" className="container">
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <section className="widget links">
                    <h3>Confiabilidad</h3>
                    <p>
                      Contamos con un sistema de reembolso, con un lapso de 3
                      días para su devolución, en caso de no recibir nada.
                    </p>
                  </section>
                </div>

                <div className="col-sm">
                  <section className="widget links">
                    <h3>Métodos de pago</h3>
                    <ul className="style2">
                      <li>
                        <img
                          src="src/images/mercadopago.png"
                          alt="MercadoPago"
                        />
                        <img src="src/images/visa.png" alt="Visa" />
                        <img src="src/images/paypal.webp" alt="Paypal" />
                      </li>
                    </ul>
                  </section>
                </div>

                <div className="col-sm">
                  <section className="widget contact last">
                    <h3>Contáctanos</h3>
                    <ul>
                      <li>
                        <a href="#" className="icon brands fa-twitter">
                          <span className="label">Twitter</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icon brands fa-facebook-f">
                          <span className="label">Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icon brands fa-instagram">
                          <span className="label">Instagram</span>
                        </a>
                      </li>
                    </ul>
                    <div className="form-group">
                      <label htmlFor="emails">Correo</label>
                      <input
                        type="email"
                        className="form-control"
                        id="emails"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailError" className="fore-text"></div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
