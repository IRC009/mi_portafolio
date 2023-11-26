import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";

function Contact() {
  const data = useGlobalState();
  const idioma = data.values.idioma;
  const lenguaje = data.values.lenguaje[idioma].contacto;
  const enviarFormulario = () => {};
  return (
    <article className="contact ventana-option">
      <header className="ventana-option_header">
        <Link to={"/"}>X</Link>
      </header>
      <div className="ventana-option__container0">
        <div className="ventana-option__container1">
          <h2 className="ventana-option__container1__titulo">Isaac Rodas</h2>
          <h1 className="ventana-option__container1__tema">
            {lenguaje.container1__tema}
          </h1>
          <p className="ventana-option__container1__parrafo1">
            {lenguaje.container1__parrafo1}
          </p>
          <br />
          <p className="ventana-option__container1__parrafo2">
            {lenguaje.container1__parrafo2}
          </p>
           
        </div>
        <div className="ventana-option__container2">
          <form
            onSubmit={enviarFormulario}
            className="ventana-option__container2__form"
          >
            <input
              className="ventana-option__container2__nombre inputs_form_contact"
              type="text"
              placeholder={lenguaje.nombre}
              required
            />
            <input
              className="ventana-option__container2__email inputs_form_contact"
              type="email"
              placeholder={lenguaje.correo}
              required
            />
            <textarea
              className="ventana-option__container2__asunto inputs_form_contact"
              name="Asunto"
              cols="30"
              rows="10"
              placeholder={lenguaje.asunto}
              resizable="false"
              required
            ></textarea>
            <input
              className="ventana-option__container2__submit inputs_form_contact"
              type="submit"
              value={lenguaje.enviar}
            />
          </form>
        </div>
      </div>
    </article>
  );
}

export default Contact;
