import React, {Component} from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import menuIcon from '../../assets/menu-24px.svg'

class Header extends Component {

  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }



render () {


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

<div>
        {/* <button onClick={this.showMenu}>
          Show menu
        </button> */}

        <img src={menuIcon} onClick={this.showMenu} />
        
        {
          this.state.showMenu
            ? (
              <div className="menu">
                <Link to="/projects">
                  <p>Projects</p>
                </Link>
                <Link to="/about">
                  <p>About</p>
                </Link>
                <Link to="/resume">
                  <p>Resume</p>
                </Link>
                <Link to="/contact">
                  <p>Contact</p>
                </Link>
                
              </div>
            )
            : (
              null
            )
        }
      </div>



    </div>
  );
};
}


export default Header;

