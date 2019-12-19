import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";


export default class ComputerScienceSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: -150,
            array: 150,
        }
    }

    componentDidMount() {
        console.log("mounted!")
        setTimeout(this.drawSvg.bind(this), 1)
    }
    
    drawSvg() {
        console.log("drawing")
        this.setState({offset: 0})
    }

    render() {

        const heading = {
            fontFamily: "'Major Mono Display', monospace",
            fontSize: 21,
        }

        const svg = {
            transition: 'stroke-dashoffset 2s',
        }

        return (
            <React.Fragment>
                <span style={heading}>// computer science</span>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path style={svg} strokeDasharray={this.state.array} strokeDashoffset={this.state.offset} fill="none" stroke="#d1d1d1" strokeWidth="0.1" d="M32,22V3H7V5H0V26H12V22h6v3H14v1H25V25H21V22H32ZM7,18H3V16H7v2Zm0-5H1V10H7v3ZM7,6V9H1V6H7Zm4,19H1V14H7v1H2v4H7v3h4v3ZM8,21V4H31V21H8Zm12,4H19V22h1v3Z"/>
                    <path style={svg} strokeDasharray={this.state.array} strokeDashoffset={this.state.offset} fill="none" stroke="#d1d1d1" strokeWidth="0.1" d="M30,5H9V20H30V5ZM29,19H10V6H29V19Z"/>
                </svg>
            </React.Fragment>
        );
    }
}


