import React from 'react';
import './Header.scss';

const Header = () => {


  return(
    <div className="Header">
      <p className="header-tab">Projects & Portfolio</p>
      <p className="header-tab">About Me</p>
      <p className="header-tab">Resume</p>
      <p className="header-tab">Contact</p>
    </div>
  )
}

export default Header;