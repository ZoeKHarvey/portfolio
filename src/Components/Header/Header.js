import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';

const Header = () => {


  return(
    <div className="Header">

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

      <div className="header">
        <p className="header-tab">Contact</p>
      </div>
  </div>
  )
}

export default Header;


{/* <div class="example">
<span class="hover hover-1">This underline goes left to right</span>
</div> */}