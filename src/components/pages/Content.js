import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            opacity: 0.0,
        }
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({opacity: 0.8,})
        }, 500)
    }

    render() {

        const portrait = {
            maxWidth: 330,
            minWidth: 170,
            width: '17%',
            paddingTop: 100,
            marginLeft: 'auto',
            display: 'block',
            marginRight: 'auto',
            opacity: this.state.opacity,
            transition: 'opacity 1s',
        }

        return(
            <div className="content">
                <img src='./media/silhouette.png' style={portrait}/>
            </div>
        )
    }
}

export default Content