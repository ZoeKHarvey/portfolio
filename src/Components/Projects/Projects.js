import React, {Component} from 'react';
import './Projects.scss';
import CowboyAlienHome from '../../assets/cowboysaliens.png';
import CowboysAliens2 from '../../assets/cowboysaliens2.png';
import CrossfadeImage from 'react-crossfade-image';
import gutenGIF from '../../assets/gutenreader.gif';
import gutenHome from '../../assets/gutenhome.png';
import icedhome from '../../assets/icedhome.png';
import cinemaHome from '../../assets/cinema-home.png';
import cinemaLogin from '../../assets/cinema-login.png';


class Projects extends Component {
  constructor() {
    super()
    this.state = {
      imageSrc1: gutenHome,
      imageSrc2: CowboyAlienHome,
      cinemaPics: cinemaHome,
    }
  }

  toggleImageSrc = (srcId) => {
    if(srcId === 1) {
      this.state.imageSrc1 === gutenHome ? this.setState({ imageSrc1: gutenGIF }) : this.setState({ imageSrc1: gutenHome })
    }
    if(srcId === 2) {
      this.state.imageSrc2 === CowboyAlienHome ? this.setState({ imageSrc2: CowboysAliens2 }) : this.setState({ imageSrc2: CowboyAlienHome })
    }
    if(srcId === 4) {
      console.log(this.state.cinemaPics)
      this.state.cinemaPics === cinemaHome ? this.setState({ cinemaPics: cinemaLogin }) : this.setState({ cinemaPics: cinemaHome})
    }

  }
 
render() {
  return(
    <div className="Projects">

      <div className="projects-div gutenreader-div">

      <div className="gutenpics">
        <CrossfadeImage src={this.state.imageSrc1} />
        </div>
        <div className="projects-div-footer">
          <a href="https://github.com/ZoeKHarvey/guten_reader_FE">Github</a>
          <a href="https://www.youtube.com/watch?v=OcsrT65ifnE">Demo</a>
          <svg className="svg-next" onClick={ () => this.toggleImageSrc(1) } xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </div>
      </div>

      <div className="projects-div iced-div">
        <div className="icedpics">
          <CrossfadeImage src={icedhome} />
        </div>
        <div className="projects-div-footer">
        <a href="https://github.com/ZoeKHarvey/stats-on-stats">Github</a>
        <svg className="svg-next" onClick={ () => this.toggleImageSrc(3) } xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </div>
      </div>


      <div className="projects-div cowboy-div">
      <CrossfadeImage src={this.state.imageSrc2} />

      <div className="projects-div-footer">
      <a href='https://github.com/ZoeKHarvey/Cowboys-vs-Aliens'>Github</a>
      <a href='https://edwindelbosque.github.io/Cowboys-vs-Aliens/'>
          Live
      </a>
      <svg className="svg-next" onClick={ () => this.toggleImageSrc(2) } xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>

      </div>
      </div>

      <div className="projects-div cinema-div">
        <div className="cinemapics">
        <CrossfadeImage src={this.state.cinemaPics} />
        </div>

        <div className="projects-div-footer">
          <a href="https://github.com/SamuelColeman/cinema-night">Github</a>
        <svg className="svg-next" onClick={ () => this.toggleImageSrc(4) } xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>

        </div>
      </div>


    </div>
  )
}
}

export default Projects;