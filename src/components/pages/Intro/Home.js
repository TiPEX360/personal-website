import React, { Component } from 'react';
import AnimatedLetter from '../../AnimatedLetter.js';
import { Link } from 'react-router-dom';
import LoadingScreen from './LoadingScreen.js';

export default class Home extends Component {

    render() {

        const portrait = './media/silhouette.jpeg';
        
        const flexStyle = {
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
        }
        
        const mainWrapperStyle = {
            position: 'fixed',
            backgroundColor: '#000000',
            background: 'linear-gradient(0deg, rgba(18,15,10,1) 0%, rgba(29,29,18,1) 25%, rgba(24,29,18,1) 50%, rgba(25,36,27,1) 75%, rgba(19,28,20,1) 100%)',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
            width: '100%',
            minHeight: '100vh',
            textAlign: 'center',
            fontFamily: "'Major Mono Display', monospace",
            transition: 'transform 1s cubic-bezier(.77,0,.175,1)',
            height: '100%',
            overflowY: 'scroll',
        }

        const portraitStyle = {
            maxWidth: 425,
            minWidth: 170,
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
