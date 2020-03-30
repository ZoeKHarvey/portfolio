import React from 'react';
import './Projects.scss';
import CowboyAlienHome from '../../assets/cowboysaliens.png';
import CowboysAliens2 from '../../assets/cowboysaliens2.png';

const Projects = () => {

  return(
    <div className="Projects">
      <h1>Projects</h1>
      <div>
      <a href='https://edwindelbosque.github.io/Cowboys-vs-Aliens/'>
        <img className="slides" src={CowboyAlienHome} />
        <img className="slides" src={CowboysAliens2} />
      </a>
      <a href='https://github.com/ZoeKHarvey/Cowboys-vs-Aliens'>Github</a>
      </div>
    </div>
  )
}

export default Projects;