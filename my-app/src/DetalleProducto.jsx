import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/main.css";
import "./styles/detalleproducto.css";

const products = [
  { nombre: "Persona 3 Reload", comentario: "Juego JRPG, Para PC, XBOX y PS4/PS5, Famoso Remake de Shin Megami Tensei: Persona 3, lanzado en Japón simplemente como Persona 3, es un juego RPG de 2024, desarrollado y distribuido por Atlus.", precio: 18500, imagen: "src/images/pic01.jpg" },
  { nombre: "God of War Ragnarok", comentario: "God of War Ragnarok es un videojuego de acción y aventura que continúa la historia de Kratos y Atreus tras los eventos de God of War (2018). El juego narra cómo, al llegar el Fimbulvetr, el invierno previo al Ragnarok.", precio: 25500, imagen: "src/images/pic02.jpg" },
  { nombre: "SilkSong", comentario: "En Hollow Knight: Silksong, la princesa Hornet es cautivada y llevada al desconocido reino de Pharloom, gobernado por la seda y el canto. Para escapar, debe emprender una peregrinación mortal para ascender a la cima.", precio: 10500, imagen: "src/images/pic03.jpg" },
  { nombre: "Lego BatMan", comentario: "El juego está protagonizado por Batman y su mano derecha, Robin, luchando contra el crimen y sus villanos en Gotham City. Los más temidos y peligrosos enemigos de Batman han logrado escapar del Asilo Arkham, Detenlos.", precio: 5500, imagen: "src/images/pic04.jpg" },
  { nombre: "Elden Ring", comentario: "Elden Ring trata sobre un mundo llamado las Tierras Intermedias, donde el Círculo de Elden, la fuente de todo orden, ha sido destruido, fragmentándose su poder y llevando a los semidioses a una guerra, donde debes detenerlos.", precio: 30000, imagen: "src/images/pic05.jpg" },
  { nombre: "Sekiro", comentario: "Sekiro: Shadows Die Twice narra la historia de un shinobi desfigurado y dado por muerto, conocido como Lobo, que es encomendado a proteger a un joven señor de linaje misterioso, Embarcate en la aventura.", precio: 22000, imagen: "src/images/pic06.jpg" },
  { nombre: "Call Of Duty BO2", comentario: "Call of Duty: Black Ops 2 se desarrolla la epoca del 2025, unidos por el villano Raúl Menéndez, quien busca vengarse de Estados Unidos apoderándose de su tecnología militar para desatar un conflicto global.", precio: 19990, imagen: "src/images/blackOPs.jpg" },
  { nombre: "2K26", comentario: "NBA 2K26 se enfoca en un juego más realista y accesible, introduciendo la tecnología ProPLAY para mejorar la fluidez del movimiento de los jugadores, el modo MyTEAM ahora combina jugadores de la NBA y WNBA.", precio: 40000, imagen: "src/images/2K26.jpg" },
  { nombre: "No Man's Sky", comentario: "No Man's Sky es un videojuego de exploración y supervivencia en un universo generado proceduralmente de tamaño casi infinito, donde los jugadores pueden explorar planetas únicos, luchar contra criaturas y piratas.", precio: 15000, imagen: "src/images/nomansky.jpg" }
];

export default function DetalleProducto() {
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const index = params.get("index");
    if (index !== null && products[index]) {
      setProduct(products[index]);
    } else {
      setProduct(null);
    }
  }, [location.search]);

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (i) => {
    const nuevoCarrito = [...carrito, products[i]];
    setCarrito(nuevoCarrito);
    alert(`Producto agregado: ${products[i].nombre}. Total en carrito: ${nuevoCarrito.length}`);
  };

  if (!product) {
    return (
      <div id="page-wrapper" className="is-preload homepage">
        <div className="wrapper">
          <h2>Producto no encontrado</h2>
          <button onClick={() => navigate(-1)}>Volver</button>
        </div>
      </div>
    );
  }

  return (
    <div id="page-wrapper" className="is-preload homepage">
      <div className="img-fondo">
        <div className="wrapper">
          <div className="contenedor-flex">
            <div className="cajilla-box">
              <img
                id="imagen-principal"
                src={product.imagen}
                alt={product.nombre}
                style={{ maxWidth: "100%", height: 310}}
              />
            </div>
            <div className="cajilla2-box">
              <h5 id="titulo-principal">{product.nombre}</h5>
              <p id="comentario-principal">{product.comentario}</p>
              <strong>
                <p id="precio-principal">${product.precio.toLocaleString()}</p>
              </strong>
              <div style={{ marginTop: 20 }}>
                <button className="btn btn-primary" onClick={() => agregarAlCarrito(products.indexOf(product))}>
                  Agregar al carrito
                </button>
                <button
                  className="btn btn-secondary"
                  style={{ marginLeft: 10 }}
                  onClick={() => navigate(-1)}
                >
                  Volver
                </button>
              </div>
            </div>
          </div>

          <div className="container" style={{ marginTop: 40 }}>
            <h3>Productos relacionados</h3>
            <div className="row" id="productos-container">
              {products.map((p, i) => (
                <div className="col-sm mb-3" key={i}>
                  <div
                    className="card"
                    style={{ width: "18rem", cursor: "pointer" }}
                    onClick={() => navigate(`/detalle-producto?index=${i}`)}
                  >
                    <img src={p.imagen} className="card-img-top" alt={p.nombre} />
                    <div className="card-body">
                      <h5 className="card-title">{p.nombre}</h5>
                      <p className="card-text">{p.comentario}</p>
                      <p>
                        <strong>${p.precio.toLocaleString()}</strong>
                      </p>
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
