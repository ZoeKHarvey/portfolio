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

// const customStyles = {
//   option: (provided, state) => ({
//     ...provided,
//     borderBottom: '5px dotted pink',
//     color: state.isSelected ? 'red' : 'blue',
//     padding: 20,
//   }),
//   control: () => ({
//     // none of react-select's styles are passed to <Control />
//     width: 200,
//   }),
//   singleValue: (provided, state) => {
//     const opacity = state.isDisabled ? 0.5 : 1;
//     const transition = 'opacity 300ms';

//     return { ...provided, opacity, transition };
//   }
// }

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
    console.log(selectedOption)
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
    return <li className="hover about-li" 
    // onMouseEnter={ () => this.showDetails(tech)}
    >
              {tech.name}
              {this.state.currentTech.name === tech.name && <div>{this.state.details}</div>} 
           </li>
  })
  let mappedOptionTech = this.state.renderedList.map(tech => {
    return <li className="about-li">{tech.name}</li>
  })

  return(
    <div className="About">

      <section className="about-section-tech">

     

<div className="about-div-techlist">
      <p>Technologies Used</p>
      <div id="wrapper">
        <ul className="about-ul">
          {mappedTechNames}
        </ul>
      </div>
      </div>


<div className="about-div-dropdown">
      <Select
        // styles={customStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
          ...theme.colors,
            text: 'orangered',
            primary25: 'hotpink',
            primary: 'black',
          },
        })}

        className ="about-dropdown"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
      <ul className="about-ul">

      {mappedOptionTech}
      </ul>
      </div>

      </section>
      <label for="cars">Choose a car:</label>

      <section className="about-section-general">
        <p>Personal About Section</p>
          
        </section>




      <Footer />
    </div>
  )
}
}

export default About;