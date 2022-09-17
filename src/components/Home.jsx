import React from 'react';
import homePortrait from "../assets/self.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import githubIcon from "../assets/github-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import mountainsImage from "../assets/mountains.png";
import treesImage from "../assets/trees.png";
import city1Image from "../assets/city1.png";
import city2Image from "../assets/city2.png";

import '../assets/style/home.css';

export default function Home({ handlePageChange }) {
    return (
        <>
            <div className="home-container">
                <div className="front-page-text">
                    <h6>Hi there, I'm</h6>
                    <h1>Ryan Reeves</h1>
                    <h4>designer, developer, engineer</h4>
                </div>
                <div className="home-picture-bg">
                    <div className="social">
                        <img src={homePortrait} alt="home" className="home-picture" />

                        <div className="social-buttons">
                            <div className="base-icon-container">
                                <a href="#linkedin">
                                    <img src={linkedinIcon} alt="linkedin" id="linkedin-icon" className="base-icon" />
                                </a>
                                <a href="#githun">
                                    <img src={githubIcon} alt="github" id="github-icon" className="base-icon" />
                                </a>
                                <a href="#instagram">
                                    <img src={instagramIcon} alt="instagram" id="instagram-icon" className="base-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="home-nav">
                        <div className="home-nav-links">
                            <a href="#about" 
                                onClick={() => handlePageChange("About")}
                                id="home-about">› About</a>
                            <a href="#portfolio" 
                                onClick={() => handlePageChange("Portfolio")}
                                id="home-projects">› Projects</a>
                            <a href="#resume"
                                onClick={() => handlePageChange("Resume")}
                                id="home-resume">› Resume</a>
                            <a href="#contact"
                                onClick={() => handlePageChange("Contact")}
                                id="home-contact">› Contact</a>
                        </div>
                    </div>
                </div>
                <div className="home-right-left-side-container">
                    <div className="home-right-side">
                        
                    </div>
                    <div className="home-left-side">
                        <img src={mountainsImage} alt="mountains" className="home-mountains" />
                        <img src={treesImage} alt="trees" className="home-trees" />
                        <img src={city1Image} alt="city1" className="home-city1" />
                        <img src={city2Image} alt="city2" className="home-city2" />
                    </div>
                </div>
            </div>
        </>
    )
}