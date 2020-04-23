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

      <select className="hiddenmenu"> 
    <option value="" selected="selected">Select</option> 
    
    <option value="/">Home</option> 
    <option value="/collections/all">Books</option> 
    <option value="/blogs/five-simple-steps-blog">Blog</option> 
    <option value="/pages/about-us">About Us</option> 
    <option value="/pages/support">Support</option> 
  </select> 
    </div>
  );
};

export default Header;

