import React, {Component} from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';

class Header extends Component {

  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  // onChange = (e) => {
  //   this.props.history.push(`/${e.target.value}`);
  // }



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

      {/* <select className="hiddenmenu"> 
   
    <option value="" selected="selected">Select</option> 
    
    <option value="/">Home</option> 
    <option>

      Projects

      </option> 
    <option>About</option> 
    <option>Resume</option> 
    <option>Contact</option> 
  </select>  */}

<div>
        <button onClick={this.showMenu}>
          Show menu
        </button>
        
        {
          this.state.showMenu
            ? (
              <div className="menu">
                <Link to="/projects">
                <button> Menu item 1 </button>
                </Link>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
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

