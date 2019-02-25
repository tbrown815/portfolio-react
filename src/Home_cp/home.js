import React from 'react'

import './home.css';

export default class Home extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        let isVisible = 'hide mainHome';

        if (this.props.mainVisible === 0) {
            isVisible = 'display mainHome';
        }

        return (

            <div id='mainHome' className={isVisible}>

                <div className='hiThere' id='colorIconBlk'>Hi there, I'm Tyler!</div>

                <br />

                <div className='welcomeSection' role="article">
                    <p className='homeContent' >I'm a fullstack web developer ready to get to work and build something amazing!</p>

                    <p className='homeContent' >                        
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>

            </div>
        )
    }
}