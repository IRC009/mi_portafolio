import { Link } from "react-router-dom";

function About() {
  return (
    <article className="about ventana-option">
      <header className="ventana-option_header">
        <Link to={"/"}>X</Link>
      </header>
      <h1 className="ventana-option_title">
        Hola, soy Isaac, un Desarrollador de software enfocado en la
        implementación tecnológica en las empresas.
      </h1>
      <p className="ventana-option_parrafo">
        Con el desarrollo de software y mis conocimientos en el sector
        empresarial, impulso la implementación tecnológica en las empresas,
        ofreciendo soluciones innovadoras y efectivas. Destaco en el trabajo en
        equipo y el liderazgo. Estoy aquí para ayudar a tu empresa a crecer y
        superar desafíos. ¡Gracias por visitar mi perfil! Espero con entusiasmo
        la oportunidad de conectarnos pronto.
      </p>
      <h2 className="ventana-option_subtitle">Estudios que avalan mis conocimientos</h2>
      <ul className="ventana-option_list">
        <li>Carrera Profesional en Administración de Empresas</li>
        <li>Tecnólogo en Análisis y Desarrollo de Software</li>
        <li>Curso de Marketing Digital</li>
      </ul>
    </article>
  );
}

export default About;
