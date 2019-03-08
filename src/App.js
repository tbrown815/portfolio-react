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
      navIcon: false,
      mainVisible: 0,
      width: 0,
      project: null
    }
    window.addEventListener("resize", this.update);


    /* NOTES: values available to use for compoenent display state
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

  //get window width
  update = () => {
    if (window.innerWidth > 809) {
      this.setState({
        width: window.innerWidth,
        leftNavVisible: true,
        mobileNavVisible: false,
        navIcon: false
      });
    }
    else {
      this.setState({
        width: window.innerWidth,
        leftNavVisible: false,
        navIcon: true
      });
    }

  };

  //when return to top button clicked, return user to top and set state.project to null
  returnTop() {
    window.scrollTo({ top: 0, behavior: 'smooth'})
    this.setState({
      project: null
    })
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
      mainVisible: mainVal,
      project: null
    })
    // if screen width < 810 the mobile nav can be toggled true/false
    if (this.state.width < 810) {

      this.toggleNav()
    }

  }

  setProject(project) {
    this.setState({
      project: project
    })
  }


  render() {

    let mainDisplay, colorIcon, showUpIcon, footerLink, navMenuDisplay, navIcon

    let techIcon = <a href="https://fontawesome.com/license" target='_blank' rel='noopener noreferrer'>Icon Images created by Font Awesome - fontawesome.com</a>

    //IF statements to set values for different variable based on app state.
    //also used to set the component being displayed to users
    if (this.state.mainVisible === 0) {
      mainDisplay = <Home />
      colorIcon = 'colorIconBlk'
    }
    if (this.state.mainVisible === 1) {
      mainDisplay = <About />
      colorIcon = 'colorIconRd'
    }
    if (this.state.mainVisible === 2) {
      mainDisplay = <Projects returnTop={() => this.returnTop()} project={this.state.project}/>
      colorIcon = 'colorIconGrn'
      showUpIcon = <div className='upIcon' id={colorIcon} onClick={() => this.returnTop()}>&#8607;</div>
      footerLink = techIcon
    }
    if (this.state.mainVisible === 3) {
      mainDisplay = <Contact />
      colorIcon = 'colorIconBlu'
      footerLink = techIcon
    }
    if (this.state.leftNavVisible === true) {
      navMenuDisplay = <LeftNav toggleNav={(mainVal) => this.toggleNav(mainVal)} setProject={(project) => this.setProject(project)}
        toggleMain={(mainVal) => this.toggleMain(mainVal)} mainVisible={this.state.mainVisible} />
    }
    if (this.state.mobileNavVisible === true) {
      navMenuDisplay = <MobileNav toggleNav={(mainVal) => this.toggleNav(mainVal)} setProject={(project) => this.setProject(project)}
        toggleMain={(mainVal) => this.toggleMain(mainVal)} mainVisible={this.state.mainVisible} />
    }
    if (this.state.navIcon === true) {
      navIcon = <div className='navIcon' id={colorIcon} role='navigation' onClick={() => this.toggleNav()}>&#9776;</div>
    }


    return (


      <main id='main' className='main'>

        <div className='menuDiv'>
          {navIcon}
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

