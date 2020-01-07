import React, { Component } from 'react'

class StickySection extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        const stickySection = {
            position: 'relative',
            width: this.props.width,
            height: this.props.duration,
            zIndex: -1,
        }

        const sticky = {
            position: 'sticky',
            width: this.props.width,
            height: this.props.height,
        }

        return(
            <div className='sticky-wrapper' style={stickySection}>
                <div className='sticky' style={sticky}>

                </div>
            </div>
        )
    }
}

export default StickySection