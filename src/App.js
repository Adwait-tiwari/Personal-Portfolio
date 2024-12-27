import React,{Component} from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AnimatedRouter from './Components/AnimatedRouter';
import {
  BrowserRouter as Router,
} from "react-router-dom";

class App extends Component{
  render(){
    return(
      <Router>
        <div>
              <Navbar/>
              <AnimatedRouter/>
            <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;