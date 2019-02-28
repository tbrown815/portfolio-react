import React from 'react'

import './projects.css';

export default class Projects extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        let isVisible = 'hide projectsHome';

        if (this.props.mainVisible === 2) {
            isVisible = 'display projectsHome';
        }

        return (

            <div id='projectsHome' className={isVisible}>

                <h3 className='sectionTitle' id='colorIconGrn'>My Projects:</h3>
                <div className='projectItem'>
                    <h4 className='projectTitle' >Password Checker</h4>
                    <div className='projectSection'>
                        <img className='projectIMG passCheckIMG' src={require('../images/passcheckScreenshot.png')}
                            alt='passwordcheck' />
                        <div className='projectContent' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et
                            dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat
                            cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    </div>

                </div>
                <div className='projectItem'>
                    <h4 className='projectTitle' >Challenge Accepted</h4>
                    <div className='projectSection'>
                        <img className='projectIMG' src={require('../images/challengeAccScreenshot.png')}
                            alt='challengeaccepted' />

                        <div className='projectContent' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et
                            dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat
                            cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>

                </div>
                <div className='projectItem'>
                    <h4 className='projectTitle' >Dread Pirate Eats</h4>
                    <div className='projectSection'>
                        <img className='projectIMG' src={require('../images/dpeScreenshot.png')}
                            alt='DreadPirateEats' />

                        <div className='projectContent' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et
                            dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat
                            cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}