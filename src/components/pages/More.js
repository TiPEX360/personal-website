import React, { Component } from 'react';
import './More.css';

export default class More extends Component {


// /* Color Theme Swatches in Hex */
// .Tema-de-Color-1-1-hex { color: #1D1D1F; }
// .Tema-de-Color-1-2-hex { color: #268391; }
// .Tema-de-Color-1-3-hex { color: #1C2126; }
// .Tema-de-Color-1-4-hex { color: #D25242; }
// .Tema-de-Color-1-5-hex { color: #E3864F; }

    render() {

        const mainWrapperStyle = {
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#1d1d1f',
            textAlign: 'center',
        }

        const pieWrapperStyle = {
            minWidth: '40%',
            minHeight: '40%',
            display: 'inline-block',
            position: 'relative',
            margin: 200,
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
            zIndex: 2,
        }

        return(
            <div style={mainWrapperStyle}>
                <div style={pieWrapperStyle} >
                    <div style={pieBorderStyle}>
                        <div style={elementWrapperStyle}>
                            <div style={centerStyle}>

                            </div>
                            <div className="pieOption1" style={quarterStyle}>

                            </div>
                            <div className="pieOption2" style={quarterStyle}>
                                
                            </div>
                            <div className="pieOption3" style={quarterStyle}>
                            
                            </div>
                            <div className="pieOption4" style={quarterStyle}>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}