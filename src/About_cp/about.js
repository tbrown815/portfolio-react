import React from 'react'

import './about.css';

export default class About extends React.Component {

    render() {

        let isVisible = 'hide mainAbout';

        if (this.props.mainVisible === 1) {
            isVisible = 'display mainAbout';
        }

        return (

            <div id='mainAbout' className={isVisible}>

                <h3 className='sectionTitle'>About Me:</h3>
                <br />
                <p className='aboutContent' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
                <br />
                <p className='aboutContent' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            </div>
        )
    }
}