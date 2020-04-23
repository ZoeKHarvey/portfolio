import React from 'react';
import './Home.scss';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';

const Home = () => {

  return(
    <div className="Home">
      <div className="home__div--name">
        <h1>Zoë</h1>
        <h1>Harvey</h1>
        <p className="home__p--about">Web Developer <span>/</span> Adaptive Designer <span>/</span> Drink Slinger </p>
      </div>

<div className="mobile-components">
      <Projects />
      <About />
      <Contact />
      </div>
      <Footer />

    </div>
  );
};

export default Home;