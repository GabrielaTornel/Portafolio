import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_0x2bycp',
        'template_dxcd03v',
        formRef.current,
        'TA5wuO_QhTioHEZ9o'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
      Recibire sus mensajes y responderé lo antes posible si me deja los datos  válidos :)
      </h5>
      <h2>Contáctame </h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>tornelgabriela@gmail.com</h5>
            <a href="Gabriela:tornelgabriela@gmail.com">Send a message</a>
          </article>
        </div>
        <form id="form" ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre completo"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Mensaje"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar mensaje
          </button>
          {message && <span> Gracias, responderé lo antes posible. :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
