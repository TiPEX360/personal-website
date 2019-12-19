import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './More.css';
import svgComputer from '../../svg/computer.svg'
import ComputerScienceSide from './ComputerScienceSide';
import ArtSide from './ArtSide';
import ClimbingSide from './ClimbingSide';
import GuitarSide from './GuitarSide';

export default class More extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sideShow: [false, false, false, false],
        }
        console.log("constructed!")
    }

    csEnter() {
        let temp = [true, false, false , false]
        this.setState({sideShow: temp})
    }

    climbingEnter() {
        let temp = [false, true, false , false]
        this.setState({sideShow: temp})
    }

    artEnter() {
        let temp = [false, false, true , false]
        this.setState({sideShow: temp})
    }

    guitarEnter() {
        let temp = [false, false, false , true]
        this.setState({sideShow: temp})
    }

    render() {

        const mainWrapperStyle = {
            position: 'absolute',
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#1d1d1f',
            textAlign: 'center',
            zIndex: '-1',
            
        }

        const pieWrapperStyle = {
            minWidth: '40%',
            minHeight: '40%',
            display: 'inline-block',
            position: 'relative',
            margin: 100,
        }

        const pieBorderStyle = {
            position: 'relative',
            width: '100%',
            height: '100%',
            paddingTop: '100%',
            borderRadius: '50%',
            borderWidth: 3,
            borderColor: '#f3f3f3',
            borderStyle: 'solid',
            overflow: 'hidden',
        }

        const quarterStyle = {
            width: 'calc(50% - 3px)',
            height: '50%',
            borderStyle: 'solid',
            borderWidth:1.5,
            borderColor: '#f3f3f3',
            position: 'relative',
            float: 'left',
            display: 'block',
        }

        const elementWrapperStyle = {
            position: 'absolute',
            top: -1.5,
            left: -1.5,
            bottom: -1.5,
            right: -1.5,
            textAlign: 'center',
        }

        const centerStyle = {
            position: 'absolute',
            top: 'calc(65% / 2)',
            left: 'calc(65% / 2)',
            width: '35%',
            height: '35%',
            backgroundColor: '#1d1d1f',
            borderWidth: 3,
            borderStyle: 'solid',
            borderRadius: '50%',
            borderColor: '#f3f3f3',
            zIndex: 1,
        }

        const leftContent = {
            left: 0,
            textAlign: 'left',
            width: 'calc(30% - 100px)',
        }
        
        const content = {
            position: 'absolute',
            top: 0,
            margin: 100,
            color: '#f3f3f3',
            fontFamily: 'Raleway',

        }

        const rightContent = {
            right: 0,
        }

        return(
            <div style={mainWrapperStyle}>
                <div style={pieWrapperStyle} >
                    <div style={pieBorderStyle}>
                        <div style={elementWrapperStyle}>
                            <div style={centerStyle}>

                            </div>
                            <div onMouseEnter={this.csEnter.bind(this)} className="pieOption1" style={quarterStyle}>

                            </div>
                            <div onMouseEnter={this.climbingEnter.bind(this)} className="pieOption2" style={quarterStyle}>
                                
                            </div>
                            <div onMouseEnter={this.guitarEnter.bind(this)} className="pieOption3" style={quarterStyle}>
                            
                            </div>
                            <div onMouseEnter={this.artEnter.bind(this)}className="pieOption4" style={quarterStyle}>
                            
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{...leftContent, ...content}}>
                    {this.state.sideShow[0] && <ComputerScienceSide />}
                </div>
                <div style={{...rightContent, ...content}}>
                {this.state.sideShow[1] && <ClimbingSide />}
                </div>
            </div>
        );
    }
}