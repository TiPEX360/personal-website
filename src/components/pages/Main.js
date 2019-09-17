import React, { Component } from 'react';
import AnimatedLetter from '../AnimatedLetter.js';s

export default class Main extends Component {
    render() {
        const mainStyle = {
            width:'100%',
            height: '100%',
            backgroundImage: 'url("../../media/70279365_387949238570566_1176724492534153216_n (2).jpg")',
        }
        return (
            <div style={mainStyle}>
                <AnimatedLetter letter='t'/>
                <AnimatedLetter letter='t'/>
                <AnimatedLetter letter='t'/>
                <AnimatedLetter letter='t'/>
                <AnimatedLetter letter='t'/>
                <AnimatedLetter letter='t'/>
                <AnimatedLetter letter='t'/>
                <AnimatedLetter letter='t'/>
                <AnimatedLetter letter='t'/>
            </div>
        )
    }
}
