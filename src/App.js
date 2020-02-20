import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home.js';
import Header from './Common/Header.js';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Favicon from 'react-favicon';
import favicon from './assets/favicon.ico'
import store from 'store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    document.title = "Sustainable Materials Advisor";
  }
  render() {
      return(
        <div className="App">
          <Favicon url={favicon} />
          <Header/>
          <Home/>
        </div>
      );
  }
}



export default App;
