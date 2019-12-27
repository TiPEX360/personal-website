import React, { Component } from 'react'
import Slide from './Slide.js';

class Slides extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            noChildren: 0,
            scrollPos: 0,
            scrollHeight: 1080*3
        }
    }

    componentDidMount() {
        this.setState({noChildren: React.Children.count(this.props.children)})
    }

    onWheel(e) {
        let scrollPos = this.state.scrollPos + (e.deltaY / this.state.scrollHeight)
        if (scrollPos < 0) {
            scrollPos = 0
        } else if (scrollPos > 1) {
            scrollPos = 1
        }
        this.setState({scrollPos: scrollPos})
        console.log(this.state.scrollPos)
    } 

    render() {
        const slidesWrapper = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            zIndex: -1,
        }
        
        const childrenWithProps = React.Children.map(this.props.children, (child, index) => {
            
            const top = index * (this.state.scrollPos / this.state.noChildren) + index * 10
            const bottom = (index + 1) * (this.state.scrollHeight / this.state.noChildren) - this.state.noChildren * 10 + index * 10

            return <Slide top={top} bottom={bottom}></Slide>
        })

        return (
            <div onWheel={this.onWheel.bind(this)} style={slidesWrapper}>
                {childrenWithProps}
            </div>
        )
    }
}

export default Slides