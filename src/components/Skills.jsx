import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import { useEffect, useState } from "react";

function Skills() {
  const data = useGlobalState();
  const { idioma } = data.values;
  const lenguaje = data.values.lenguaje[idioma].skills;

  return (
    <article className="skills works ventana-option">
      <header className="ventana-option_header skills__header">
        <Link to={"/"}>X</Link>
      </header>
      <h1>{lenguaje.titulo}</h1>
      <p className="skills__parrafo">{lenguaje.introduccion}</p>
      <ul
        className="skills__lista"
        dangerouslySetInnerHTML={{ __html: lenguaje.items }}
      ></ul>
    </article>
  );
}

export default Skills;
