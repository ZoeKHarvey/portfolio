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
  { value: 'libraries', label: 'Libraries'}
];

class About extends Component {
  constructor() {
    super()
    this.state = {
      selectedOption: null,
      renderedList: []
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


render() {
  const { selectedOption } = this.state;
  let mappedTechNames = technologies.map(tech => {
    return <li>{tech.name}</li>
  })
  let mappedOptionTech = this.state.renderedList.map(tech => {
    return <li>{tech.name}</li>
  })
  return(
    <div className="About">
      <h6>Web Desinger</h6>
      <section className="about-section-general">
        <p>Technologies Used</p>
        <ul>
          {mappedTechNames}

        </ul>
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