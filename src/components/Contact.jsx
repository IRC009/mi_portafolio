import { Link } from "react-router-dom";

function Contact() {
  const enviarFormulario = () => {};
  return (
    <article className="contact ventana-option">
      <header className="ventana-option_header">
        <Link to={"/"}>X</Link>
      </header>
      <div className="ventana-option__container0">
        <div className="ventana-option__container1">
          <h2 className="ventana-option__container1__titulo">Isaac Rodas</h2>
          <h1 className="ventana-option__container1__tema">Agendamientos de asesorías</h1>
          <p className="ventana-option__container1__parrafo1">
            Bienvenido/a a nuestra sesión de asesoría de 1 hora, donde podemos
            revisar y mejorar juntos tu proyecto, ya sea web, móvil o Backend.
            Durante nuestra colaboración, abordaremos errores, introduciremos
            nuevas tecnologías o incluso escribiremos código en conjunto. La
            sesión será grabada para tu conveniencia. No dude en contactarme y
            acordaremos una fecha y hora para la reunión
          </p>
          <br />
          <p className="ventana-option__container1__parrafo2">
            El costo de esta asesoría es de 20 dólares y puedes realizar el pago
            a través de Stripe o Paypal.
          </p>
        </div>
        <div className="ventana-option__container2">
          <form onSubmit={enviarFormulario} className="ventana-option__container2__form">
            <input
              className="ventana-option__container2__nombre inputs_form_contact"
              type="text"
              placeholder="Nombre"
              required
            />
            <input
              className="ventana-option__container2__email inputs_form_contact"
              type="email"
              placeholder="Correo electrónico"
              required
            />
            <textarea
              className="ventana-option__container2__asunto inputs_form_contact"
              name="Asunto"
              cols="30"
              rows="10"
              placeholder="Asunto de la reunión"
              resizable="false"
              required
            ></textarea>
            <input
              className="ventana-option__container2__submit inputs_form_contact"
              type="submit"
              value="Enviar"
            />
          </form>
        </div>
      </div>
    </article>
  );
}

export default Contact;
