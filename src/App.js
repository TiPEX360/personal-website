import React, { Component } from 'react';
import Home from './components/pages/Intro/Home.js';
import Content from './components/pages/Content.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        homePosition: 0,
        loadContent: false,
    }
  }

  showHome() {
    this.setState({homePosition: 0});
  }

  hideHome() {
    this.setState({homePosition: -100, loadContent: true,});
  }

  render() {
  
    return (
      <React.Fragment>
        <div className='home-link' onClick={this.showHome.bind(this)}>ts.</div>
        <Home hideHome={this.hideHome.bind(this)} position={this.state.homePosition}/>
        <Content />
      </React.Fragment>
    );
  }
}
// http://weaintplastic.com/
// next colour idea: dark blue. slide elements up, change colour, slide into page... smth like that
export default App;
