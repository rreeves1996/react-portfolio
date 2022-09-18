import React from 'react';
import { useState } from 'react';
import stars1 from '../assets/stars1.png';
import stars2 from '../assets/stars2.png';
import stars3 from '../assets/stars3.png';


function Navbar({ currentPage, handlePageChange }) {
    const [collapsed, collapseNav] = useState(true);


    return (
        <>
            {/* TODO: Remove these from navbar and add to wrapper */}
            <img src={stars1} alt="stars1" id="stars1" className="object" data-value="6" />
            <img src={stars2} alt="stars2" id="stars2" className="object" data-value="3" />
            <img src={stars3} alt="stars3" id="stars3" className="object" data-value="2" />
            <nav className="navbar">
                <div className="navbar-bg"></div>
                <a href="#home" className="navbar-brand" onClick={() => handlePageChange("Home")}>
                    <h1>rreeves</h1>
                    <h2>dev</h2>
                </a>
                <button className={collapsed ? 'nav-burger' : 'nav-burger active'}
                    onClick={() => collapseNav(!collapsed)}>
                    <div className='burger-bar' id='burger-bar1'></div>
                    <div className='burger-bar' id='burger-bar2'></div>
                    <div className='burger-bar' id='burger-bar3'></div>
                </button>
                <div className={collapsed ? 'navbar-collapse collapsed' : 'navbar-collapse'}>
                    <div className="nav">
                        <a href="#home" id="home" 
                            onClick={() => {
                                let navbar = document.querySelector('.navbar-collapse');
                                handlePageChange("Home");
                            }}
                            className={currentPage === "Home" ? "nav-link nav-link-current" : "nav-link"}>
                            Home
                        </a>
                        <a href="#about" id="about"
                            onClick={() => handlePageChange("About")}
                            className={currentPage === "About" ? "nav-link nav-link-current" : "nav-link"}>
                            About
                        </a>
                        <a href="#portfolio" id="portfolio"
                            onClick={() => handlePageChange("Portfolio")}
                            className={currentPage === "Portfolio" ? "nav-link nav-link-current" : "nav-link"}>
                            Portfolio
                        </a>
                        <a href="#contact" id="contact"
                            onClick={() => handlePageChange("Contact")}
                            className={currentPage === "Contact" ? "nav-link nav-link-current" : "nav-link"}>
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;