import React, { Component } from 'react';
import Home from './components/pages/Home.js'
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <a href="" className="home-link">ts.</a>
        <Home />
      </React.Fragment>
    );
  }
}
// http://weaintplastic.com/
// next colour idea: dark blue. slide elements up, change colour, slide into page... smth like that
export default App;
