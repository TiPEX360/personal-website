import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BottomLetter extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            position: 0,
        };
        setInterval(this.togglePosition.bind(this), this.props.interval);
        setTimeout(this.togglePosition.bind(this), this.props.delay);
    }
    
    togglePosition() {
        console.log(this.state.position);
        if(this.state.position === 50 || this.state.position === 0) this.setState({position: 25});
        else this.setState({position: 50});
    }
    
    render() {
        const twoLetters = {
            transition: 'transform 0.4s ease',
            float: 'left',
            position: 'relative',
            width: '100%',
            height: '400%',
        }
    
        const letter = {
            position: 'relative',
            width: '100%',
            height: '25%',
            textAlign: 'center',
        }
    

        return(
            <div onMouseEnter={() => (this.setState({position: 50,} ))} style={{...twoLetters, transform: 'translateY(-' + this.state.position + '%)',}}>
                <div style={letter}>

                </div>
                <div style={letter}>
                    {this.props.letter}
                </div>
                <div style={letter}>
                    <b>{this.props.letter}</b>
                </div>
            </div>
        );
    }
}


//PropTypes
BottomLetter.propTypes = {
    letter: PropTypes.string.isRequired,
}

export default BottomLetter;