import React, {Component} from 'react';
import './About.scss';
import Footer from '../Footer/Footer';
import 'react-dropdown/style.css';
import Select from 'react-select';
import {technologies} from '../../util/technologies';


const options = [
  { value: 'alph', label: 'A to Z' },
  { value: 'frameworks', label: 'Frameworks' },
  { value: 'languages', label: 'Languages' },
  { value: 'libraries', label: 'Libraries' },
  { value: 'tdd', label: 'Test Driven Development' },
  { value: 'server-side', label: 'Server-Side' },
  { value: 'version control', label: 'Version Control'}
];

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
      <p>See full list of technologies</p>
      </section>  

      <section className="about-section-tech">
          <p>Technologies</p>
          
         <div className="about-div-techlist">
         <ul className="about-ul">
         {mappedTechNames}
          </ul>
        </div>
        
      </section>
      <Footer />
    </div>
  )};
};

export default About;

// change mapped tech names to state to have search narrow, add submit button for search so frameworks can be filtered