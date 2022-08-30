import React from 'react';
import mountainsImage from "../assets/mountains.png";
import treesImage from "../assets/trees.png";
import city1Image from "../assets/city1.png";
import city2Image from "../assets/city2.png";
import about1 from "../assets/about1.png";
import { FaRegUserCircle } from 'react-icons/fa';
import '../assets/style/about.css';

function About() {
    return (
        <>
            <main>
                <div className="about-container">
                    <div className="about-title">
                        <h1>About Me</h1>
                    </div>
                <div className="right-left-side-container">
                    <div className="right-side">
                    <img src={about1} alt="about1" />
                    <div className="about-text">
                        <div className="text1"><h6>I am a young, enthusiastic developer dedicated to
                        learn as much as I can about software engineering & front-end development!
                        </h6></div>
                        <div className="text2"></div>
                    </div>
                    </div>
                        <div className="left-side">
                            <img src={mountainsImage} alt="mountains" className="home-mountains" />
                            <img src={treesImage} alt="trees" className="home-trees" />
                            <img src={city1Image} alt="city1" className="home-city1" />
                            <img src={city2Image} alt="city2" className="home-city2" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default About;