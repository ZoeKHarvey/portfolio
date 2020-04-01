import React from 'react';
import './Contact.scss';
import mail from '../../assets/mail.svg';
import phone from '../../assets/phone.svg'

const Contact = () => {

  return(
    <div className="Contact">
      <a title="802-343-4999" href="tel:802-343-4999">
        <img src={phone} />
      </a>
      <a href="mailto:zoekharvey@gmail.com">
        <img src={mail} />
      </a>
    </div>
  )
}

export default Contact;