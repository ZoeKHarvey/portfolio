import React from 'react';
import './Footer.scss';
import turing from '../../assets/turing-logo.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github-image.svg';

const Footer = () => {

  return(
    <div className="Footer">
      <img className="footer-img" src={linkedin} />
      <img className="footer-img footer-github" src={github} />
      <img className="footer-img" src={turing} />
    </div>
  )
}

export default Footer