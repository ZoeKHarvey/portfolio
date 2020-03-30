import React, {Component} from 'react';
import './Projects.scss';
import CowboyAlienHome from '../../assets/cowboysaliens.png';
import CowboysAliens2 from '../../assets/cowboysaliens2.png';
import CrossfadeImage from 'react-crossfade-image';
import gutenGIF from '../../assets/gutenreader.gif';

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

      <div className="projects-div gutenreader-div">
        <CrossfadeImage src={gutenGIF} />
        {/* <img src={gutenGIF} /> */}
      {/* <iframe src="https://user-images.githubusercontent.com/50784336/72040161-eea30180-3264-11ea-965d-b347b1b3fb7e.gif"></iframe> */}
      </div>


      <div className="projects-div cowboy-div">
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