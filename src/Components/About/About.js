import React, {Component} from 'react';
import './About.scss';
import Footer from '../Footer/Footer'
import 'react-dropdown/style.css';
import Select from 'react-select';
import {technologies} from '../../util/technologies'


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
      selectedOption: null,
      renderedList: [],
      details: '',
      currentTech: ''
    };
  }

  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
    this.renderSort(selectedOption.value)
  };

  renderSort = (option) => {
    if(option === "alph") {
      technologies.sort(function(a, b) {
        return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
    }); 
    }
    else {
      let newT = technologies.filter(tech => tech.category === option)
      this.setState({ renderedList : newT })
    }
  }

  showDetails = (tech) => {
    this.setState({currentTech: tech})
    let related = tech.related.map(t => {
      return <p>{t}</p>
    })
    this.setState({
      details : related
    })
  }


render() {
  const { selectedOption } = this.state;
  let mappedTechNames = technologies.map(tech => {
    return <li className="hover" onMouseEnter={ () => this.showDetails(tech)}>
              {tech.name}
              {this.state.currentTech.name === tech.name && <div>{this.state.details}</div>} 
           </li>
  })
  let mappedOptionTech = this.state.renderedList.map(tech => {
    return <li onClick={ () => this.showDetails(tech)}>{tech.name}</li>
  })

  return(
    <div className="About">

    <h6>Web Desinger</h6>
        <p>Technologies Used</p>

    <div id="wrapper">
        <ul>
          {mappedTechNames}
        </ul>
    </div>



     
      <section className="about-section-general">
        
          
      </section>


      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />

      {mappedOptionTech}






      <Footer />
    </div>
  )
}
}

export default About;