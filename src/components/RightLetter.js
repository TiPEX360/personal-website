import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RightLetter extends Component {
    render() {
        const twoLetters = {
            float: 'left',
            position: 'relative',
            width: '200%',
            height: '100%',
            animationName: 'sRight',
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
            <div style={twoLetters}>
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