import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import { useEffect, useState } from "react";
import Destino from "../components/Destino";

function Works() {
  const data = useGlobalState();
  const { idioma } = data.values;
  const lenguaje = data.values.lenguaje[idioma].works;
  const [card, setCard] = useState(Object.values(lenguaje.proyectos));
  const [urlWeb, setUrlWeb] = useState("no disponible");
  const [urlGit, setUrlGit] = useState("no disponible");
  const [active, setActive] = useState("");

  useEffect(() => {
    setCard(Object.values(lenguaje.proyectos));
  }, [data]);

  const filtrar = (data) => {
    const datosFiltrados = Object.values(lenguaje.proyectos).filter((index) => {
      if (index.tecnologias[data] || data == "") return true;
    });
    setCard(datosFiltrados);
  };
  const mostrarDestinos = (git, web) => {
    setUrlGit(git);
    setUrlWeb(web);
    setActive("destinoActivo")
  };
  

  return (
    <article className="works ventana-option">
      <header className="ventana-option_header">
        <Link to={"/"}>X</Link>
      </header>
      <div className="contenedor-filtar">
        <h1>{lenguaje.h1}</h1>
        <select
          name="tecnologias"
          onChange={(e) => {
            filtrar(e.target.value);
          }}
        >
          <option value="">{lenguaje.option}</option>
          <option value="Node.js">Node</option>
          <option value="MongoDB">Mongo DB</option>
          <option value="React">React</option>
          <option value="C#">C#</option>
          <option value="Unity">Unity</option>
          <option value="Firebase">Firebase</option>
        </select>
      </div>
      <section className="contenedor-card">
        {Object.values(card).map((proyecto, index) => (
          <Link
            className="card-works"
            key={index}
            onClick={() => mostrarDestinos(proyecto.gitHub, proyecto.urlWeb)}
          >
            <img
              src={proyecto.img}
              alt="mundoCurioso"
              className="contenedor-card__img"
            />
            <h3 className="contenedor-card__h3">{proyecto.titulo}</h3>
            <p className="contenedor-card__p">{proyecto.parrafo}</p>
            <div className="contenedor-icons">
              {Object.values(proyecto.tecnologias).map((tecnologia, index) => (
                <img
                  key={index}
                  src={tecnologia.img}
                  alt={tecnologia.nombre}
                  title={tecnologia.nombre}
                  className="contenedor-icons__icon"
                />
              ))}
            </div>
          </Link>
        ))}
      </section>
      <Destino  web={urlWeb} git={urlGit}  active={active} desactivar={setActive}/>
    </article>
  );
}

export default Works;
