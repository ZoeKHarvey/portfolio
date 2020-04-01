import React from 'react';
import './Contact.scss';
import mail from '../../assets/mail.svg';
import phone from '../../assets/phone.svg';
import turing from '../../assets/turing-logo.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github-image.svg';

const Contact = () => {

  return(
    <div className="Contact">
      <h2>Contact</h2>
      <div className="contact-div-normal">
      <a className="contact-a" title="802-343-4999" href="tel:802-343-4999">
        <img className="contact-svg" src={phone} />
      </a>
      <a className="contact-a" href="mailto:zoekharvey@gmail.com">
        <img className="contact-svg" src={mail} />
      </a>
      </div>

    <div className="contact-div-second">
      <a className="contact-a" href="https://alumni.turing.io/alumni/zo%C3%AB-ketcham-harvey"><img className="contact-svg" src={turing} /></a>
    

      <a className="contact-a" href="https://github.com/ZoeKHarvey"><img className="contact-svg" src={github} /></a>


      <a className="contact-a" href="https://www.linkedin.com/in/zoe-kharvey/"><img className="contact-svg" src={linkedin} /></a>
    </div>


    </div>
  )
}

export default Contact;