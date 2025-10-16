import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/main.css";
import "./styles/CssRegistro.css";
import "./styles/CssProducto.css";

export default function Productos() {
  const navigate = useNavigate();

  const productos = [
    { img: "src/images/pic01.jpg", title: "Persona 3: Reload", text: "Persona 3 Reload es un remake del RPG de 2006 Persona 3.", price: "$18.500" },
    { img: "src/images/pic02.jpg", title: "God of War: Ragnarok", text: "Secuela de God Of War, donde volvemos a ser Kratos.", price: "$25.500" },
    { img: "src/images/pic03.jpg", title: "SilkSong", text: "Secuela de Hollow Knight, Controlamos a Hornet.", price: "$10.500" },
    { img: "src/images/pic04.jpg", title: "Lego: Batman", text: "Vuelves Como el Caballero de la noche en forma de Lego.", price: "$5.500" },
    { img: "src/images/pic05.jpg", title: "Elden Ring", text: "Nuevo Entrega de FromSoftware, Juego Tipo DarkSouls.", price: "$30.000" },
    { img: "src/images/pic06.jpg", title: "Sekiro", text: "Es un Japón ficticio de finales del siglo XVI Reinado por la violencia.", price: "$22.000" },
    { img: "src/images/blackOPs.jpg", title: "Call Of Duty BO2", text: "Sumergete Como David Mason, en la busqueda de Menendez.", price: "$19.990" },
    { img: "src/images/2K26.jpg", title: "2K26", text: "2K26 se trata de una nueva edición del simulador de la NBA.", price: "$40.000" },
    { img: "src/images/nomansky.jpg", title: "No Man's Sky", text: "Videojuego de exploración y supervivencia en el universo.", price: "$15.000" },
  ];

  const agregar = (i) => {
    alert(`Agregar producto: ${productos[i].title}`);
  };

  return (
    <div id="page-wrapper" className="is-preload homepage">
      <div className="img-fondos">
        <div className="wrapper">
          <h1 className="titulo">Productos</h1>
          <h2 className="subtitulo">Los mejores juegos del mercado</h2>
          <div className="container">
            <div className="row">
              {productos.map((p, i) => (
                <div className="col-sm" key={i}>
                  <div className="card" style={{ width: "18rem" }}>
                    <a onClick={() => navigate(`/detalle-producto?index=${i}`)} style={{ cursor: "pointer" }}>
                      <img src={p.img} className="card-img-top" alt={p.title} />
                    </a>
                    <div className="card-body">
                      <h5 className="card-title">{p.title}</h5>
                      <p className="card-text">{p.text}</p>
                      <p><strong>{p.price}</strong></p>
                      <button type="button" className="btn btn-primary btn-sm" onClick={() => agregar(i)}>Comprar</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}