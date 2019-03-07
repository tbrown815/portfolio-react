import React from 'react'

import MobileNav from './Navigation_cp/mobileNav'
import LeftNav from './Navigation_cp/leftNav'
import Home from './Home_cp/home'
import About from './About_cp/about'
import Contact from './Contact_cp/contact'
import Projects from './Projects_cp/projects'

import './App.css'

export default class PortfolioMain extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      leftNavVisible: false,
      mobileNavVisible: false,
      mainVisible: 0,
      width: 0
    }
    window.addEventListener("resize", this.update);


    /* values available to use for compoenent display state
    mainVisible =
      Home = 0
      About = 1
      Projects = 2
      Contact = 3
    */
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    if (window.innerWidth > 809) {
      this.setState({
        width: window.innerWidth,
        leftNavVisible: true,
        mobileNavVisible: false
      });
    }
    else {
      this.setState({
        width: window.innerWidth,
        leftNavVisible: false
      });
    }

  };

  //when page loads return to top
  returnTop() {
    window.scrollTo(0, 0)
  }

  //sets Nav state to visible/not visible
  toggleNav() {

    this.setState({
      mobileNavVisible: !this.state.mobileNavVisible,

    })

  }

  //sets the mainVisible state value to determine the component to display
  toggleMain(mainVal) {

    this.setState({
      mainVisible: mainVal
    })

    if (this.state.width < 810) {

      this.toggleNav()
    }

  }




  render() {

    let mainDisplay, colorIcon, showUpIcon, footerLink, navMenuDisplay

    let techIcon = <a href="https://fontawesome.com/license" target='_blank' rel='noopener noreferrer'>Icon Images created by Font Awesome - fontawesome.com</a>

    //IF statements to set values for different variable based on app state.
    //also used to set the component being displayed to users
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
      showUpIcon = <div className='upIcon' id={colorIcon} onClick={() => this.returnTop()}>&#8607;</div>
      footerLink = techIcon
    }
    if (this.state.mainVisible === 3) {
      mainDisplay = <Contact mainVisible={this.state.mainVisible} />
      colorIcon = 'colorIconBlu'
      footerLink = techIcon
    }
    if (this.state.leftNavVisible === true) {
      navMenuDisplay = <LeftNav toggleNav={(mainVal) => this.toggleNav(mainVal)}
        toggleMain={(mainVal) => this.toggleMain(mainVal)} mainVisible={this.state.mainVisible} />
    }
    if (this.state.mobileNavVisible === true) {
      navMenuDisplay = <MobileNav toggleNav={(mainVal) => this.toggleNav(mainVal)}
        toggleMain={(mainVal) => this.toggleMain(mainVal)} mainVisible={this.state.mainVisible} />
    }


    return (


      <main id='main' className='main'>

        <div className='menuDiv'>
          <div className='navIcon' id={colorIcon} role='navigation' onClick={() => this.toggleNav()}>&#9776;</div>
          {navMenuDisplay}
          {showUpIcon}
        </div>

        <div className='displayDiv' id='displayDiv' role='region'>

          {mainDisplay}

          <br /><br />


        </div>


        <footer>
          <div className='closeTag' id={colorIcon}>&lt; / &gt;</div>

          <p className='footerLink'>
            {footerLink}
          </p>
        </footer>

      </main>



    )

  }

}

