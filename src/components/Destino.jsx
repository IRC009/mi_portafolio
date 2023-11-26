import { Link } from "react-router-dom";
import LinkWeb from "../assets/link-pagina-web.png";
import LinkGit from "../assets/link-github.png";
import { useState } from "react";

function Destino({ web, git, active, desactivar }) {
  return (
    <div className={"destino " + active}>
      <div className="destino__container">
        <header className="ventana-option_header destino__header">
          <Link
            onClick={() => {
              desactivar("");
            }}
          >
            X
          </Link>
        </header>
        <div className="destino__containerImagenes">
          {web != "no disponible" && (
            <Link to={web} className="destinoImagen" target="_blank">
              <img src={LinkWeb} alt="Página Web" title="Link Página web" />
            </Link>
          )}

          {git != "no disponible" ? (
            <Link to={git} className="destinoImagen" target="_blank">
              <img src={LinkGit} alt="Link GitHub" title="Link GitHub" />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Destino;
