import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopLetter extends Component {

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
            float: 'left',
            position: 'relative',
            width: '100%',
            height: '400%',
            top: '-200%',
            transition: 'transform 0.4s ease',
        }

        const letter = {
            position: 'relative',
            textAlign: 'center',
            width: '100%',
            height: '25%',
        }

        return(
            <div style={twoLetters} onMouseEnter={() => (this.setState({position: 50,} ))} style={{...twoLetters, transform: 'translateY(' + this.state.position + '%)',}}>
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
TopLetter.propTypes = {
    letter: PropTypes.string.isRequired,
}

export default TopLetter;