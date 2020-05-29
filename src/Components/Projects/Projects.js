import React, {Component} from 'react';
import './Projects.scss';
import Popup from "reactjs-popup";
import CowboyAlienHome from '../../assets/cowboysaliens.png';
import CowboysAliens2 from '../../assets/cowboysaliens2.png';
import CrossfadeImage from 'react-crossfade-image';
import gutenGIF from '../../assets/gutenreader.gif';
import gutenHome from '../../assets/gutenhome.png';
import icedhome from '../../assets/icedhome.png';
import cinemaHome from '../../assets/cinema-home.png';
import cinemaLogin from '../../assets/cinema-login.png';
import Footer from '../Footer/Footer';
import cycleHome from '../../assets/cycle-east.png';
import swapiHome from '../../assets/swapi-home.png';
import ideaBox from '../../assets/idea-box.png';
import infoLogo from '../../assets/info-black-18dp.svg'

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      imageSrc1: gutenHome,
      imageSrc2: CowboyAlienHome,
      cinemaPics: cinemaHome,
      gutenTextVisible: 'hidden',
    };
  };

  toggleImageSrc = (srcId) => {
    if(srcId === 1) {
      this.state.imageSrc1 === gutenHome ? this.setState({ imageSrc1: gutenGIF }) : this.setState({ imageSrc1: gutenHome })
    };
    if(srcId === 2) {
      this.state.imageSrc2 === CowboyAlienHome ? this.setState({ imageSrc2: CowboysAliens2 }) : this.setState({ imageSrc2: CowboyAlienHome })
    };
    if(srcId === 4) {
      this.state.cinemaPics === cinemaHome ? this.setState({ cinemaPics: cinemaLogin }) : this.setState({ cinemaPics: cinemaHome})
    };
  };

  toggleVisibility = (id) => {
    if(id==='guten') {
      this.state.gutenTextVisible === 'hidden' ? this.setState({ gutenTextVisible: 'visible'}) : this.setState({ gutenTextVisible: 'hidden'})
    };
  };

  render() {

    return(
      <div className="Projects">
        <div className="projects-grid">

        <div className="projects-div gutenreader-div" style={this.state.gutenStyle}>
          <div className="gutenpics" onClick={() => this.toggleVisibility('guten')}>
            <CrossfadeImage src={this.state.imageSrc1} />

          

            {/* <p style={{visibility: this.state.gutenTextVisible}} className="projects-p-guten">
              An eReader built on the Project Gutenberg API that performs sentiment analysis (with IBM Watson) to determine the mood of the current page and plays music (with Spotify) that matches that mood. <br/><br/> 
              Designed with accessibility in mind!<br/><br/>
              Built With: <br/>
              Front End - React Native / Jest / Enzyme <br/>
              Backend - Rails / Sinatra / RSpec / unittest
              </p> */}
          </div>
          <div className="guten-footer projects-div-footer">
            <a target="_blank" href="https://github.com/ZoeKHarvey/guten_reader_FE">Github</a>
            <a target="_blank" href="https://www.youtube.com/watch?v=OcsrT65ifnE">Demo</a>
            <Popup trigger={
              <div className="div-info">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>}
            position="center left">  
              <div className="about-div-techlist">
                <p>this is about the project</p>
              </div>
            </Popup>
            <svg className="svg-next" onClick={ () => this.toggleImageSrc(1) } xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          </div>
        </div>
        <div className="projects-div iced-div">
          <div className="pics">
            <CrossfadeImage src={icedhome} />
         
          </div>
          

          <div className="projects-div-footer">
            <a target="_blank" href="https://github.com/ZoeKHarvey/stats-on-stats">Github</a>
            <Popup trigger={
              <div className="div-info">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>}
            position="center left">  
              <div className="about-div-techlist">
                <p>this is about the project</p>
              </div>  
            </Popup>
          </div>
        </div>

        <div className="projects-div cycle-div">
          <div className="pics">
            <CrossfadeImage src={cycleHome} />
          </div>
          <div className="projects-div-footer">
            <a target="_blank" href=''>Github</a>
            {/* <svg className="svg-next"  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/><path d="M0 0h24v24H0z" fill="none"/></svg> */}
          </div>
        </div>

        <div className="projects-div cowboy-div">
          <div className="pics">
            <CrossfadeImage src={this.state.imageSrc2} />
          </div>
          <div className="projects-div-footer">
            <a target="_blank" href='https://github.com/ZoeKHarvey/Cowboys-vs-Aliens'>Github</a>
            <a target="_blank" href='https://edwindelbosque.github.io/Cowboys-vs-Aliens/'>Live</a>
            <svg className="svg-next" onClick={ () => this.toggleImageSrc(2) } xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          </div>
        </div>

      
        <div className="projects-div swapi-div">
          <div className="pics">
            <CrossfadeImage src={swapiHome} />
          </div>
          <div className="projects-div-footer">
            <a target="_blank" href="https://github.com/ZoeKHarvey/swapi-box">Github</a>
            {/* <svg className="svg-next" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/><path d="M0 0h24v24H0z" fill="none"/></svg> */}
          </div>
        </div>

        <div className="projects-div cinema-div">
          <div className="pics">
            <CrossfadeImage src={this.state.cinemaPics} />
          </div>
          <div className="projects-div-footer">
            <a target="_blank" href="https://github.com/SamuelColeman/cinema-night">Github</a>
            <svg className="svg-next" onClick={ () => this.toggleImageSrc(4) } xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          </div>
        </div>


        <div className="projects-div idea-div">
          <div className="pics">
            <CrossfadeImage src={ideaBox} />
          </div>
          <div className="projects-div-footer">
            <a target="_blank" href="https://github.com/ZoeKHarvey/Idea-Box">Github</a>
            {/* <svg className="svg-next" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/><path d="M0 0h24v24H0z" fill="none"/></svg> */}
          </div>
        </div>
        
        </div>
        <Footer />
      </div>
    )};
  };

export default Projects;