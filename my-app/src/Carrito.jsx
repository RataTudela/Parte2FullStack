import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

import pic01 from "./images/pic01.jpg";
import pic02 from "./images/pic02.jpg";
import pic03 from "./images/pic03.jpg";
import pic04 from "./images/pic04.jpg";
import pic05 from "./images/pic05.jpg";
import pic06 from "./images/pic06.jpg";
import blackOPs from "./images/blackOPs.jpg";
import pic2k26 from "./images/2K26.jpg";
import nomansky from "./images/nomansky.jpg";

export default function Carrito() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const productos = [
    { id: 0, title: "Persona 3: Reload", price: 18500, image: pic01 },
    { id: 1, title: "God of War: Ragnarok", price: 25500, image: pic02 },
    { id: 2, title: "SilkSong", price: 10500, image: pic03 },
    { id: 3, title: "Lego: Batman", price: 5500, image: pic04 },
    { id: 4, title: "Elden Ring", price: 30000, image: pic05 },
    { id: 5, title: "Sekiro", price: 22000, image: pic06 },
    { id: 6, title: "Call Of Duty BO2", price: 19990, image: blackOPs },
    { id: 7, title: "2K26", price: 40000, image: pic2k26 },
    { id: 8, title: "No Man's Sky", price: 15000, image: nomansky },
  ];

  const formatCurrency = (n) => "$" + Number(n).toLocaleString("es-CL");

  const readCart = () => {
    if (window.cartAPI && typeof window.cartAPI.getCart === "function") {
      return window.cartAPI.getCart();
    }
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  const writeCart = (newCart) => {
    if (window.cartAPI && typeof window.cartAPI.setCart === "function") {
      window.cartAPI.setCart(newCart);
    } else {
      localStorage.setItem("cart", JSON.stringify(newCart));
      const cnt = document.getElementById("contador");
      if (cnt) cnt.textContent = newCart.reduce((s, i) => s + (i.qty || 1), 0);
    }
    setCart(newCart);
    if (window.cartAPI && typeof window.cartAPI.updateCounter === "function") {
      window.cartAPI.updateCounter();
    }
  };

  useEffect(() => {
    setCart(readCart());

    // Optional: listen to storage events (other tabs)
    const onStorage = (e) => {
      if (e.key === "cart") setCart(readCart());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    let acc = 0;
    cart.forEach((item) => {
      const prod = productos.find((p) => p.id === item.id);
      if (prod) acc += prod.price * (item.qty || 1);
    });
    setTotal(acc);
  }, [cart]);

  const removeFromCart = (id) => {
    if (window.cartAPI && typeof window.cartAPI.removeFromCart === "function") {
      window.cartAPI.removeFromCart(id);
      setCart(readCart());
      return;
    }
    const newCart = cart.filter((c) => c.id !== id);
    writeCart(newCart);
  };

  const changeQty = (id, qty) => {
    qty = Math.max(1, Number(qty) || 1);
    if (window.cartAPI && typeof window.cartAPI.changeQty === "function") {
      window.cartAPI.changeQty(id, qty);
      setCart(readCart());
      return;
    }
    const newCart = cart.map((c) => (c.id === id ? { ...c, qty } : c));
    writeCart(newCart);
  };

  const clearCart = () => {
    if (window.cartAPI && typeof window.cartAPI.clearCart === "function") {
      window.cartAPI.clearCart();
      setCart([]);
      return;
    }
    writeCart([]);
  };

  return (
    <div id="page-wrapper" className="is-preload homepage">
      <div className="img-fondo">
        <div className="wrapper">
          <div className="container mt-4">
            <h1>Carrito</h1>

            <div id="cart-list" className="list-group mb-3">
              {cart.length === 0 ? (
                <div className="alert alert-info">El carrito está vacío.</div>
              ) : (
                cart.map((item) => {
                  const prod = productos.find((p) => p.id === item.id);
                  if (!prod) return null;
                  const qty = item.qty || 1;
                  const lineTotal = prod.price * qty;
                  return (
                    <div
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src={prod.image}
                          alt={prod.title}
                          style={{
                            width: 80,
                            height: 80,
                            objectFit: "cover",
                            marginRight: 12,
                          }}
                        />
                        <div>
                          <div style={{ fontWeight: 600 }}>{prod.title}</div>
                          <div style={{ color: "#666" }}>
                            {formatCurrency(prod.price)}
                          </div>
                        </div>
                      </div>

                      <div className="d-flex align-items-center">
                        <input
                          type="number"
                          className="form-control"
                          style={{ width: 80, marginRight: 12 }}
                          min={1}
                          value={qty}
                          onChange={(e) => changeQty(item.id, e.target.value)}
                        />
                        <div
                          style={{
                            width: 120,
                            textAlign: "right",
                            marginRight: 12,
                          }}
                        >
                          {formatCurrency(lineTotal)}
                        </div>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <h4>
                Total:{" "}
                <span id="cart-total">{formatCurrency(total)}</span>
              </h4>
              <div>
                <button
                  id="clear-cart"
                  className="btn btn-secondary"
                  onClick={clearCart}
                >
                  Vaciar carrito
                </button>
                <button
                  id="checkout"
                  className="btn btn-primary ml-2"
                  onClick={() => alert("Proceder al pago (demo)")}
                >
                  Pagar
                </button>
              </div>
            </div>

            <div style={{ marginTop: 16 }}>
              <button
                className="btn btn-link"
                onClick={() => navigate("/productos")}
              >
                Seguir comprando
              </button>
              <Link to="/" className="btn btn-link">
                Ir al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}