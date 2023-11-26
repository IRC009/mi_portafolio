import { Link } from "react-router-dom";
import {useGlobalState} from '../context/GlobalState'

function About() {
  const data = useGlobalState().values;
  const idioma = data.idioma;
  const lenguaje = data.lenguaje[idioma].about
  return (
    <article className="about ventana-option">
      <header className="ventana-option_header">
        <Link to={"/"}>X</Link>
      </header>
      <h1 className="ventana-option_title">
        {lenguaje.ventanaOption_title}
      </h1>
      <p className="ventana-option_parrafo">
        {lenguaje.ventanaOption_parrafo}
      </p>
      <h2 className="ventana-option_subtitle">{lenguaje.ventanaOption_subtitle}</h2>
      <ul className="ventana-option_list">
        <li>{lenguaje.ventanaOption_list[0]}</li>
        <li>{lenguaje.ventanaOption_list[1]}</li>
        <li>{lenguaje.ventanaOption_list[2]}</li>
      </ul>
    </article>
  );
}

export default About;
