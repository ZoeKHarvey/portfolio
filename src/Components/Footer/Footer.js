import React from 'react';
import './Footer.scss';
import turing from '../../assets/turing-logo.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github-image.svg';

const Footer = () => {

  return(
    <div className="Footer">
      <a className="a" href="https://www.linkedin.com/in/zoe-kharvey/">
      <img className="footer-img" src={linkedin} />
      </a>
      <a className="a" href="https://github.com/ZoeKHarvey">
      <img className="footer-img footer-github" src={github} />
      </a>
      <a className="a" href="https://alumni.turing.io/alumni/zo%C3%AB-ketcham-harvey">
      <img className="footer-img footer-turing" src={turing} />
      </a>
    </div>
  )
}

export default Footer