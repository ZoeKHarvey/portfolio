import React from 'react';
import './About.scss';
import Footer from '../Footer/Footer'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const About = ({handleSortSelect}) => {



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
    'Alphabetical', 'Frameworks', 'Libraries', 'Server-Side', 'Client-Side'
  ]



  return(
    <div className="About">
      <h6>Web Desinger</h6>
      <section className="about-section-general">
        <p>Technologies Used</p>
        <Dropdown options={options} onClick={handleSortSelect} placeholder="Sort By" />;
        <ul>
          {mappedTechNames}
        </ul>
      </section>

      <Footer />
    </div>
  )
}

export default About;