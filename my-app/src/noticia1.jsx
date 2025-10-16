import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/CssRegistro.css";
import "./styles/main.css";
import "./styles/CssBlog.css";
import noticia01 from "./images/noticia01.jpg";
export default function Noticia() {
  const navigate = useNavigate();

  return (
    <div className="img-fondo2">
      <section>
        <div className="blog-container">
          <div className="blog-card">
            <div className="blog-img">
              <img
                src={noticia01}
                alt="Imagen caso curioso"
                style={{ width: "100%", maxWidth: "487px", height: "auto" }}
              />
            </div>
            <div className="blog-content">
              <div className="blog-title">
                Colapso en tiendas digitales tras el lanzamiento de Hollow Knight: Silksong
              </div>
              <div className="blog-desc">
                <p>
                  El tan esperado lanzamiento de Hollow Knight: Silksong provocó un colapso temporal
                  en varias tiendas digitales alrededor del mundo. Plataformas como Steam, Nintendo
                  eShop y Xbox Store reportaron caídas parciales y problemas de acceso debido a la
                  masiva cantidad de usuarios intentando descargar el título de Team Cherry al mismo
                  tiempo.
                </p>
                <p>
                  La comunidad llevaba años aguardando la llegada del juego, lo que generó un nivel
                  de tráfico inusual. En redes sociales, miles de jugadores compartieron capturas de
                  errores y tiempos de espera, mientras que algunos servicios permanecieron
                  intermitentes por varias horas.
                </p>
                <p>
                  Las compañías responsables de las plataformas aseguraron que los servicios se
                  fueron restableciendo de manera progresiva y que la situación estuvo directamente
                  relacionada con la demanda histórica que generó Silksong.
                </p>
              </div>
              <button className="blog-btn" onClick={() => navigate("/blog")}>Volver al blog</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
