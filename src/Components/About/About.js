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
  
    let mappedTechNames = technologies.map(tech => {
      return <>
        <li className="about-li" >
        {tech.name} 
        </li>
        {/* <span className="about-li-span">.</span> */}
      </> 
  });

  return(
    <div className="About">
      <section className="about-section-general">
        <p className="about-first">Striving for <span>creative answers</span> to <span>complex issues</span>.</p>
        <p>From managing high-paced bars to learning new tech stacks on the fly, 
        I've conquered solving problems efficiently, cooperatively, and under pressure.
        While keeping the end-user's experience and needs in the forefront of each decision, I've enjoyed delivering
        products within strict limitations without sacrificing its quality.</p>
      <hr/>   
     
      <p>With a deep understanding of the quirky world of JavaScript, I've enjoyed mastering frameworks and libraries that
        help improve developer productivity as well as product performance. From Electron to React Native,
        learning new technologies has been at the forefront of what drives me.
      </p>
      <Popup trigger={<button className="popup-button">Tech Used</button>} position="right center">
    <div className="about-div-techlist">
         <ul className="about-ul">
         {mappedTechNames}
          </ul>
        </div>
    </Popup>
    <Popup className="popup-mbile" trigger={<button className="popup-button">Tech Used</button>} position="top center">
    <div className="about-div-techlist">
         <ul className="about-ul">
         {mappedTechNames}
          </ul>
        </div>
    </Popup>

      </section>  
      <Footer />
    </div>
  )};
};

export default About;
