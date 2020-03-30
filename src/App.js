import React from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header'
import './App.scss';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' render = {() => <> <Home /> </>} />
    </div>
  );
}

export default App;
