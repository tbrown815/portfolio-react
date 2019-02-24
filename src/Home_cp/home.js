import React from 'react'

import './home.css';

export default class Home extends React.Component {

    render() {

        let isVisible = 'hide mainHome';

        if (this.props.mainVisible === 0) {
            isVisible = 'display mainHome';
        }

        return (

            <div id='mainHome' className={isVisible}>

                <div className='hiThere'>Hi there, I'm Tyler!</div>

                <br />

                <div className='welcomeSection' role="article">
                    <p className='homeContent' >I'm a fullstack web developer ready to get to work and build something amazing!</p>

                    <p className='homeContent' >Please use the menu on the left to learn more about me, 
                        see some of my projects and ways to contact me.</p>

                </div>

            </div>
        )
    }
}