import React from 'react'

import './about.css';

export default class About extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {

        let isVisible = 'hide mainAbout';

        if (this.props.mainVisible === 1) {
            isVisible = 'display mainAbout';
        }

        return (

            <div id='mainAbout' className={isVisible}>

                <h3 className='sectionTitle' id='colorIconRd'>About Me:</h3>
                <br />
                <p className='aboutContent' >
                I'm a recent graduate of the Thinkful fullstack flex course.  Whether it's with a keyboard or my 
                hands I find building things to be extremely enjoyable and satisfying.  The hunt to find a usable solution 
                to unlock a new problem becomes an obsession that could rival Capt. Ahab!  I have a background in 
                software quality assurance which I feel gives me a unique perspective compared to a typical developer.  
                Over the years I found that I've become more and more interested in developing and building the products 
                and not just testing them. 

            </p>
                <br />
                <p className='aboutContent' >
                During my down time you will find me spending time with my family, working on home improvement 
                projects, and over the last year I've rekindled a love of Strongman and other strength sports.  
                I'm always looking for something to keep me engaged and actively enjoy learning about solutions 
                to projects around the house and in life.
            </p>

            </div>
        )
    }
}