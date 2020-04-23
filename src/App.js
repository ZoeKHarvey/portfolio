import React, {Component} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import './App.scss';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header onChange={this.onChange} />
        <Route exact path='/' render = {() => <> <Home /> </>} />
        <Route exact path='/projects' render = {() => <> <Projects /> </>} />
        <Route exact path='/about' render = {() => <> <About /> </>} />
        <Route exact path='/resume' render = {() => <> <Resume /> </>} />
        <Route exact path='/contact' render = {() => <> <Contact /> </>} />
      </div>
    );
  };
};

export default App;
