import React, { useContext } from "react";
import currentPageContext from '../Container';
import icon from "../../assets/portfolio.png";
import '../../assets/style/about.css';

export default function Title() {
    const currentPage = useContext(currentPageContext);

    const aboutIcon =
        <div className="about-title">
            <div className="about-user-icon-container">
                <div className="about-user-icon">
                    <div className="about-user-head"></div>
                    <div className="about-user-body"></div>
                </div>
            </div>
            <h1>About Me</h1>
        </div>;
    const portfolioIcon =
        <div className="portfolio-title">
            <div className="portfolio-folder-icon-container">
                <img src={icon} alt='icon' className='portfolio-icon' />
            </div>
            <h1>Portfolio</h1>
        </div>
    const contactIcon = 
        <div className="contact-title">
            <div className="contact-mail-icon-container">
                <div className="mail-icon-top"></div>
                <div className="mail-icon-bottom"></div>
            </div>
            <h1>Contact</h1>
        </div>;

    const renderIcon = () => {
        switch({currentPage}) {
            case "About Me":
                return aboutIcon;
            case "Portfolio":
                return portfolioIcon;
            case "Contact":
                return contactIcon;
            default: 
                return (
                    <>
                        <h1>Hello</h1>
                        
                    </>
                );
        }
    }
    return (
        <>
        
            {renderIcon()}
        </>
    )
}