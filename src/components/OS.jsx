import { useGlobalState } from "../context/GlobalState";
import {Link} from 'react-router-dom'
import papelera from "../assets/papelera.png"
import skill from "../assets/empleado.png"
import works from "../assets/maleta.png"
import contact from '../assets/sobre.png'
import about from '../assets/informacion.png'
import { useState } from "react";
export default function OS() {
  const data = useGlobalState();
  const {idioma,setIdioma} = data.values;
  const [reciclar, setReciclar] = useState("");
  const lenguaje = data.values.lenguaje[idioma].os;
  const cambiarIdioma = dato => {
    try {
      setIdioma(dato)
      localStorage.setItem("idioma",dato)
      
    } catch (error) {
      console.log("error en el guardado del idioma del local storage: " + error)
    }

  }
  return (
    <main className={"os " + reciclar}>
      <section className="options">
        <Link onClick={()=>{setReciclar("reciclar")}} className="icon-desktop">
          <img
            className="icon-desktop_img"
            src={papelera}
            alt=""
          />
          <p>{lenguaje.papelera}</p>
        </Link>
        <Link to={"/skills"} className="icon-desktop">
          <img className="icon-desktop_img" src={skill} alt="" />
          <p>{lenguaje.habilidades}</p>
        </Link>
        <Link to={"/works"} className="icon-desktop">
          <img className="icon-desktop_img" src={works} alt="" />
          <p>{lenguaje.trabajos}</p>
        </Link>
        <Link to={"/contact"} className="icon-desktop">
          <img className="icon-desktop_img" src={contact} alt="" />
          <p>{lenguaje.contacto}</p>
        </Link>
        <Link to={"/about"} className="icon-desktop">
          <img className="icon-desktop_img" src={about} alt="" />
          <p>{lenguaje.sobreMi}</p>
        </Link>
      </section>
      <div className="os__contenedor_lenguaje">
        <button onClick={()=>cambiarIdioma("es")}>Es</button>
        <p>/</p>
        <button onClick={()=>cambiarIdioma("en")}>En</button>
      </div>
    </main>
  );
}
