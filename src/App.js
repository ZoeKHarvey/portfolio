import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.scss';


class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     selectedOption = null
  //   }
  // }

  handleSortSelect = (a) => {
    console.log('in it')
  }

  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' render = {() => <> <Home /> </>} />
        <Route exact path='/projects' render = {() => <> <Projects /> </>} />
        <Route exact path='/about' render = {() => <> <About handleSortSelect = {this.handleSortSelect} /> </>} />
        <Route exact path='/resume' render = {() => <> <Resume /> </>} />
        <Route exact path='/contact' render = {() => <> <Contact /> </>} />
        
      </div>
    );
  }

}

export default App;
