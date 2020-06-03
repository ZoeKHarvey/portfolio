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
import techfluent from '../../assets/tech-fluent.png';


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


  render() {

    return(
      <div className="Projects">
        <div className="projects-grid">

        <div className="projects-div gutenreader-div" style={this.state.gutenStyle}>
          {/* <div className="gutenpics"> */}
            <img className="gutenpics" src={this.state.imageSrc1} />
           
    
          <div className="guten-footer projects-div-footer">
            <a target="_blank" href="https://github.com/ZoeKHarvey/guten_reader_FE">Github</a>
            <a target="_blank" href="https://www.youtube.com/watch?v=OcsrT65ifnE">Demo</a>
            <Popup trigger={
              <div className="div-info guten-info">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>}
            position="top right">  
              <div className="about-p">
                <p>An eReader built on the Project Gutenberg API that performs sentiment analysis (with IBM Watson) to determine the mood of the current page and plays music (with Spotify) that matches that mood. <br/><br/> 
              Designed with accessibility in mind!<br/><br/>
              Built With: <br/>
              Front End - React Native / Jest / Enzyme <br/>
              Backend - Rails / Sinatra / RSpec / unittest</p>
              </div>
            </Popup>
            {/* <svg className="svg-next" onClick={ () => this.toggleImageSrc(1) } xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/><path d="M0 0h24v24H0z" fill="none"/></svg> */}
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>}
            position="center left">  
              <div className="about-p">
                <p>Iced is built on an unofficial NHL API to deliver team and player's statistics. Star your favorite players
                  as well keep up to date on team schedules. <br/> <br/>
                  Built With: <br/>
                  React / Redux / SCSS <br/>
                  Tested With: <br/>
                  Jest / Enzyme
                </p>
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
            <Popup trigger={
              <div className="div-info">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>}
            position="center left">  
              <div className="about-p">
                <p>A website built for a new local bike tour company. Worked closely with potential users
                  to design a pleasing UI that is targetted to pique interest and inform bikers on this unique experience. <br/> <br/>
                  Built With: React / SCSS
                </p>
              </div>
            </Popup>         
             </div>
        </div>

        <div className="projects-div cowboy-div">
          <div className="pics">
            <CrossfadeImage src={this.state.imageSrc2} />
          </div>
          <div className="projects-div-footer">
            <a target="_blank" href='https://github.com/ZoeKHarvey/Cowboys-vs-Aliens'>Github</a>
            <a target="_blank" href='https://edwindelbosque.github.io/Cowboys-vs-Aliens/'>Live</a>
            <Popup trigger={
              <div className="div-info">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>}
            position="center left">  
              <div className="about-p">
                <p>Based on the popular game show Family Feud, this app allows 2 users to play along. 
                  It keeps track of the users' scores for each unique round including a timed challenge round. <br/><br/>
                  Built With: Javascript / HTML / SASS <br/>
                  Tested With: Mocha / Chai & Spies
                </p>
              </div>
            </Popup>
            <svg className="svg-next" onClick={ () => this.toggleImageSrc(2) } xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>

          </div>
        </div>

      
        <div className="projects-div swapi-div">
          <div className="pics">
            <CrossfadeImage src={swapiHome} />
          </div>
          <div className="projects-div-footer">
            <a target="_blank" href="https://github.com/ZoeKHarvey/swapi-box">Github</a>
            <Popup trigger={
              <div className="div-info">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>}
            position="center right">  
              <div className="about-p">
                <p>Star Wars fans unite! This app is built with the Star Wars Api to bring all of your favorite
                  characters and spacecrafts together. Learn about each movie, star your favorite characters to keep
                  them organized and more! <br/><br/>
                  Built With: React / SASS <br/>
                  Tested With: Jest / Enzyme
                </p>
              </div>
            </Popup>          </div>
        </div>

        <div className="projects-div cinema-div">
          <div className="pics">
            <CrossfadeImage src={this.state.cinemaPics} />
          </div>
          <div className="projects-div-footer">
            <a target="_blank" href="https://github.com/SamuelColeman/cinema-night">Github</a>
            <Popup trigger={
              <div className="div-info">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>}
            position="center right">  
              <div className="about-p">
                <p>Cinema Night is an app that allows users to browse the top 20 newly released 
                  films of this year. The user is able to read the description of each film and once 
                  logged in can add them to their favourites list <br/><br/>
                  Built With: React/Redux <br/>
                  Tested With: Jest / Enzyme
                  </p>
              </div>
            </Popup>
          </div>
        </div>


        <div className="projects-div idea-div">
          <div className="pics">
            <CrossfadeImage src={techfluent} />
          </div>
          <div className="projects-div-footer">
            <a target="_blank" href="https://github.com/ZoeKHarvey/Idea-Box">Github</a>
            <Popup trigger={
              <div className="div-info">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>}
            position="center left">  
              <div className="about-p">
                <p>TechFluent delivers coding classes for spanish-speaking learners. The website
                  was designed and built focusing on minimalistic design and easy-to-navigate UI.
                </p>
              </div>
            </Popup>          
            </div>
        </div>
        
        </div>
        <Footer />
      </div>
    )};
  };

export default Projects;