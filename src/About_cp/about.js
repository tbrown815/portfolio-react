import React from 'react'

import './about.css';

export default class About extends React.Component {

    //when component loads return to top of window
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        //default visibility of component is hidden
        let isVisible = 'hide mainAbout';

        //if mainVisible is 2 this component will display
        if (this.props.mainVisible === 1) {
            isVisible = 'display mainAbout';
        }

        return (

            <div id='mainAbout' className={isVisible} role='region'>

                <h1 className='sectionTitle' id='colorIconRd'>About Me:</h1>
                <br />
                <p className='aboutContent' role='article'>
                    I'm a recent graduate of the Thinkful fullstack flex course.  I find building or improving things to be
                    enjoyable and satisfying.  I have a background in software quality assurance which I feel gives me a unique
                    perspective that many developers may not have. I am dedicated to the products I support and take pride in knowing
                    that they will benefit all who use them.  Over the years working as part of project teams with developers
                    and others I have found that I want to have a greater part in the developement cycle by creating the products,
                    not just testing them.
                    <br /><br />
                    In my down time you will find me spending time with my family, working on home improvement projects.
                    I'm always looking for something to keep me engaged and actively enjoy learning about solutions to
                    projects around the house and in life.

                </p>
                <br />
                <div className='aboutContent' role='article'>
                    Technologies and resources that I've used in my projects:
                    <br /><br />

                    <ul className='contentList' role='list'>
                        <li role='listitem'>bcryptjs</li>
                        <li role='listitem'>Chai/Chai-http</li>
                        <li role='listitem'>CORS</li>
                        <li role='listitem'>CSS</li>
                        <li role='listitem'>Enzyme</li>
                        <li role='listitem'>Express.js</li>
                        <li role='listitem'>Faker</li>
                        <li role='listitem'>Git/GitHub</li>
                        <li role='listitem'>Heroku</li>
                        <li role='listitem'>HTML </li>
                        <li role='listitem'>JavaScript </li>
                        <li role='listitem'>Jest</li>
                        <li role='listitem'>JQuery </li>
                        <li role='listitem'>JSON Web Token</li>
                        <li role='listitem'>JSX</li>
                        <li role='listitem'>jwt-decode</li>
                        <li role='listitem'>mLab</li>
                        <li role='listitem'>Mocha</li>
                        <li role='listitem'>Mongo DB</li>
                        <li role='listitem'>Mongoose</li>
                        <li role='listitem'>Morgan</li>
                        <li role='listitem'>Node.js</li>
                        <li role='listitem'>Passport.js</li>
                        <li role='listitem'>Postman</li>
                        <li role='listitem'>React-Redux</li>
                        <li role='listitem'>ReactJS</li>
                        <li role='listitem'>Redux-Thunk</li>
                        <li role='listitem'>Travis CI</li>

                    </ul>


                </div>

            </div>
        )
    }
}