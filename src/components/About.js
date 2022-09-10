import React from 'react';
import mountainsImage from "../assets/mountains.png";
import treesImage from "../assets/trees.png";
import city1Image from "../assets/city1.png";
import city2Image from "../assets/city2.png";
import about1 from "../assets/unnamed.jpg";

import '../assets/style/about.css';

function About() {
    return (
        <>
            <div className="about-container">
                <div className="about-right-left-side-container">
                    <div className="about-left-side">
                        <img src={mountainsImage} alt="mountains" className="about-mountains" />
                        <img src={treesImage} alt="trees" className="about-trees" />
                        <img src={city1Image} alt="city1" className="about-city1" />
                        <img src={city2Image} alt="city2" className="about-city2" />
                    </div>
                    <div className="about-right-side">
                        <div className="about-title">
                            <div className="about-user-icon-container">
                                <div className="about-user-icon">
                                    <div className="about-user-head"></div>
                                    <div className="about-user-body"></div>
                                </div>
                            </div>
                            <h1>About Me</h1>
                        </div>
                        <div className="est">est. 1996</div>
                        <img src={about1} alt="about1" id="about-image1" />
                        
                        <div className="about-text">
                            <div className="text1">
                                <h5>
                                    <strong>Lifelong learner, artist, and oxford comma user
                                        with the work ethic of a stonemason
                                    </strong>
                                </h5>
                                <p>
                                    I was born in <strong>Seattle, WA</strong> in 1996, where I currently
                                    still reside. Some day, I plan on escaping this gray-scale city to
                                    live in a place that the sun sees for more than 2 months out of the year -
                                    until that day, I comprimise by creating blindingly-bright websites and drinking
                                    craft beers!
                                </p>
                                <p>
                                    I am a musician at heart, and have been playing piano since I was 3. I've
                                    worked the trades (working on cars, brickmasonry/stonemasonry) and taught private 
                                    music lessons on and off since I graduated high school. I spent a short stint 
                                    studying music composition in college; however, I eventually decided to switch careers into tech
                                    and get out of the trades.
                                </p>
                            </div>
                            <div className="text2">
                                <p>
                                    I am currently attending the <strong>University of Washington Full-Stack Development Bootcamp</strong>,
                                    where I will graduate on September 17th. This program covered a wide range of topics, including:
                                </p>
                            </div>
                            <div className="bootcamp">
                                <h4><strong>HTML, CSS, JavaScript</strong></h4>
                                <div className="lists">
                                <ul>
                                    <li>Git</li>
                                    <li>Node</li>
                                    <li>Express.js</li>
                                    <li>MySQL</li>
                                    <li>NoSQL</li>
                                    <li>Web APIs</li>
                                    <li>OOP</li>
                                    <li>JavaScript CS</li>
                                </ul>
                                <ul>
                                    <li>Heroku</li>
                                    <li>React.js</li>
                                    <li>Sequelize</li>
                                    <li>MongoDB</li>
                                    <li>Insomnia</li>
                                    <li>Third-Party APIs</li>
                                    <li>PWAs</li>
                                    <li>MVC</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;