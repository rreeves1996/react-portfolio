import React from 'react';
import { useState, useContext } from 'react';
import currentPageContext from './Container'


function Navbar({ handlePageChange }) {
    const [collapsed, collapseNav] = useState(true);

    const currentPage = useContext(currentPageContext);

    return (
        <>
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
                                handlePageChange("Home");
                            }}
                            className={{currentPage} === "Home" ? "nav-link nav-link-current" : "nav-link"}>
                            Home
                        </a>
                        <a href="#about" id="about"
                            onClick={() => handlePageChange("About Me")}
                            className={{currentPage} === "About" ? "nav-link nav-link-current" : "nav-link"}>
                            About
                        </a>
                        <a href="#portfolio" id="portfolio"
                            onClick={() => handlePageChange("Portfolio")}
                            className={{currentPage} === "Portfolio" ? "nav-link nav-link-current" : "nav-link"}>
                            Portfolio
                        </a>
                        <a href="#contact" id="contact"
                            onClick={() => handlePageChange("Contact")}
                            className={{currentPage} === "Contact" ? "nav-link nav-link-current" : "nav-link"}>
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;