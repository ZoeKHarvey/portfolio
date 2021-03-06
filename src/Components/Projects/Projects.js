import React, {Component} from 'react';
import './Projects.scss';
import Popup from "reactjs-popup";
import CowboyAlienHome from '../../assets/cowboysaliens.png';
import CrossfadeImage from 'react-crossfade-image';
import gutenHome from '../../assets/gutenhome.png';
import icedhome from '../../assets/icedhome.png';
import cinemaHome from '../../assets/cinema-home.png';
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
    };
  };

  render() {

    return(
      <div className="Projects">
        <div className="projects-grid">
          <div className="projects-div gutenreader-div" style={this.state.gutenStyle}>
            <img className="gutenpics" src={this.state.imageSrc1} />
            <div className="guten-footer projects-div-footer">
              <a target="_blank" href="https://github.com/ZoeKHarvey/guten_reader_FE">Github</a>
              <a target="_blank" href="https://www.youtube.com/watch?v=OcsrT65ifnE">Demo</a>
              <Popup trigger={
                <svg className="guten-info-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="25px" height="25px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                }
                position="top right">  
                <div className="about-p">
                  <p>
                    <span>GutenReader</span><br/>
                    An eReader built on the Project Gutenberg API that performs sentiment analysis (with IBM Watson) to determine the mood of the current page and plays music (with Spotify) that matches that mood. <br/><br/> 
                    Designed with accessibility in mind!<br/>
                  </p>
                  <p className="info-tech">
                    React Native <span>/</span> Jest <span>/</span> Enzyme <br/>
                    Rails <span>/</span> Sinatra <span>/</span> RSpec <span>/</span> unittest
                  </p>
                </div>
              </Popup>
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="25px" height="25px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>}
              position="top right">  
              <div className="about-p">
                <p>
                  <span className="info-span">Iced</span><br/>
                    Iced is built on an unofficial NHL API to deliver team and player's statistics. Star your favorite players
                    as well keep up to date on team schedules. <br/> 
                </p>
                <p className="info-tech">
                  React <span>/</span> Redux <span>/</span> SCSS <br/>
                  Jest <span>/</span> Enzyme
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="25px" height="25px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>}
              position="top right">  
              <div className="about-p">
                <p>
                  <span>Cycle East</span><br/>
                    A website built for a new local bike tour company. Worked closely with potential users
                    to design a pleasing UI that is targetted to pique interest and inform bikers on this unique experience. <br/>
                </p>
                <p className="info-tech">
                  React <span>/</span> SCSS
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="25px" height="25px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>}
              position="top right">  
              <div className="about-p">
                <p>
                <span>Cowboys vs Aliens</span><br/>
                  Based on the popular game show Family Feud, this app allows two users to play along. 
                  It keeps track of the users' scores for each unique round including a timed lightning round. <br/>
                </p>
                <p className="info-tech">
                  Javascript <span>/</span> HTML <span>/</span> SASS <br/>
                  Mocha <span>/</span> Chai & Spies
                </p>
              </div>
            </Popup>
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="25px" height="25px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>}
              position="top right">  
              <div className="about-p">
                <p>
                <span className="info-span">SWAPI Box</span><br/>
                  Star Wars fans unite! This app is built with the Star Wars Api to bring all of your favorite
                  characters and spacecrafts together. Learn about each movie, star your favorite characters to keep
                  them organized and more! <br/>
                </p>
                <p className="info-tech">
                  React <span>/</span> SASS <span>/</span>Jest <span>/</span> Enzyme
                </p>
              </div>
            </Popup> 
          </div>
        </div>

        <div className="projects-div cinema-div">
          <div className="pics">
            <CrossfadeImage src={this.state.cinemaPics} />
          </div>
          <div className="projects-div-footer">
            <a target="_blank" href="https://github.com/SamuelColeman/cinema-night">Github</a>
            <Popup trigger={
              <div className="div-info">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="25px" height="25px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>}
              position="top right">  
              <div className="about-p">
                <p>
                  <span className="info-span">Cinema Night</span><br/>
                    An app that allows users to browse the top 20 newly released 
                    films of this year. The user is able to read the description of each film and once 
                    logged in can add them to their favourites list <br/>
                </p>
                <p className="info-tech">
                  React<span>/</span>Redux <span>/</span>Jest <span>/</span> Enzyme
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
            <a target="_blank" href="https://techfluent.io">Site</a>
            <Popup trigger={
              <div className="div-info">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" width="25px" height="25px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>}
              position="top right">  
              <div className="about-p">
                <p>
                <span className="info-span">Tech Fluent</span><br/>
                  Tech Fluent delivers coding classes for spanish-speaking learners. The website
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