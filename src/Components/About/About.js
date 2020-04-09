import React, {Component} from 'react';
import './About.scss';
import Footer from '../Footer/Footer'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Select from 'react-select';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class About extends Component {
  constructor() {
    super()
    this.state = {
      selectedOption: null,
    };
  }

  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };


  // let technologies = [ 
  //   {name: 'React',
  //    category: 'Frameworks',
  //    related: ['React', 'JavaScript'],
  //    extras: ''},
  //   {name: 'Redux',
  //    category: 'Libraries',
  //    related: ['React'],
  //    extras: ''},
  //   {name: 'Node.js',
  //    category: 'Server-Side',
  //    related: ['JavaScript'],
  //    extras: ''}
  // ]

  // let mappedTechNames = technologies.map(tech => {
  //   return <li>{tech.name}</li>
  // })




render() {
  const { selectedOption } = this.state;
  return(
    <div className="About">
      <h6>Web Desinger</h6>
      <section className="about-section-general">
        <p>Technologies Used</p>
        {/* <Dropdown options={options} onChange={handleSortSelect} placeholder="Sort By" onChange={_onSelect} />; */}
        <ul>
          {/* {mappedTechNames} */}
        </ul>
      </section>


      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />



      <Footer />
    </div>
  )
}
}

export default About;