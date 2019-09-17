import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AnimatedLetter.css';
import LeftLetter from './LeftLetter.js';
import RightLetter from './RightLetter.js';
import TopLetter from './TopLetter.js'
import BottomLetter from './BottomLetter.js';
import FakeLetter from './FakeLetter';


class AnimatedLetter extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            type: Math.ceil(Math.random()*5) - 1,
        }
    }

    
    render() { 
        const letterContainer = {
            width: 150,
            height: 240,
            position: 'relative',
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            float: 'left',
            fontSize: 160,
            fontFamily: "'Major Mono Display', monospace",
        }

        let output = null;
        switch(this.state.type) {
            case 0:
                output = <LeftLetter letter={this.props.letter}/>;
                break;
            case 1:
                output = <RightLetter letter={this.props.letter}/>;
                break;
            case 2:
                output = <BottomLetter letter={this.props.letter}/>;
            case 3:
                output = <FakeLetter letter={this.props.letter}/>;
                break;
            default:
                output = <TopLetter letter={this.props.letter}/>;
        }
        return (
            <div style={letterContainer}>
                {output}
            </div>        
        );

    }
}

//PropTypes
AnimatedLetter.propTypes = {
    letter: PropTypes.string.isRequired,
}

export default AnimatedLetter;
