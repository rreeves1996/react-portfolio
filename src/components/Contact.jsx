import React from 'react';
import mountainsImage from "../assets/mountains.png";
import treesImage from "../assets/trees.png";
import city1Image from "../assets/city1.png";
import city2Image from "../assets/city2.png";
import homePortrait from "../assets/self.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import githubIcon from "../assets/github-icon.png";
import instagramIcon from "../assets/instagram-icon.png";

import '../assets/style/contact.css';

function Contact() {
    return (
        <>
            <div className="contact-container">
                <div className="contact-right-left-side-container">
                    <div className="contact-left-side">
                        <img src={mountainsImage} alt="mountains" className="contact-mountains" />
                        <img src={treesImage} alt="trees" className="contact-trees" />
                        <img src={city1Image} alt="city1" className="contact-city1" />
                        <img src={city2Image} alt="city2" className="contact-city2" />
                    </div>
                    <div className="contact-right-side">

                        <div className="contact-title">
                            <div className="contact-mail-icon-container">
                                <div className="mail-icon-top"></div>
                                <div className="mail-icon-bottom"></div>
                            </div>
                            <h1>Contact</h1>
                        </div>
                        <div className="mobile-banner-container">
                            <div className="mobile-banner"></div>
                        </div>
                        <div className="contact-socials-side">
                            <h6>
                                <strong>I am actively looking for opportunities that will help me develop
                                my skillset as a software engineer and front-end developer!</strong>
                            </h6>
                            <div className="contact-info">
                                <div className="col left-side">
                                    <p><strong>Name</strong>: Ryan Reeves</p>
                                    <p><strong>Phone</strong>: (425) 418-3963</p>
                                    <p><strong>Email</strong>: rreeves.dev@gmail.com</p>
                                    <p><strong>Location</strong>: Bothell, WA</p>
                                    <p><strong>Timezone</strong>: PDT (GMT - 07:00)</p>
                                    <div className="contact-social-buttons">
                                        <a href="#linkedin">
                                            <img src={linkedinIcon} alt="linkedin" id="linkedin-icon" className="contact-base-icon" />
                                        </a>
                                        <a href="#github">
                                            <img src={githubIcon} alt="github" id="github-icon" className="contact-base-icon" />
                                        </a>
                                        <a href="#instagram">
                                            <img src={instagramIcon} alt="instagram" id="instagram-icon" className="contact-base-icon" />
                                        </a>
                                        <a href="#instagram">
                                            <img src={instagramIcon} alt="facebook" id="facebook-icon" className="contact-base-icon" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col">
                                    <img class="contact-picture" id="contact-picture" src={homePortrait} />
                                </div>
                            </div>
                            <div className="mobile-social-buttons">
                                <a href="#linkedin">
                                    <img src={linkedinIcon} alt="linkedin" id="linkedin-icon" className="mobile-icon" />
                                </a>
                                <a href="#github">
                                    <img src={githubIcon} alt="github" id="github-icon" className="mobile-icon" />
                                </a>
                                <a href="#instagram">
                                    <img src={instagramIcon} alt="instagram" id="instagram-icon" className="mobile-icon" />
                                </a>
                                <a href="#instagram">
                                    <img src={instagramIcon} alt="facebook" id="facebook-icon" className="mobile-icon" />
                                </a>
                            </div>
                            <p className="resume-text">Click <a href="#">here</a> to view my resume</p>
                        </div>
                        <div className="contact-form-side">
                            <h1>Don't be shy...</h1>
                            <form className="contact-form">
                                <div className="container-row">
                                    <div className="contact-sub-container">
                                        <label id="name-label" for="name">Name:</label>
                                        <input type="text" id="name" className="contact-name" autocomplete="off" spellcheck="off" placeholder='First and last...' />
                                    </div>
                                    <div className="contact-sub-container">
                                        <label id="email-label" for="email">Email:</label>
                                        <input type="text" id="email" className="contact-email" autocomplete="off" spellcheck="off" placeholder='Enter valid email...' />
                                    </div>
                                </div>
                                <div className="container-row" id="subject-inquiry">
                                    <div className="contact-sub-container" id="subject">
                                        <label id="subject-label" for="subject">Subject:</label>
                                        <input type="text" id="subject" className="contact-subject" autocomplete="off" spellcheck="off"  placeholder="What's on your mind?" />
                                    </div>
                                    <div className="contact-sub-container" id="business-personal">
                                        <label id="business-personal-label" for="business-personal">Inquiry type:</label>
                                        <div className="checkbox-container">
                                            <label className="checkbox-container2" for="business" id="business-label">
                                                <input type="checkbox" id="business" className="business-personal" value="business" />
                                                <span className="checkmark"></span>
                                                <p className="checkbox-label">Business</p>
                                            </label>
                                            <label className="checkbox-container2" for="personal" id="personal-label">
                                                <input type="checkbox" id="personal" className="business-personal" value="personal" />
                                                <span className="checkmark"></span>
                                                <p className="checkbox-label">Personal</p>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <label for="message" id="message-label" class="message">Message:</label>
                                <textarea id="message-box" class="message-box" autocomplete="off" spellcheck="off" placeholder='Be nice...'></textarea>
                                <button type="submit" class="submit-btn">Submit</button>
                            </form>
                        </div>
                        <div className="mobile-bg">
                            <img src={mountainsImage} alt="mountains-mobile" className="contact-mountains-mobile" />
                            <img src={treesImage} alt="trees-mobile" className="contact-trees-mobile" />
                            <img src={city1Image} alt="city1-mobile" className="contact-city1-mobile" />
                            <img src={city2Image} alt="city2-mobile" className="contact-city2-mobile" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;