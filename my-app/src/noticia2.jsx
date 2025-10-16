import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/CssRegistro.css";
import "./styles/main.css";
import "./styles/CssBlog.css";
import noticia02 from "./images/noticia02.jpg";

export default function NoticiaMetalGear() {
  const navigate = useNavigate();

  return (
    <div className="img-fondo2">
      <section>
        <div className="blog-container">
          <div className="blog-card">
            <div className="blog-img">
              <img
                src={noticia02}
                alt="Imagen caso curioso"
                style={{ width: "100%", maxWidth: "487px", height: "auto" }}
              />
            </div>
            <div className="blog-content">
              <div className="blog-title">
                Polémica en torno a Metal Gear Solid Δ: Snake Eater por su uso del Unreal Engine 5
              </div>
              <div className="blog-desc">
                <p>
                  El remake Metal Gear Solid Δ: Snake Eater ha generado controversia en la comunidad de jugadores tras mostrarse nuevos avances desarrollados con Unreal Engine 5. Aunque la expectativa por revivir la clásica historia de Hideo Kojima es enorme, muchos fans criticaron la falta de fidelidad visual y técnica respecto al material original.
                </p>
                <p>
                  Uno de los puntos más discutidos fue el rendimiento: en las demostraciones se reportaron caídas notorias de fotogramas por segundo (FPS), incluso en escenas poco exigentes. Esto levantó dudas sobre la optimización del título y si realmente podrá aprovechar las capacidades del motor gráfico de Epic Games.
                </p>
                <p>
                  Además, jugadores señalaron que la iluminación, animaciones y texturas no reflejan el potencial de Unreal Engine 5, acusando a Konami de un “uso pobre” de la tecnología. Algunos llegaron a comparar las escenas oficiales con mods hechos por la comunidad, donde el resultado parecía más fluido y pulido.
                </p>
                <p>
                  Konami, por su parte, defendió que el objetivo del remake es mantener la esencia de la obra original y no necesariamente reinventar su estilo artístico. Sin embargo, las críticas siguen dividiendo a la audiencia entre quienes esperan mejoras sustanciales y quienes temen que el título no cumpla con las expectativas generadas.
                </p>
              </div>
              <button className="blog-btn" onClick={() => navigate("/blog")}>
                Volver al blog
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
