import React from "react";
import "./styles/Home.css";
import "./styles/detalleproducot.css";
import "./styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="is-preload homepage">
      <header className="container" id="page-wrapper">
        <div id="header-wrapper">
          <header id="header" classname="container">

              {/* Logo */}
              <div id="logo">
                <h1>
                  <a href="home.html">
                    <img src="src/images/Logo_de_GameCloud.png" alt="Logo GameCloud" style={{ maxWidth: "150px" }}/>
                  </a>
                </h1>
              </div>
          </header>
          {/* Nav */}
          <nav id="nav">
								<ul>
									<li class="current"><a href="home.html">Home</a></li>
									<li><a href="productos.html">Productos</a></li>
									<li><a href="inicioSesion.html">Inicio Sesion</a></li>
									<li><a href="contacto.html">Contacto</a></li>
									<li><a href="blog.html">Blog</a></li>
								</ul>
					</nav>
        </div>
      </header>

      {/* Main Content */}
    <div className="img-fondo">
      <main className="wrapper">
        <div className="contenedor-flex">
          <div className="cajilla-box" style={{ minHeight: "400px" }}>
            <h1 className="text-center text-dark">
              <strong>Tienda De Juegos GameCloud</strong>
            </h1>
            <h3 className="text-center text-dark mt-3">
              Somos una tienda de juegos nacida en el año 2025, donde buscamos
              entregarte los mejores precios en videojuegos, con la mejor
              calidad, En Chile.
            </h3>
            <div className="d-flex justify-content-center mt-4">
              <a href="productos.html" className="btn btn-dark btn-lg">
                Ir a productos
              </a>
            </div>
          </div>

          {/* Video */}
          <div className="cajilla2-box" style={{ minHeight: "250px" }}>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                src="https://www.youtube.com/embed/6XGeJwsUP9c"
                title="Video Del Dia"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-center text-dark mt-3 fs-4">
              <strong>Video Del Dia</strong>
            </p>
          </div>
        </div>

        {/* Tarjetas de productos */}
        <div className="row gx-4 justify-content-center">
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
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
              <div className="card" style={{ width: "100%" }}>
                <img src={img} className="card-img-top" alt={title} />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>      
      {/* Footer */}
      <footer
        id="footer-wrapper"
        className="bg-light border-top border-dark py-4 mt-auto"
      >
        <div className="container">
          <div className="row text-dark">
            <div className="col-md-4 mb-3">
              <h3>Confiabilidad</h3>
              <p>
                Contamos con un sistema de reembolso, con un lapso de 3 días
                para su devolución, en caso de no recibir nada.
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <h3>Métodos de pago</h3>
              <div>
                <img
                  src="src/images/mercadopago.png"
                  alt="MercadoPago"
                  style={{ maxHeight: "50px", marginRight: "10px" }}
                />
                <img
                  src="src/images/visa.png"
                  alt="Visa"
                  style={{ maxHeight: "50px", marginRight: "10px" }}
                />
                <img
                  src="src/images/paypal.webp"
                  alt="Paypal"
                  style={{ maxHeight: "50px" }}
                />
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <h3>Contáctanos</h3>
              <ul className="list-inline mb-3">
                <li className="list-inline-item me-3">
                  <a href="#" className="text-dark">
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                </li>
                <li className="list-inline-item me-3">
                  <a href="#" className="text-dark">
                    <i className="fab fa-facebook-f"></i> Facebook
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-dark">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </li>
              </ul>
              <form>
                <div className="mb-3">
                  <label htmlFor="emails" className="form-label">
                    Correo
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emails"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailError" className="form-text text-danger"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

