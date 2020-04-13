import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';

const Header = () => {

  return(
    <div className="Header">
      <Link to='/'>
        <span className="header-logo"></span>
      </Link>
      <div className="Header2">
        <Link to='/projects'>
          <div className="header">
            <p className="header-tab">Projects & Portfolio</p>
          </div>
        </Link>
        <Link to='/about'>
          <div className="header">
            <p className="header-tab">About Me</p>
          </div>
        </Link>
        <Link to='/resume'>
          <div className="header">
            <p className="header-tab">Resume</p>
          </div>
        </Link>
        <Link to='/contact'>
          <div className="header">
            <p className="header-tab">Contact</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

