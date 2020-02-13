import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeftLetter from './LeftLetter.js';
import RightLetter from './RightLetter.js';
import TopLetter from './TopLetter.js'
import BottomLetter from './BottomLetter.js';


class AnimatedLetter extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            color: '#020202',
            output: null,
        }
    }
    
    componentDidMount() {
        this.generateLetter();
        setTimeout(this.changeColour.bind(this), 2000);
    }

    changeColour() {
        this.setState({color: '#f3f3f3'});
    }

    generateLetter() {

        const delay = this.props.delay ? this.props.delay : (Math.random() * 2000);
        const interval = this.props.interval ? this.props.interval : 3000 + Math.random() * 4000;
        const type = Math.ceil(Math.random()*5) - 1;
    
        switch(type) {
            case 0:
                this.setState({output: <LeftLetter interval={interval} delay={delay} letter={this.props.letter}/>});
                break;
            case 1:
                this.setState({output: <RightLetter interval={interval} delay={delay} letter={this.props.letter}/>});
                break;
            case 2:
                this.setState({output: <TopLetter interval={interval} delay={delay} letter={this.props.letter}/>});
                break;
            default:
                this.setState({output: <BottomLetter interval={interval} delay={delay} letter={this.props.letter}/>});
        }
    }
    
    render() { 
        const letterContainer = {
            width: this.props.width ? this.props.width : 120,
            height: this.props.height ? this.props.height : 50,
            position: 'relative',
            overflow: 'hidden',
            float: 'left',
            fontSize: 20,
            fontFamily: "'Major Mono Display', monospace",
            transition: 'color 1s',
        }

        return (
            <div style={{...letterContainer, color: this.state.color}}>
                {this.state.output}
            </div>        
        );

    }
}

//PropTypes
AnimatedLetter.propTypes = {
    letter: PropTypes.string.isRequired,
}

export default AnimatedLetter;
