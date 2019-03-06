import React from 'react'

import './projects.css';

export default class Projects extends React.Component {

    //when component loads return to top of window
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        //default visibility of component is hidden
        let isVisible = 'hide projectsHome';

        //if mainVisible is 2 this component will display
        if (this.props.mainVisible === 2) {
            isVisible = 'display projectsHome';
        }

        //link for link so description text is less cluttered looking in code
        let pwnedLink = <a href='https://haveibeenpwned.com/' target='_blank' rel='noopener noreferrer'>Have I Been Pwned</a>

        //reusable variables for icon badges
        let htmlIcon = <img className=' tech techIMG' src={require('../images/html5-brands.svg')} title='HTML' alt='HTML Icon' />
        let cssIcon = <img className=' tech techIMG' src={require('../images/css3-alt-brands.svg')} title='CSS' alt='CSS Icon' />
        let jsIcon = <img className=' tech techIMG' src={require('../images/js-brands.svg')} title='Javascript' alt='Javascript Icon' />
        let nodeIcon = <img className=' tech techIMG' src={require('../images/node-js-brands.svg')} title='NodeJS' alt='NodeJS Icon' />
        let reactIcon = <img className=' tech techIMG' src={require('../images/react-brands.svg')} title='ReactJS' alt='reactjs Icon' />
        let mongoIcon = <img className=' tech techIMG' src={require('../images/Mongodb.svg')} title='MongoDB' alt='mongodb Icon' />
        let jQueryIcon = <img className=' tech techIMG' src={require('../images/jqueryIcon2.png')} title='jQuery' alt='jQuery Icon' />

        let githubIcon = <img className=' tech linkIMG' src={require('../images/github-brands.svg')} title='GitHub Repo' alt='github Icon' />
        let liveSiteIcon = <img className=' tech linkIMG' src={require('../images/power-off-solid.svg')} title='Live Site' alt='livesite Icon' />


        return (

            <div id='projectsHome' className={isVisible} role='region'>

                <h1 className='sectionTitle' id='colorIconGrn'> My Projects:</h1>


                <div className='projectItem'>
                    <h2 className='projectTitle' >Password Checker</h2>
                    <div className='projectSection' role='article'>
                        <div className='projectIMG section' >
                            <img src={require('../images/passcheckScreenshot.png')}
                                alt='passwordcheck' />
                        </div>
                        <div className='projectContent'  role='article'>
                            I created this project to help people fix their terrible passwords.  Many people don't take the time to come
                            up with a good password.  People use their spouse's, kids', or pet's names and maybe throw some numbers on to the
                            end if it's required.  Then sit back and think "This is strong, no one will get this!".  This application
                    allows a user to enter a password so that it can be compared to passwords stored in the compromised password database of '{pwnedLink}'.
                                    Additionally, users can create new passwords or pass phrases in the application and those new passwords are also compared to the
                                    compromised password database.
            <div className='imageTech'>
                                <div className='techBadge'>
                                    {htmlIcon}{cssIcon}{jsIcon}{jQueryIcon}
                                </div>
                                <div className='demoLinks'>
                                    <a className='repoLink' href='https://github.com/BrotherFatcake/passwordcheck' target='_blank'
                                        rel='noopener noreferrer'>{githubIcon} Access Repo</a>
                                </div>
                                <div className='demoLinks'>
                                    <a className='repoLink' href='https://brotherfatcake.github.io/passwordcheck/index.html' target='_blank'
                                        rel='noopener noreferrer'>{liveSiteIcon} Access Live Site</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='projectItem'>
                    <h2 className='projectTitle' >Challenge Accepted</h2>
                    <div className='projectSection' role='article'>
                        <div className='projectIMG section' >
                            <img src={require('../images/challengeAccScreenshot.png')}
                                alt='challengeaccepted' />
                        </div>
                        <div className='projectContent' role='article'>
                            I wanted to become fittish to be sure that I could keep up with a potential future child so I bought a fitness
                            tracker.  The application was sufficient except for one place - challenges.  All of the challenges were geared towards steps,
                            yet the tracker and its application documented floors, miles, activitive also.  Why were there no challenges for those data points?
                            After looking around at other applications I noticed that seemed to be the trend - steps only. Boring!  In its current state users
                            are able to document their steps and miles.My goal with this project is to create a place where users can track their activiities
                            and challenge each other to steps as well as those additional data points.
    
            <div className='imageTech'>
                                <div className='techBadge'>
                                    {htmlIcon}{cssIcon}{jsIcon}{jQueryIcon}{nodeIcon}{mongoIcon}
                                </div>
                                <div className='demoLinks'>

                                    <a className='repoLink' href='https://github.com/BrotherFatcake/challengeaccepted' target='_blank'
                                        rel='noopener noreferrer'>{githubIcon} Access Repo</a>
                                </div>
                                <div className='demoLinks'>

                                    <a className='repoLink' href='https://mysterious-forest-20103.herokuapp.com/' target='_blank'
                                        rel='noopener noreferrer'>{liveSiteIcon} Access Live Site</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='projectItem'>
                    <h2 className='projectTitle' >Dread Pirate Eats</h2>
                    <div className='projectSection' role='article'>
                        <div className='projectIMG section' >
                            <img src={require('../images/dpeScreenshot.png')}
                                alt='DreadPirateEats' />
                        </div>
                        <div className='projectContent section' role='article'>
                            The Dread Pirate Eats started as a solution to a problem my wife and I had.  Many nights we would struggle to agree on
                            where we were going to eat.  One evening we put the names of our favorite places into an old pirate cookie jar, created rules
                            to prevent us from drawing all of the names and the Dred Pirate Eats was born.  The app currently has two modes of operation - public
                            and account.  Public mode allows a user to search for restaurants by zip code.  The application will return results and link them to the
                            associated Yelp page.  Account mode give the user a "digital cookie jar".  They can search for specific restaurants and save them to
                            their favorites.  While playing the game results are generated direcly from their favorites along with links to the restaurants
                            associated Yelp page.
                    <div className='imageTech'>
                                <div className='techBadge'>
                                    {htmlIcon}{cssIcon}{jsIcon}{reactIcon}{nodeIcon}{mongoIcon}
                                </div>
                                <div className='demoLinks'>
                                    <a className='repoLink' href='https://github.com/BrotherFatcake/DreadPirateEats-React' target='_blank'
                                        rel='noopener noreferrer'>{githubIcon} Access UI Repo</a>
                                </div>
                                <div className='demoLinks'>

                                    <a className='repoLink' href='https://github.com/BrotherFatcake/DreadPirateEats-API' target='_blank'
                                        rel='noopener noreferrer'>{githubIcon} Access API Repo</a>
                                </div>

                                <div className='demoLinks'>
                                    <a className='repoLink' href='https://shielded-eyrie-90605.herokuapp.com' target='_blank'
                                        rel='noopener noreferrer'>{liveSiteIcon} Access Live Site</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
