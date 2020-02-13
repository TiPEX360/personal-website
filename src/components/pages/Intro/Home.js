import React, { Component } from 'react';
import AnimatedLetter from '../../AnimatedLetter.js';
import { Link } from 'react-router-dom';
import LoadingScreen from './LoadingScreen.js';

export default class Home extends Component {

    render() {

        const portrait = './media/silhouette.png';
        
        const flexStyle = {
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
        }
        
        const mainWrapperStyle = {
            position: 'relative',
            backgroundColor: 'transparent',
            width: '100%',
            minHeight: '100vh',
            textAlign: 'center',
            fontFamily: "'Major Mono Display', monospace",
            transition: 'transform 1s cubic-bezier(.77,0,.175,1)',
        }

        const portraitStyle = {
            maxWidth: 425,
            minWidth: 300,
            width: '50%',
            borderRadius: '100%',
            marginTop: 100,
            mixBlendMode: 'screen',
        }


        return (
                <div style={{...mainWrapperStyle, transform: 'translateY(' + this.props.position + '%)'}}>
                    <img style={portraitStyle} src={portrait} alt='face' />
                    <LoadingScreen />
                    <p><span style={{fontSize: 22}}>hi, i'm</span></p>
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
                    <p><span style={{fontSize: 15}}>(tym, for short)</span></p>
                    <Link onClick={this.props.hideHome} className="button" to='/more'>let me tell you a bit about myself!</Link>
                </div>
        )
    }
}
