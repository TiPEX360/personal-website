import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LeftLetter extends Component {
    
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
        let twoLetters = {
            float: 'left',
            position: 'relative',
            left: '-200%',
            width: '400%',
            transition: 'transform 0.4s ease',
            height: '100%',
        }

        const letter = {
            float: 'left',
            position: 'relative',
            textAlign: 'center',
            width: '25%',
            height: '100%',
        }
        
        return(
            <div onMouseEnter={() => (this.setState({position: 50,} ))} style={{...twoLetters, transform: 'translateX(' + this.state.position + '%)',}}>
                <div style={letter}>
                    <b>{this.props.letter}</b>
                </div>
                <div style={letter}>
                    {this.props.letter}
                </div>
                <div style={letter}>

                </div>
            </div>
        );
    }
}


//PropTypes
LeftLetter.propTypes = {
    letter: PropTypes.string.isRequired,
}

export default LeftLetter;
