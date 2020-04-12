import React from 'react';
import './Home.scss';
import Footer from '../Footer/Footer'

const Home = () => {

  return(
    <div className="Home">
      <div className="home__div--name">
        <h1>Zoë</h1>
        <h1>Harvey</h1>
        <p className="home__p--about">Web Developer <span>/</span> Drink Slinger <span>/</span> Mountain Conquerer </p>
      </div>
      <Footer />
    </div>
  )

}

export default Home;