import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

import productos from "./utils/productosData";  // Asegúrate de que el archivo productosData.js esté importado correctamente

export default function Carrito() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]); // El carrito estará en el estado local
  const [total, setTotal] = useState(0);

  // Formatear los precios
  const formatCurrency = (n) => "$" + Number(n).toLocaleString("es-CL");

  // Leer el carrito del almacenamiento local (o API externa si existe)
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

  // Escribir el carrito en el almacenamiento local (o API externa si existe)
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

    const onStorage = (e) => {
      if (e.key === "cart") setCart(readCart());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // Calcular el total cuando el carrito cambia
  useEffect(() => {
    let acc = 0;
    cart.forEach((item) => {
      const prod = productos.find((p) => p.id === item.id);
      if (prod) acc += prod.price * item.qty;  // Multiplicamos el precio por la cantidad para calcular el total
    });
    setTotal(acc); // Actualizar el total con el cálculo correcto
  }, [cart]);

  // Eliminar un producto del carrito
  const removeFromCart = (id) => {
    if (window.cartAPI && typeof window.cartAPI.removeFromCart === "function") {
      window.cartAPI.removeFromCart(id);
      setCart(readCart());
      return;
    }
    const newCart = cart.filter((c) => c.id !== id);
    writeCart(newCart);
  };

  // Cambiar la cantidad de un producto en el carrito
  const changeQty = (id, qty) => {
    qty = Math.max(1, Number(qty) || 1);  // Asegurar que la cantidad sea siempre al menos 1
    if (window.cartAPI && typeof window.cartAPI.changeQty === "function") {
      window.cartAPI.changeQty(id, qty);
      setCart(readCart());
      return;
    }
    const newCart = cart.map((c) => (c.id === id ? { ...c, qty } : c));  // Actualizar la cantidad del producto en el carrito
    writeCart(newCart);
  };

  // Vaciar el carrito
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
                  const lineTotal = prod.price * qty;  // Precio por producto (multiplicado por qty)

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
                            objectFit: "cover",  // Asegurando que las imágenes no se deformen
                            marginRight: 12,
                          }}
                        />
                        <div>
                          <div style={{ fontWeight: 600 }}>{prod.title}</div>
                          <div style={{ color: "#666" }}>
                            {formatCurrency(prod.price)} {/* Mostrar el precio por unidad */}
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
                          onChange={(e) => changeQty(item.id, e.target.value)} // Actualizar la cantidad
                        />
                        <div
                          style={{
                            width: 120,
                            textAlign: "right",
                            marginRight: 12,
                          }}
                        >
                          {formatCurrency(lineTotal)} {/* Mostrar el total por línea (precio * cantidad) */}
                        </div>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeFromCart(item.id)} // Eliminar producto
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
                <span id="cart-total">{formatCurrency(total)}</span> {/* Total del carrito */}
              </h4>
              <div>
                <button
                  id="clear-cart"
                  className="btn btn-secondary"
                  onClick={clearCart} // Vaciar carrito
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
                onClick={() => navigate("/productos")} // Continuar comprando
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

