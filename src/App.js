import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home.js';
import More from './components/pages/More.js';
import './App.css';


class App extends Component {

  render() {
    return (
      <Router>
        <Link to="/" className='home-link'>ts.</Link>
        <Route exact path='/' component={Home} />
        <Route path='/more' component={More} />
      </Router>
    );
  }
}
// http://weaintplastic.com/
// next colour idea: dark blue. slide elements up, change colour, slide into page... smth like that
export default App;
