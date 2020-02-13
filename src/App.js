import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
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
    document.body.classList.add('preventScroll')
    this.setState({homePosition: 0});
  }

  hideHome() {
    document.body.classList.remove('preventScroll')
    this.setState({homePosition: -100, loadContent: true,});
  }

  render() {
    let content = null;
    if(this.state.loadContent) {
      content = <Content />
    }

    return (
      <React.Fragment>
        <Link to='/' className='home-link' onClick={this.showHome.bind(this)}>ts.</Link>
        <Home hideHome={this.hideHome.bind(this)} position={this.state.homePosition}/>
        {content}
      </React.Fragment>
    );
  }
}
// http://weaintplastic.com/
// next colour idea: dark blue. slide elements up, change colour, slide into page... smth like that
export default App;
