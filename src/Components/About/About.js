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
        <span className="about-li-span">.</span>
        </>
  });

  return(
    <div className="About">
      <section className="about-section-general">
        <p className="about-first about-p">Striving for <span>simple answers</span> to <span>complex issues</span>.</p>
        <p className="about-p">From managing high-paced bars to learning new tech stacks on the fly, 
        I've learned a lot about solving problems efficiently, cooperatively and under pressure while 
        constantly keeping the end-user's experience and needs in the forefront of each decision.</p>
      </section>  
      <hr/>   
      <section className="about-section-tech">
      <div className="about-div-dropdown">
          <input type="text" onChange={this.handleChange} value={selectedOption} />
          <ul className="about-ul">
            {mappedOptionTech}
          </ul>
        </div>

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