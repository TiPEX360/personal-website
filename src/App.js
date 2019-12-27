import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './components/pages/Home.js';
import Content from './components/pages/Content.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        homePosition: 0,
    }
  }

  showHome() {
    this.setState({homePosition: 0});
  }

  hideHome() {
    this.setState({homePosition: -100});
  }

  render() {
    return (
      <React.Fragment>
        <Link to='/' className='home-link' onClick={this.showHome.bind(this)}>ts.</Link>
        <Home hideHome={this.hideHome.bind(this)} position={this.state.homePosition}/>
        <Content />
      </React.Fragment>
    );
  }
}
// http://weaintplastic.com/
// next colour idea: dark blue. slide elements up, change colour, slide into page... smth like that
export default App;
