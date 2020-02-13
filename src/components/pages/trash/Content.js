import React, { Component } from 'react'

class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scrollPos: 0,
            stickyProgress: 0.1,
            dotProgress: 0,
            position: 0,
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
        let target = document.querySelector('#observerTarget');
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
        let progress = 1 - ((document.querySelector('#sticky-wrapper').getBoundingClientRect().bottom / document.documentElement.clientHeight - 1) / (document.documentElement.getBoundingClientRect().height / document.documentElement.clientHeight - 1))
        if(progress < 0) progress = 0
        else if (progress > 1) progress = 1

        let dotProgress = progress < 0.5 ? 0 : (progress - 0.5) / 0.5
        
        this.setState(
            {
                stickyProgress: progress, 
                dotProgress: dotProgress
            }
        )
    }
    
    render() {
        const stickyWrapper = {
            position: 'relative',
            backgroundColor: 'black',
            float: 'left',
            height: '500vh',
            width: '100%',
            zIndex: -1,
        }
        
        const stickySection = {
            position: 'sticky',
            top: 0,
            height: '100vh',
            color: 'white',
            overflow: 'hidden',
            backgroundImage: 'url(./media/2.png)',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }
        
        const animatedDot = {
            display: 'inline-block',
            backgroundColor: 'white',
            borderRadius: '100%',
            width: 10,
            height: 10,
        }
        
        const bigStyle = {
            position: 'sticky',
            top: 20,
            fontSize: 100,
        }
        
        const foreGround = {
            backgroundColor: 'black',
            mixBlendMode: 'multiply',
            width: '100%',
            height: '100%',
        }
        
        const text = {
            position: 'absolute',
            fontSize: 20,
            fontFamily: "'Lato', sans-serif",
            textAlign: 'right',
            top: 'calc(50vh - 100pt)',
            right: '50vw',
        }
        
        const scrollingText = {
            height: '100pt',
            overflow: 'hidden',
        }

        const dotScale = this.state.dotProgress * (document.documentElement.getBoundingClientRect().width /2) + 1.0
        const textOffset = this.state.textProgres * (-300)
        console.log(this.state.dotProgress, this.state.stickyProgress)
        
        return(
            <div id='sticky-wrapper' style={{...stickyWrapper, top: 100 + this.props.position + 'vh',}}>
                <div id='sticky' style={stickySection}>
                    <div style={foreGround}>
                        <div style={text}>
                            I love<br />
                            <div style={bigStyle}>Coding.</div><br />
                            <div style={bigStyle}>Music.</div><br />
                            <div style={bigStyle}>Climbing.</div><br />
                            <span style={bigStyle}>CG Art</span>
                            <div id='observerTarget' style={{...animatedDot, transform: 'scale(' + dotScale + ')'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content