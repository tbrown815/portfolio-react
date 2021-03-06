import React from 'react'

import './about.css';

export default class About extends React.Component {

    //when component loads return to top of window
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (

            <div id='mainAbout' role='region'>

                <h1 className='sectionTitle' id='colorIconRd'>About Me:</h1>
                <br />
                <p className='aboutContent' role='article'>
                    I'm a recent graduate of the Thinkful fullstack flex course.  I find building or improving things to be
                    enjoyable and satisfying.  I have a background in software quality assurance which I feel gives me a unique
                    perspective that many developers may not have. I am dedicated to the products I support and take pride in knowing
                    that they will benefit all who use them.  Over the years, working as part of project teams with developers
                    and others, I have found that I want to have a greater part in the development cycle by creating the products -
                    not just testing them.
                    <br /><br />
                    In my downtime you will find me spending time with my family or working on home improvement projects.
                    I'm always looking for something to keep me engaged and I really enjoy learning about solutions to
                    projects around the house and in life.

                </p>
                <br />
                <div className='aboutContent' role='article'>
                    Technologies and resources that I've used in my projects:
                    <br /><br />

                    <ul className='contentList'>
                        <li>bcryptjs</li>
                        <li>Chai/Chai-http</li>
                        <li>CORS</li>
                        <li>CSS</li>
                        <li>Enzyme</li>
                        <li>Express.js</li>
                        <li>Faker</li>
                        <li>Git/GitHub</li>
                        <li>Heroku</li>
                        <li>HTML </li>
                        <li>JavaScript </li>
                        <li>Jest</li>
                        <li>JQuery </li>
                        <li>JSON Web Token</li>
                        <li>JSX</li>
                        <li>jwt-decode</li>
                        <li>mLab</li>
                        <li>Mocha</li>
                        <li>Mongo DB</li>
                        <li>Mongoose</li>
                        <li>Morgan</li>
                        <li>Node.js</li>
                        <li>Passport.js</li>
                        <li>Postman</li>
                        <li>React-Redux</li>
                        <li>ReactJS</li>
                        <li>Redux-Thunk</li>
                        <li>Travis CI</li>

                    </ul>

                </div>

            </div>
        )
    }
}