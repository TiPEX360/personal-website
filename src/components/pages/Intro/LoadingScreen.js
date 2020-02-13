import React, { Component } from 'react';

export default class LoadingScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 0,
        }
    }
    
    componentDidMount() {
        document.body.classList.add('preventScroll');
        setTimeout(this.move.bind(this), 2000);
    }

    move() {
        this.setState({position: -100});
    }

    render() {
        const introStyle = {
            position: 'fixed',
            top: 0,
            height: '100%',
            width: '100%',
            backgroundColor: '#1D1D1F',
            transition: 'transform 1s cubic-bezier(.77,0,.175,1).2s',
            
        }
        
        return(
            <div style={{...introStyle, transform: 'translateY(' + this.state.position + '%)'}}> </div>
        );
    }
}