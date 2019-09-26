import React, { Component } from 'react';
import AnimatedLetter from '../AnimatedLetter.js';
import Intro from './Intro.js';

export default class Home extends Component {
    render() {
        const portrait = './media/main.jpg';
        
        const flexStyle = {
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
        }
        
        const mainWrapperStyle = {
            backgroundColor: '#f3f3f3',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
            width: '100%',
            height: '100%',
            textAlign: 'center',
            fontFamily: "'Major Mono Display', monospace",
        }

        const portraitStyle = {
            maxWidth: 330,
            minWidth: 170,
            width: '17%',
            borderRadius: '100%',
            margin: 100,
        }

        return (
            <React.Fragment>
                <div style={mainWrapperStyle}>
                    <img style={portraitStyle} src={portrait} alt='face' />
                    <Intro />
                    <p><span style={{fontSize: 28}}>hi, i'm</span></p>
                    <div style={flexStyle}>
                        <AnimatedLetter letter='t'/>
                        <AnimatedLetter letter='y'/>
                        <AnimatedLetter letter='m'/>
                        <AnimatedLetter letter="o"/>
                        <AnimatedLetter letter='t'/>
                        <AnimatedLetter letter='e'/>
                        <AnimatedLetter letter='u'/>
                        <AnimatedLetter letter='s'/>
                        <AnimatedLetter letter='z'/> 
                    </div>
                    <p>(tym, for short)</p>
                    <div className="button"><p>let me tell you a bit more about myself!</p></div>
                </div>
            </React.Fragment>
        )
    }
}
