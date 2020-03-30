import React, {Component} from 'react';
import './Projects.scss';
import CowboyAlienHome from '../../assets/cowboysaliens.png';
import CowboysAliens2 from '../../assets/cowboysaliens2.png';
import CrossfadeImage from 'react-crossfade-image';
import gutenGIF from '../../assets/gutenreader.gif';
import gutenHome from '../../assets/gutenhome.png';

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      imageSrc1: gutenHome,
      imageSrc2: CowboyAlienHome
    }
  }

  toggleImageSrc = (srcId) => {
    if(srcId === 1) {
      this.state.imageSrc1 === gutenHome ? this.setState({ imageSrc1: gutenGIF }) : this.setState({ imageSrc1: gutenHome })
    }
    if(srcId === 2) {
      this.state.imageSrc2 === CowboyAlienHome ? this.setState({ imageSrc2: CowboysAliens2 }) : this.setState({ imageSrc2: CowboyAlienHome })
    } 
  }


  //   if(this.state.imageSrc2 === CowboyAlienHome) {
  //     this.setState({ imageSrc2: CowboysAliens2 })
  //   } else {
  //     this.setState({ imageSrc2: CowboyAlienHome})
  //   }
  // }

  // ADD EACH LIST OF PICTURES TO ITS OWN ARRAY TO MAKE FUNCTION DYNAMIC?
 
render() {
  return(
    <div className="Projects">

      <div className="projects-div gutenreader-div">
      <svg className="svg-next" onClick={ () => this.toggleImageSrc(1) } xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        {/* <button onClick={ () => this.toggleImageSrc(1) }>Next</button> */}
        <CrossfadeImage src={this.state.imageSrc1} />
        <a href="https://github.com/ZoeKHarvey/guten_reader_FE">Github</a>
      </div>


      <div className="projects-div cowboy-div">
        <button onClick={ () => this.toggleImageSrc(2) }>Next</button>
      <CrossfadeImage src={this.state.imageSrc2} />
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