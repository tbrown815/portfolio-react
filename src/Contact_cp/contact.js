import React from 'react'

import './contact.css';

export default class Contact extends React.Component {

    //when component loads return to top of window
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        //default visibility of component is hidden
        let isVisible = 'hide mainContact';

        //if mainVisible is 3 this component will display
        if (this.props.mainVisible === 3) {
            isVisible = 'display mainContact';
        }

        //reusable variables for icon badges
        let email = <img className='contactIMG' src={require('../images/envelope-solid.svg')} title='E-mail Me @ tbrown@brownscastle.com' alt='email Icon' />
        let githubpro = <img className='contactIMG' src={require('../images/github-brands.svg')} title='GitHub Profile' alt='GitHub Icon' />
        let linkedin = <img className='contactIMG' src={require('../images/linkedin-brands.svg')} title='LinkedIn' alt='LinkedIn Icon' />

        return (

            <div id='mainContact' className={isVisible}>

                <h3 className='sectionTitle' id='colorIconBlu'>Contact Me:</h3>
                <br />
                <div className='contactContent' >
                    I'm looking forward to hearing from you so we can get to work!
                    <br /> <br />
                    Below are different ways to contact me:
                    <br /> <br />

                    <div className='contactLinks'>
                        <a className='link' href='mailto:tbrown@brownscastle.com' target='_blank' rel='noopener noreferrer'>{email} E-Mail Me</a>
                    </div>
                    <div className='contactLinks'>
                        <a className='link' href='https://github.com/BrotherFatcake' target='_blank' rel='noopener noreferrer'>{githubpro} GitHub Profile</a>
                    </div>
                    <div className='contactLinks'>
                        <a className='link' href='https://www.linkedin.com/in/tyler-brown-716431b' target='_blank' rel='noopener noreferrer'>{linkedin} LinkedIn Profile</a>
                    </div>

                </div>

            </div>

        )
    }
}