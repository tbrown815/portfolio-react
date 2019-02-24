import React from 'react'

import './projects.css';

export default class Projects extends React.Component {

    render() {

        let isVisible = 'hide projectsHome';

        if (this.props.mainVisible === 2) {
            isVisible = 'display projectsHome';
        }

        return (

            <div id='projectsHome' className={isVisible}>

                <h3 className='sectionTitle'>My Projects:</h3>
                <div className='projectItem'>
                    <h4 className='projectTitle' >Password Checker</h4>
                    <img src="https://github.com/BrotherFatcake/passwordcheck/blob/master/world-background2.svg.png?raw=true"
                        alt='passwordcheck' />
                    <br /><br />
                    <p className='projectContent' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et
                        dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat
                        cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </div>
                <div className='projectItem'>
                    <h4 className='projectTitle' >Challenge Accepted</h4>
                    <img src="https://github.com/BrotherFatcake/challengeaccepted/blob/master/public/running-background-sml.svg.png?raw=true"
                        alt='challengeaccepted' />
                    <br /><br />
                    <p className='projectContent' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et
                        dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat
                        cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </div>
                <div className='projectItem'>
                    <h4 className='projectTitle' >Dread Pirate Eats</h4>
                    <img src="https://github.com/BrotherFatcake/DreadPirateEats-React/blob/master/src/images/pirateship.svg.png?raw=true"
                        alt='DreadPirateEats' />
                    <br /><br />
                    <p className='projectContent' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et
                        dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat
                        cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </div>

            </div>
        )
    }
}