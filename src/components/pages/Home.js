import React, { Component } from 'react';
import AnimatedLetter from '../AnimatedLetter.js';
import { Link } from 'react-router-dom';
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
            position: 'absolute',
            backgroundColor: '#f3f3f3',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
            width: '100%',
            minHeight: '100vh',
            textAlign: 'center',
            fontFamily: "'Major Mono Display', monospace",
            transition: 'transform 1s cubic-bezier(.77,0,.175,1)',
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
                <div style={{...mainWrapperStyle, transform: 'translateY(' + this.props.position + '%)'}}>
                    <img style={portraitStyle} src={portrait} alt='face' />
                    <Intro />
                    <p><span style={{fontSize: 22}}><b>hi</b>, <b>i</b>'<b>m</b></span></p>
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
                    <Link onClick={this.props.hide} className="button" to='/more'>let me tell you a bit about myself!</Link>
                </div>
            </React.Fragment>
        )
    }
}
