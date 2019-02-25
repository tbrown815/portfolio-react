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

        let homeMenu, aboutMenu, projectsMenu, contactMenu, navMenu

        if (this.props.mainVisible === 0) {
            homeMenu = 'selHomeNav'
            navMenu = 'navMenuHome'
        }
        if (this.props.mainVisible === 1) {
            aboutMenu = 'selAboutNav'
            navMenu = 'navMenuAbout'
        }
        if (this.props.mainVisible === 2) {
            projectsMenu = 'selProjectsNav'
            navMenu = 'navMenuProjects'
        }
        if (this.props.mainVisible === 3) {
            contactMenu = 'selContactNav'
            navMenu = 'navMenuContact'
        }

        /*
        mainVisible =
        Home = 0
        About = 1
        Projects = 2
        Contact = 3
        */

        return (

            <div id={navMenu} className={isVisible} >
                <p className='navClose' onClick={() => this.props.toggleNav()}>&lt; Close /&gt;</p>
                <div className='menuItems'>
                    <p id={homeMenu} className='navMenuSelect' onClick={() => this.toggleDisplay(0)}>&lt; Home /&gt;</p>
                    <p id={aboutMenu} className='navMenuSelect' onClick={() => this.toggleDisplay(1)}>&lt; About Me /&gt;</p>
                    <p id={projectsMenu} className='navMenuSelect' onClick={() => this.toggleDisplay(2)}>&lt; Projects /&gt;</p>
                    <p id={contactMenu} className='navMenuSelect' onClick={() => this.toggleDisplay(3)}>&lt; Contact /&gt;</p>
                </div>
            </div>
        )
    }
}