import React, { Component } from 'react'

class Slide extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topPosition: 0,
            bottomPosition: 100,
        }
    }

    render() {
        const slideWrapper = {
            width: '100%',
            minHeight: 15,
            position: 'absolute',
            top: this.props.top + 'vh',
            left: 0,
            height: 'calc(' + this.props.bottom + 'vh - ' + this.props.bottom + 'vh)',
            overflow: 'hidden',

        }

        const slideChild = {
            position: 'relative',
            top: this.props.top * -1 + 'vh',
        }

        return (
            <div style={slideWrapper}>
                <div style={slideChild}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Slide