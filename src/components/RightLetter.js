import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RightLetter extends Component {
        
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
            width: '400%',
            height: '100%',
            transition: 'transform 0.4s ease',
        }

        const letter = {
            float: 'left',
            position: 'relative',
            width: '25%',
            height: '100%',
            textAlign: 'center',
        }

        return(
            <div onMouseEnter={() => (this.setState({position: 50,} ))} style={{...twoLetters, transform: 'translateX(-' + this.state.position + '%)',}}>
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
RightLetter.propTypes = {
    letter: PropTypes.string.isRequired,
}

export default RightLetter;