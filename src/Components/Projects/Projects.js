import React, {Component} from 'react';
import './Projects.scss';
import CowboyAlienHome from '../../assets/cowboysaliens.png';
import CowboysAliens2 from '../../assets/cowboysaliens2.png';
import CrossfadeImage from 'react-crossfade-image';

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      imageSrc: CowboyAlienHome
    }
  }

  toggleImageSrc = () => {
    if(this.state.imageSrc === CowboyAlienHome) {
      this.setState({ imageSrc: CowboysAliens2 })
    } else {
      this.setState({ imageSrc: CowboyAlienHome})
    }
  }
 
render() {
  return(
    <div className="Projects">
      <h1>Projects</h1>
      <div className="projects-div">
        <button onClick={this.toggleImageSrc}>Next</button>
      <CrossfadeImage src={this.state.imageSrc} />
      <a href='https://edwindelbosque.github.io/Cowboys-vs-Aliens/'>
        {/* <img className="slides" src={CowboyAlienHome} />
        <img className="slides" src={CowboysAliens2} /> */}
      </a>
      <a href='https://github.com/ZoeKHarvey/Cowboys-vs-Aliens'>Github</a>
      </div>
    </div>
  )
}
}

export default Projects;