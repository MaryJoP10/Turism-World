import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../../styles/help.css';
import './mailer.css';
import Contact from '../../images/inicio.png';
import Sent from '../../images/sent.gif';

export const Mailer = () => {
  const [isSent, setIsSent] = useState(false); //Estado de enviado
  const navigate = useNavigate();
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_i9g7lvk', 'template_3c6487f', event.target, 'Vgdhp2i-N0K0anawO')
      .then((response) => {
        console.log(response);
        event.target.reset();
        setIsSent(true);

        const img = document.createElement('img');
        img.src = Sent;
        img.alt = 'Sent GIF';

        img.style.display = 'flex';
        img.style.justifyContent = 'center';
        img.style.position = 'absolute';
        img.style.marginTop = '10vh';
        img.style.top = '50vh';
        img.style.left = '50vw';
        img.style.transform = 'translate(-50%, -50%)';

        document.body.appendChild(img);

        setTimeout(() => {
          const form = document.querySelector('.contact-form-wrapper');
          form.style.transition = 'opacity 1s';
          form.style.opacity = '0';

          setTimeout(() => {
            document.body.removeChild(img);
            navigate('/');
          }, 900);
        }, 1000);
      })


      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <section id="contact">
        <div class="contact-box">
          <div class="contact-links">
            <img alt="" src={Contact} />
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