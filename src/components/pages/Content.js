import React, { Component } from 'react'

class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scrollPos: 0,
            dotAnimationProgress: 0.1,
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.0
        }
        let callback = this.stickyVisible.bind(this)
        let target = document.querySelector('#animated');
        let observer = new IntersectionObserver(callback, options)
        observer.observe(target)
    }

    stickyVisible(entries) {
        entries.forEach(entry => {
            console.log("observer")
            if (entry.isIntersecting) {
                window.addEventListener('scroll', this.handleScroll)
            } else {
                window.removeEventListener('scroll', this.handleScroll)
            }
        });
    }

    handleScroll() {
        let progress = ((document.querySelector('#sticky-wrapper').getBoundingClientRect().bottom / document.documentElement.clientHeight - 1) / (document.documentElement.getBoundingClientRect().height / document.documentElement.clientHeight - 1))
        if(progress > 1) progress = 1
        else if (progress < 0) progress = 0
        console.log(1 - progress)
        this.setState({dotAnimationProgress: 1 - progress})
    }

    render() {
        const stickyWrapper = {
            position: 'relative',
            backgroundColor: 'black',
            float: 'left',
            top: '100vh',
            height: '300vh',
            width: '100%',
            zIndex: -1,
        }

        const stickyArt = {
            position: 'sticky',
            textAlign: 'center',
            top: 'calc(50vh - 100pt)',
            //height: '100vh',
            //width: '100%',
            fontFamily: "'Lato', sans-serif",
            fontSize: 100,
            color: 'white',
        }

        const animatedDot = {
            position: 'relative',
            backgroundColor: 'white',
            borderRadius: '100%',
            width: 10,
            height: 10,
            top: 0,
            left: 'calc(50vw - 5px)',
        }

        const overflow = {
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
        }

        const dotScale = this.state.dotAnimationProgress * document.documentElement.getBoundingClientRect().width + 1.0
        return(
                <div id='sticky-wrapper' style={stickyWrapper}>
                    <div id='sticky' style={stickyArt}>
                        ABC
            
                    </div>
                    <div style={overflow}>
                        <div id='animated' style={{...animatedDot, transform: 'scale(' + dotScale + ')'}}></div>
                    </div>
                </div>
        )
    }
}

export default Content