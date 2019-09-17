import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LeftLetter extends Component {

    render() {
        let twoLetters = {
            float: 'left',
            position: 'relative',
            left: '-100%',
            width: '200%',
            height: '100%',
            animationName: 'sLeft',
            animationDuration: '5s',
            animationDelay: ((Math.random()*4) + 's'),
            animationIterationCount: 'infinite',

        }

        const letter = {
            float: 'left',
            position: 'relative',
            width: '50%',
            height: '100%',
        }
        
        return(
            <div className="sLeft" style={twoLetters}>
                <div style={letter}>
                    <b>{this.props.letter}</b>
                </div>
                <div style={letter}>
                    {this.props.letter}
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
