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
    console.log('UGH')
    if(this.state.imageSrc = CowboyAlienHome) {
      console.log('here')
      this.setState({ imageSrc: CowboysAliens2 })
    } else {
      console.log('there')
      this.setState({ imageSrc: CowboyAlienHome})
    }
  }
 

render() {
  return(
    <div className="Projects">
      <h1>Projects</h1>
      <div>
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