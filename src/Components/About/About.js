import React, {Component} from 'react';
import './About.scss';
import Footer from '../Footer/Footer';
import 'react-dropdown/style.css';
import Select from 'react-select';
import {technologies} from '../../util/technologies';
import Popup from "reactjs-popup";

class About extends Component {
  constructor() {
    super()
    this.state = {
      selectedOption: '',
      renderedList: [],
      details: '',
      currentTech: '',
    };
  };

  handleChange = (event) => {
    this.setState({selectedOption: event.target.value.toLowerCase()});
    this.renderSort(this.state.selectedOption)
  };

  renderSort = option => {
    let newT = technologies.filter(tech => tech.name.toLowerCase().includes(option))
    this.setState({renderedList:newT})
  }

  


  render() {
    const { selectedOption } = this.state;
    let mappedTechNames = technologies.map(tech => {
      return <>
        <li className="about-li" >
        {tech.name} 
        </li>
        {/* <span className="about-li-span">.</span> */}
      </> 
  });
    let mappedOptionTech = this.state.renderedList.map(tech => {
      return <>
        <li className="about-li">{tech.name}</li>
        </>
  });

  return(
    <div className="About">
      <section className="about-section-general">
        <p className="about-first about-p">Striving for <span>simple answers</span> to <span>complex issues</span>.</p>
        <p className="about-p">From managing high-paced bars to learning new tech stacks on the fly, 
        I've learned a lot about solving problems efficiently, cooperatively and under pressure while 
        constantly keeping the end-user's experience and needs in the forefront of each decision.</p>
      <hr/>   
      <p>With a deep understanding of the quirky world of JavaScript, I've enjoyed mastering frameworks and libraries to 
        that helps improve productivity of the developer along with performance of the product. From Node and Vue to Electron 
        and React Native, learning new technologies has been at the forefront of what drives me.
      </p>
    <div className="test">
      <Popup trigger={<button>See Full List of Tech Used</button>} position="right center">
    <div className="about-div-techlist">
         <ul className="about-ul">
         {mappedTechNames}
          </ul>
        </div>
  </Popup>
  </div>


  <Popup trigger={<button className="button"> Open Modal </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Modal Title </div>
        <div className="content">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            closeOnDocumentClick
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>




      </section>  
      <Footer />
    </div>
  )};
};

export default About;

// change mapped tech names to state to have search narrow, add submit button for search so frameworks can be filtered