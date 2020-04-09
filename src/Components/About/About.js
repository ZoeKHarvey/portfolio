import React from 'react';
import './About.scss';
import Footer from '../Footer/Footer'

const About = () => {

  return(
    <div className="About">
      <h6>Web Desinger</h6>
      <section className="about-section-general">
        <p>Technologies Used</p>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Knex</li>
          <li>CSS</li>
          <li>Sass</li>
          <li>HTML</li>
          
        </ul>
      </section>

      <Footer />
    </div>
  )
}

export default About;