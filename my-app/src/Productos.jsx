import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles/main.css";
import "./styles/CssRegistro.css";
import "./styles/CssProducto.css";

import pic01 from "./images/pic01.jpg";
import pic02 from "./images/pic02.jpg";
import pic03 from "./images/pic03.jpg";
import pic04 from "./images/pic04.jpg";
import pic05 from "./images/pic05.jpg";
import pic06 from "./images/pic06.jpg";
import blackOPs from "./images/blackOPs.jpg";
import pic2k26 from "./images/2K26.jpg";
import nomansky from "./images/nomansky.jpg";

export default function Productos() {
  const navigate = useNavigate();

  const products = [
    {
      id: 0,
      image: pic01,
      title: "Persona 3: Reload",
      description: "Persona 3 Reload es un remake del RPG de 2006 Persona 3.",
      price: "18.500"
    },
    {
      id: 1,
      image: pic02, 
      title: "God of War: Ragnarok",
      description: "Secuela de God Of War, donde volvemos a ser Kratos.",
      price: "25.500"
    },
    {
      id: 2,
      image: pic03,
      title: "SilkSong",
      description: "Secuela de Hollow Knight, Controlamos a Hornet.",
      price: "10.500"
    },
    {
      id: 3,
      image: pic04,
      title: "Lego: Batman",
      description: "Vuelves Como el Caballero de la noche en forma de Lego.",
      price: "5.500"
    },
    {
      id: 4,
      image: pic05,
      title: "Elden Ring", 
      description: "Nuevo Entrega de FromSoftware, Juego Tipo DarkSouls.",
      price: "30.000"
    },
    {
      id: 5,
      image: pic06,
      title: "Sekiro",
      description: "Es un Japón ficticio de finales del siglo XVI Reinado por la violencia.",
      price: "22.000"
    },
    {
      id: 6,
      image: blackOPs,
      title: "Call Of Duty BO2",
      description: "",
      price: "19.990"
    },
    {
      id: 7,
      image: pic2k26,
      title: "2K26",
      description: "2K26 se trata de una nueva edición del simulador de la NBA.",
      price: "40.000"
    },
    {
      id: 8,
      image: nomansky,
      title: "No Man's Sky",
      description: "Videojuego de exploración y supervivencia en el universo.",
      price: "15.000"
    }
  ];

  const agregar = (id) => {
    if(window.cartAPI && cartAPI.addToCart){
      window.cartAPI.addToCart(id);
      window.cartAPI.updateCounter();
      const cnt = document.getElementById('contador');
      if(cnt){
        cnt.classList.add('cart-added');
        setTimeout(()=>cnt.classList.remove('cart-added'),700);
      }
    }else{
      const raw = localStorage.getItem('cart');
      let c = raw ? JSON.parse(raw) : [];
      const ex = c.find(i=>i.id===id);
      if(ex) ex.qty += 1; else c.push({id:id, qty:1});
      localStorage.setItem('cart', JSON.stringify(c));
      const cnt = document.getElementById('contador');
      if(cnt) cnt.textContent = c.reduce((s,i)=>s+i.qty,0);
    }
  };

  useEffect(() => {
    if(window.cartAPI && window.cartAPI.updateCounter) {
      window.cartAPI.updateCounter();
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
              {products.map((product) => (
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