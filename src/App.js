import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects'
import './App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' render = {() => <> <Home /> </>} />
      <Route exact path='/projects' render = {() => <> <Projects /> </>} />
    </div>
  );
}

export default App;
