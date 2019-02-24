import React from 'react'

import MainNav from './Navigation_cp/mainNav'
import Home from './Home_cp/home'
import About from './About_cp/about'
import Contact from './Contact_cp/contact'
import Projects from './Projects_cp/projects'


import './App.css'

export default class PortfolioMain extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      navVisible: false,
      mainVisible: 0
    }

    /*
    mainVisible =
      Home = 0
      About = 1
      Projects = 2
      Contact = 3
    */
  }


  toggleNav() {

    console.log('ham clicked!')

    this.setState({
      navVisible: !this.state.navVisible,

    })

  }

  toggleMain(mainVal) {

    console.log('mainVal: ', mainVal)

    this.setState({
      // navVisible: !this.state.navVisible,
      mainVisible: mainVal
    })

    this.toggleNav()

  }

  render() {

    console.log('state: ', this.state)

    let mainDisplay, colorIcon;

    if (this.state.mainVisible === 0) {
      mainDisplay = <Home mainVisible={this.state.mainVisible} />
      colorIcon = 'colorIconBlk'
    }
    if (this.state.mainVisible === 1) {
      mainDisplay = <About mainVisible={this.state.mainVisible} />
      colorIcon = 'colorIconRd'
    }
    if (this.state.mainVisible === 2) {
      mainDisplay = <Projects mainVisible={this.state.mainVisible} />
      colorIcon = 'colorIconGrn'
    }
    if (this.state.mainVisible === 3) {
      mainDisplay = <Contact mainVisible={this.state.mainVisible} />
      colorIcon = 'colorIconBlu'
    }

    return (


      <div id='main' className='main'>

        <div className='menuDiv'>
          <div className='navIcon' id={colorIcon} onClick={() => this.toggleNav()}>&#9776;</div>
          <MainNav toggleNav={(mainVal) => this.toggleNav(mainVal)} navVisible={this.state.navVisible}
            toggleMain={(mainVal) => this.toggleMain(mainVal)} mainVisible={this.state.mainVisible} />
        </div>

        <div className='displayDiv'>

          {mainDisplay}

          <br /><br />


        </div>


          <footer>
          <div className='closeTag' id={colorIcon}>&lt; / &gt;</div>

            <p className='footerLink'>
                <a href="https://www.freepik.com/" target='_blank' rel='noopener noreferrer'>Images created by freepik - www.freepik.com</a></p>
          </footer>

      </div>



    )

  }

}

