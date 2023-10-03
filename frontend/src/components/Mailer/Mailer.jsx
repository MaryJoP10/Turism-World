import React from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/help.css';
import './mailer.css';
import Contact from '../../images/inicio.png';

export const Mailer = () => {

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_i9g7lvk', 'template_3c6487f', event.target, 'Vgdhp2i-N0K0anawO')
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  return (
    <>
      <section id="contact">
        <div class="contact-box">
          <div class="contact-links">
             <img src={Contact}/>
          </div>
          <div class="contact-form-wrapper">
            <form onSubmit={sendEmail}>
              <h2>Estamos para ayudarte</h2>
              <div class="form-item">
                <input type="text" name="user_name" required />
                <label>Nombre</label>
              </div>
              <div class="form-item">
                <input type="text" name="user_email" required />
                <label>Email</label>
              </div>
              <div class="form-item">
                <textarea name="user_message" id="" cols="10" rows="5" required></textarea>
                <label>Mensaje</label>
              </div>
              <button>Enviar</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
export default Mailer;