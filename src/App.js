import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' render = {() => <> <Home /> </>} />
      <Route exact path='/projects' render = {() => <> <Projects /> </>} />
      <Route exact path='/about' render = {() => <> <About /> </>} />
      <Route exact path='/resume' render = {() => <> <Resume /> </>} />
    </div>
  );
}

export default App;
