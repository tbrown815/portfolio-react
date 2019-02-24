import React from 'react'

import './mainNav.css'

export default class MainNav extends React.Component {

    toggleDisplay(val) {

        let mainVisible = val

        this.props.toggleMain(mainVisible)

    }

    render() {

        let isVisible = 'hide navMenu';

        if (this.props.navVisible) {
            isVisible = 'display navMenu';
        }

        return (

            <div id='navMenu' className={isVisible} >
                <p className='navClose' onClick={() => this.props.toggleNav()}>Close X</p>
                <div className='menuItems'>
                    <p className='navMenuSelect' onClick={() => this.toggleDisplay(0)}>Home</p>
                    <p className='navMenuSelect' onClick={() => this.toggleDisplay(1)}>About Me</p>
                    <p className='navMenuSelect' onClick={() => this.toggleDisplay(2)}>Projects</p>
                    <p className='navMenuSelect' onClick={() => this.toggleDisplay(3)}>Contact</p>
                </div>
            </div>
        )
    }
}