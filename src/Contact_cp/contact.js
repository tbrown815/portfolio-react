import React from 'react'

import './contact.css';

export default class Contact extends React.Component {

    render() {

        let isVisible = 'hide mainContact';

        if (this.props.mainVisible === 3) {
            isVisible = 'display mainContact';
        }

        return (

            <div id='mainContact' className={isVisible}>

                <h3 className='sectionTitle'>Contact Me:</h3>
                <br />
                <p className='contactContent' >
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