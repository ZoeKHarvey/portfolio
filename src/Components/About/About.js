import React from 'react';
import './About.scss';
import Footer from '../Footer/Footer'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const About = () => {
  let technologies = [ 
    {name: 'React',
     category: 'Frameworks',
     related: ['React', 'JavaScript'],
     extras: ''},
    {name: 'Redux',
     category: 'Libraries',
     related: ['React'],
     extras: ''},
    {name: 'Node.js',
     category: 'Server-Side',
     related: ['JavaScript'],
     extras: ''}
  ]

  let mappedTechNames = technologies.map(tech => {
    return <li>{tech.name}</li>
  })

  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];

  return(
    <div className="About">
      <h6>Web Desinger</h6>
      <section className="about-section-general">
        <p>Technologies Used</p>
        
        <ul>
          {mappedTechNames}
        </ul>


 

<Dropdown options={options} placeholder="Sort By" />;
      </section>

      <Footer />
    </div>
  )
}

export default About;