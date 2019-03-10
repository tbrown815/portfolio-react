import React from 'react'

import './contact.css';

export default class Contact extends React.Component {

    //when component loads return to top of window
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    mailTo(address) {
        let windowRef = window.open(`mailto:${address}`, `email_form`)

        setTimeout(function () {

            let origin
            console.log('origin 0: ', origin)

            //Check if origin of parent and popup are not equal and set origin false 
            try {
                if (windowRef.location.hostname !== window.parent.location.hostname) {
                    origin = false
                    console.log('origin 1: ', origin)

                    console.log('origin same try')
                }
            }
            //Catch error returned if parent and popup origin are not equal and set origin true
            catch (e) {
                console.log('origin not same catch')
                origin = true
                console.log('origin 2: ', origin)

                // return true; 
            }
            console.log('origin 3: ', origin)
            //if origin false close windowRef created for mailTo
            if (origin === false) {
                console.log('close')
                windowRef.close()
            }

        }, 3000)

    }

    render() {

        //                        <a className='link' href='mailto:tbrown@brownscastle.com' >{email} E-Mail Me</a>

        /*
                    <div className='contactLinks'>
                        <button type='button' className='link contactLink' onClick={() => this.mailTo('tbrown@brownscastle.com')} >{email} E-Mail Me </button>
                    </div>
                    <div className='contactLinks'>
                        <a className='link contactLink' href='https://github.com/BrotherFatcake' target='_blank' rel='noopener noreferrer'>{githubpro} GitHub Profile</a>
                    </div>
                    <div className='contactLinks'>
                        <a className='link contactLink' href='https://www.linkedin.com/in/tyler-brown-716431b' target='_blank' rel='noopener noreferrer'>{linkedin} LinkedIn Profile</a>
                    </div>

        */

        //reusable variables for icon badges

        let email = <img className='contactIMG emailIMG' src={require('../images/envelope-solid.svg')} title='E-mail Me @ tbrown@brownscastle.com' alt='email Icon' />
        let githubpro = <img className='contactIMG' src={require('../images/github-brands.svg')} title='GitHub Profile' alt='GitHub Icon' />
        let linkedin = <img className='contactIMG' src={require('../images/linkedin-brands.svg')} title='LinkedIn' alt='LinkedIn Icon' />

        return (

            <div id='mainContact'>

                <h1 className='sectionTitle' id='colorIconBlu'>Contact Me:</h1>
                <br />
                <div className='contactContent' >
                    I'm looking forward to hearing from you so we can get to work!
                    <br /> <br />
                    Below are different ways to contact me:
                    <br /> <br />

                    <div className='contactLinks'>
                        <button type='button' className='link contactButton' onClick={() => this.mailTo('tbrown@brownscastle.com')} >{email} E-Mail Me</button>
                    </div>
                    <div className='contactLinks'>
                        <button className='link contactButton' onClick={() => window.open('https://github.com/BrotherFatcake', '_blank')}>{githubpro} GitHub Profile</button>
                    </div>
                    <div className='contactLinks'>
                        <button className='link contactButton' onClick={() => window.open('https://www.linkedin.com/in/tyler-brown-716431b', '_blank')}>{linkedin} LinkedIn Profile</button>
                    </div>

                </div>

            </div>

        )
    }
}