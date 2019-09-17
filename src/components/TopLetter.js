import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopLetter extends Component {
    render() {
        const twoLetters = {
            float: 'left',
            position: 'relative',
            width: '100%',
            height: '200%',
            top: '-100%',
            animationName: 'sTop',
            animationDuration: '5s',
            animationDelay: ((Math.random()*4) + 's'),
            animationIterationCount: 'infinite',

        }

        const letter = {
            position: 'relative',

            width: '10%',
            height: '50%',
        }

        return(
            <div style={twoLetters}>
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
TopLetter.propTypes = {
    letter: PropTypes.string.isRequired,
}

export default TopLetter;