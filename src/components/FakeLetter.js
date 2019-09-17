import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FakeLetter extends Component {
    render() {
        const twoLetters = {
            float: 'left',
            position: 'relative',
            width: '100%',
            height: '200%',
            top: '-100%',
            transition: 'transform 0.5s',
        }

        const letter = {
            position: 'relative',

            width: '10%',
            height: '50%',
        }

        return(
            <div className="hoverLetter" style={twoLetters}>
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
FakeLetter.propTypes = {
    letter: PropTypes.string.isRequired,
}

export default FakeLetter;