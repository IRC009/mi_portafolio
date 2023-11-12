import { useGlobalState } from "../context/GlobalState";
import {Link} from 'react-router-dom'
import papelera from "../assets/papelera.png"
import skill from "../assets/empleado.png"
import works from "../assets/maleta.png"
import contact from '../assets/sobre.png'
import about from '../assets/informacion.png'
export default function OS() {
  const data = useGlobalState();
  return (
    <main className="os">
      <section className="options">
        <Link to={"/recycle"} className="icon-desktop">
          <img
            className="icon-desktop_img"
            src={papelera}
            alt=""
          />
          <p>Recycle bin</p>
        </Link>
        <Link to={"/skills"} className="icon-desktop">
          <img className="icon-desktop_img" src={skill} alt="" />
          <p>Skills</p>
        </Link>
        <Link to={"/works"} className="icon-desktop">
          <img className="icon-desktop_img" src={works} alt="" />
          <p>Works</p>
        </Link>
        <Link to={"/contact"} className="icon-desktop">
          <img className="icon-desktop_img" src={contact} alt="" />
          <p>Contact</p>
        </Link>
        <Link to={"/about"} className="icon-desktop">
          <img className="icon-desktop_img" src={about} alt="" />
          <p>About</p>
        </Link>
      </section>
    </main>
  );
}
