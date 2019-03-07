import React from 'react'

import './mainNav.css'

export default class LeftNav extends React.Component {

    //sets the mainVisible variable when van item is clicked and passes it to App.js to set the state
    toggleDisplay(val) {

        let mainVisible = val

        this.props.toggleMain(mainVisible)

    }

    render() {

        //depending on value of mainVisible different CSS will be set for the nav menu
        let homeMenu, aboutMenu, projectsMenu, contactMenu, navMenu, passCheck, challengeAccept, dreadPirate

        if (this.props.mainVisible === 0) {
            homeMenu = 'selHomeNav'
            navMenu = 'navMenuHome'
        }
        if (this.props.mainVisible === 1) {
            navMenu = 'navMenuAbout'
            aboutMenu = 'selAboutNav'
        }
        if (this.props.mainVisible === 2) {
            projectsMenu = 'selProjectsNav'
            navMenu = 'navMenuProjects'
            passCheck = <p id={projectsMenu} className='navSubProjects' aria-label='menu item' >
                <a href='#passCheck'>Password Checker</a></p>
            challengeAccept = <p id={projectsMenu} className='navSubProjects' aria-label='menu item' >
                <a href='#challege'>Challenge Accepted</a></p>
            dreadPirate = <p id={projectsMenu} className='navSubProjects' aria-label='menu item' >
                <a href='#dreadPirate'>Dread Pirate Eats</a></p>
        }
        if (this.props.mainVisible === 3) {
            contactMenu = 'selContactNav'
            navMenu = 'navMenuContact'
        }

        /* values available to use for compoenent display state
        mainVisible =
        Home = 0
        About = 1
        Projects = 2
        Contact = 3
        */

        return (

            <div id={navMenu} className='navMenu' >
                <div className='menuItems'>
                    <p id={homeMenu} className='navMenuSelect' aria-label='menu item' onClick={() => this.toggleDisplay(0)}>&lt; Home /&gt;</p>
                    <p id={aboutMenu} className='navMenuSelect' aria-label='menu item' onClick={() => this.toggleDisplay(1)}>&lt; About Me /&gt;</p>
                    <p id={projectsMenu} className='navMenuSelect' aria-label='menu item' onClick={() => this.toggleDisplay(2)}>&lt; Projects /&gt;</p>
                    {passCheck}
                    {challengeAccept}
                    {dreadPirate}
                    <p id={contactMenu} className='navMenuSelect' aria-label='menu item' onClick={() => this.toggleDisplay(3)}>&lt; Contact /&gt;</p>
                </div>
            </div>
        )
    }
}