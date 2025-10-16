import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getProduct, addToCart } from "./utils/siteFunctions";
import "./styles/main.css";
import "./styles/detalleproducto.css";

export default function DetalleProducto() {
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const index = params.get("index");
    if (index !== null) {
      const p = getProduct(Number(index));
      setProduct(p);
    }
  }, [location.search]);

  const handleAddToCart = () => {
    const params = new URLSearchParams(location.search);
    const index = params.get("index");
    if (index === null) return;
    const res = addToCart(Number(index));
    if (res.ok) {
      alert("Producto agregado al carrito. Total en carrito: " + res.length);
    } else {
      alert("No se pudo agregar el producto");
    }
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
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="cajilla2-box">
              <h5 id="titulo-principal">{product.nombre}</h5>
              <p id="comentario-principal">{product.comentario}</p>
              <strong>
                <p id="precio-principal">${product.precio.toLocaleString()}</p>
              </strong>
              <div style={{ marginTop: 20 }}>
                <button className="btn btn-primary" onClick={handleAddToCart}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}