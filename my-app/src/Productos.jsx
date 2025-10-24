import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles/main.css";
import "./styles/CssRegistro.css";
import "./styles/CssProducto.css";

import productos from "./utils/productosData";

export default function Productos() {
  const navigate = useNavigate();

  const agregar = (id) => {
    const raw = localStorage.getItem('cart');
    let c = raw ? JSON.parse(raw) : [];
    const ex = c.find(i=>i.id===id);
    if(ex) ex.qty += 1; else c.push({id:id, qty:1});
    localStorage.setItem('cart', JSON.stringify(c));
    const cnt = document.getElementById('contador');
    if(cnt) cnt.textContent = c.reduce((s,i)=>s+i.qty,0);
  };

  useEffect(() => {
    const cnt = document.getElementById('contador');
    if(cnt){
      const raw = localStorage.getItem('cart');
      let c = raw ? JSON.parse(raw) : [];
      cnt.textContent = c.reduce((s,i)=>s+i.qty,0);
    }
  }, []);

  return (
    <div className="is-preload homepage">
      <div className="img-fondos">
        <div className="wrapper">
          <h1 className="titulo">Productos</h1>
          <h2 className="subtitulo">Los mejores juegos del mercado</h2>
          <div className="container">
            <div className="row">
              {productos.map((product) => (
                <div className="col-sm" key={product.id}>
                  <div className="card" style={{ width: "18rem" }}>
                    <Link to={`/detalle-producto/${product.id}`}>
                      <img src={product.image} className="card-img-top" alt={product.title} />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <p><strong>${product.price}</strong></p>
                      <button 
                        type="button" 
                        className="btn btn-primary btn-sm" 
                        onClick={() => agregar(product.id)}
                      >
                        Comprar
                      </button>
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
