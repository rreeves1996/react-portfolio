import React, { useEffect } from 'react';
import icon from "../assets/portfolio.png";
import soloProject1 from "../assets/proj-images/ecommerce.png";
import soloProject2 from "../assets/proj-images/emptracker.png";
import soloProject3 from "../assets/proj-images/readmegen.png";
import soloProject4 from "../assets/proj-images/teamgen.png";
import soloProject5 from "../assets/proj-images/weather.png";
import groupProject1 from "../assets/proj-images/ftf.png";
import groupProject2 from "../assets/proj-images/smp.png";
import groupProject3 from "../assets/proj-images/placeholder.png";

import '../assets/style/portfolio.css';

export default function Portfolio({ currentTab, handleTabChange }) {
    const nextButton = `❭`;
    const prevButton = `❬`;

    let soloProjects = 
        <>
            <div className="project-tabs">
                <button className="solo-active">Solo</button>
                <button className="group-inactive"
                    onClick={() => handleTabChange("Group")}>Group</button>
                <h5><span>❮</span>Click to switch tabs!</h5>
            </div>
            <div className="solo-projects">
                <div className="text-side">
                    <h6><strong>E-Commerce Back-End:</strong></h6>
                    <p>
                        This was an assignment where I was tasked to create properly working GET, 
                        POST, PULL, and DELETE routes for an already provided database. Since there 
                        was no HTML/page styling, I used Insomnia to test the routes.
                    </p>
                    <h6><strong>HR Employee Tracker:</strong></h6>
                    <p>
                        For this assignement, I was tasked to create an employee tracker/database 
                        using Sequelize and inquirer. The user may view, add, edit or remove
                        employees from their persisting database.
                    </p>
                    <h6><strong>README Generator:</strong></h6>
                    <p>
                        This was a simple Node application which generates a README.md based on the 
                        user's responses to the provided Inquirer prompts.
                    </p>
                    <h6><strong>Team Profile Generator:</strong></h6>
                    <p>
                        The MVP for this assignment was to create a series of prompts via Inquirer
                        to enter their team members' information including  employee name, employee 
                        ID, and email address. The app then generates a styled HTML page with cards
                        for the inputted employees.
                    </p>
                    <h6><strong>Weather Dashboard:</strong></h6>
                    <p>
                        This is a simple app that generates a dashboard based on the searched city.
                        It then grabs information on the city's weather using a third-party weather
                        API.
                    </p>
                </div>
                <div className="slider-side">
                    <h1>Solo Projects</h1>
                    <div className="slider">
                        <div className="slider-bg"></div>
    
                        <div className="slide solo-slide" data-id={0}>
                            <a href="https://github.com/rreeves1996/week13-hw">
                                <div className="slide-content">
                                    <img src={soloProject1} alt="ecommerce" />
                                    <div className="slide-title">E-Commerce Back-End</div>
                                    <div className="slide-text"><h6>Express, MySQL, ORM</h6></div>
                                </div>
                            </a>
                        </div>

                        <div className="slide solo-slide" data-id={1}>
                            <a href="https://github.com/rreeves1996/week12-hw">
                                <div className="slide-content">
                                    <img src={soloProject2} alt="emptracker" />
                                    <div className="slide-title">HR Employee Tracker</div>
                                    <div className="slide-text"><h6>Node, MySQL, Inquirer</h6></div>
                                </div>
                            </a>
                        </div>

                        <div className="slide solo-slide" data-id={2}>
                            <a href="https://github.com/rreeves1996/week9-hw">
                                <div className="slide-content">
                                    <img src={soloProject3} alt="readmegen" />
                                    <div className="slide-title">README Generator</div>
                                    <div className="slide-text"><h6>Node, Command line, Inquirer</h6></div>
                                </div>
                                </a>
                        </div>

                        <div className="slide solo-slide" data-id={3}>
                            <a href="https://github.com/rreeves1996/week10-hw">
                                <div className="slide-content">
                                    <img src={soloProject4} alt="teamgen" />
                                    <div className="slide-title">Team Profile Generator</div>
                                    <div className="slide-text"><h6>Node, Command line, Inquirer</h6></div>
                                </div>
                            </a>
                        </div>

                        <div className="slide solo-slide" data-id={4}>
                            <a href="https://github.com/rreeves1996/week6-hw">
                                <div className="slide-content">
                                    <img src={soloProject5} alt="weather" />
                                    <div className="slide-title">Weather Dashboard</div>
                                    <div className="slide-text"><h6>Third-Party API, JavaScript</h6></div>
                                </div>
                            </a>
                        </div>


                        <button className="next-btn"
                            onClick={() => {
                                let soloSlides = document.querySelectorAll(".solo-slide");
                                
                                soloSlides.forEach(slide => {
                                    let slideDataID = slide.getAttribute('data-id');
                                    let slidePos = slideDataID - 2;
                                    
                                    slidePos--;
                                    if(slidePos < -2) {
                                        slide.style.transform = `translateX(${(slidePos * 100) + 500}%)`;
                                        slide.setAttribute("data-id", 4);
                                        slide.style.zIndex = 0;
                                        console.log(slidePos);
                                    } else {
                                        slide.style.transform = `translateX(${slidePos * 100}%)`;
                                        slide.setAttribute("data-id", (slidePos + 2));
                                        slide.style.zIndex = 2;
                                        console.log(slidePos);
                                    }
                                });
                            }}>
                            <div className="arrow">{nextButton}</div>
                        </button>
                        <button className="prev-btn"
                            onClick={() => {
                                let soloSlides = document.querySelectorAll(".solo-slide");
                                
                                soloSlides.forEach(slide => {
                                    let slideDataID = slide.getAttribute('data-id');
                                    let slidePos = slideDataID - 2;
                                    
                                    slidePos++;
                                    if(slidePos > 2) {
                                        slide.style.transform = `translateX(${(slidePos * 100) - 500}%)`;
                                        slide.setAttribute("data-id", 0);
                                        slide.style.zIndex = 0;
                                        console.log(slidePos);
                                    } else {
                                        slide.style.transform = `translateX(${slidePos * 100}%)`;
                                        slide.setAttribute("data-id", (slidePos + 2));
                                        slide.style.zIndex = 2;
                                        console.log(slidePos);
                                    }
                                });
                            }}>
                            <div className="arrow">{prevButton}</div>
                        </button>
                    </div>
                    <code>Wow, look at that carousel! 😀</code>
                </div>
            </div>
        </>;
    let groupProjects = 
        <>
            <div className="project-tabs">
                <button className="solo-inactive"
                    onClick={() => handleTabChange("Solo")}>Solo</button>
                <button className="group-active">Group</button>
                <h5><span>❮</span>Click to switch tabs!</h5>
            </div>
            <div className="group-projects">
                <div className="text-side group-project-text">
                    <h6><strong>Project #1 - Fork The Food:</strong></h6>
                    <p>
                        This was my first project for my class where I worked in a group with three
                        other people. We were tasked to create an app that utilized at least two
                        server-side APIs. In the end, we ended up creating an app called Fork The
                        Food, which generated recipes based on inputted ingredients. To meet the MVP,
                        we ended up using YouTube's API to display a YouTube tutorial on how to make
                        the generated recipe. We also used a recipe API for grabbing ingredients and
                        recipes.
                    </p>
                    <h6><strong>Project #2 - Stack My Paddle:</strong></h6>
                    <p>
                        In this project, I worked with three others to create an app called Stack My 
                        Paddle, a pickleball court locator. The app uses an API to search for pickleball
                        courts based on the user's inputted location. It has a fully-functioning login/logout/register
                        feature, and it has an "Upcoming Events" section that displays upcoming pickleball-related
                        events on the homepage.
                    </p>
                    <h6><strong>Project #3 - Placeholder:</strong></h6>
                    <p>
                        New project coming soon!
                    </p>
                </div>
                <div className="slider-side">
                    <h1>Group Projects</h1>
                    <div className="slider">
                        <div className="slider-bg"></div>

                        <div className="slide group-slide" data-id={5}>
                            <div className="slide-content">
                                <a href="#">
                                    <img src={groupProject3} alt="placeholder" />
                                    <div className="slide-title">Placeholder</div>
                                </a>
                                <div className="slide-text">
                                    <h6>
                                        <a href="#">Repository link</a>
                                    </h6>
                                </div>
                            </div>                                    
                        </div>

                        <div className="slide group-slide" data-id={6}>
                            <div className="slide-content">
                                <a href="https://eyesackel.github.io/fork-the-food/">
                                    <img src={groupProject1} alt="ftf" />
                                    <div className="slide-title">Fork The Food</div>
                                </a>
                                <div className="slide-text">
                                    <h6>
                                        <a href="https://github.com/EyesackEl/fork-the-food">Repository link</a>
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="slide group-slide" data-id={7}>
                            <div className="slide-content">
                                <a href="https://stack-my-paddle.herokuapp.com/">
                                    <img src={groupProject2} alt="smp" />
                                    <div className="slide-title">Stack My Paddle</div>
                                </a>
                                <div className="slide-text">
                                    <h6>
                                        <a href="https://github.com/furhan-dev/pickleball">Repository link</a>
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="slide group-slide" data-id={8}>
                            <div className="slide-content">
                                <a href="#">
                                    <img src={groupProject3} alt="placeholder" />
                                    <div className="slide-title">Placeholder</div>
                                </a>
                                <div className="slide-text">
                                    <h6>
                                        <a href="#">Repository link</a>
                                    </h6>
                                </div>
                            </div>                                    
                        </div>

                        <div className="slide group-slide" data-id={9}>
                            <div className="slide-content">
                                <a href="https://eyesackel.github.io/fork-the-food/">
                                    <img src={groupProject1} alt="ftf" />
                                    <div className="slide-title">Fork The Food</div>
                                </a>
                                <div className="slide-text">
                                    <h6>
                                        <a href="https://github.com/EyesackEl/fork-the-food">Repository link</a>
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="slide group-slide" data-id={10}>
                            <div className="slide-content">
                                <a href="https://stack-my-paddle.herokuapp.com/">
                                    <img src={groupProject2} alt="smp" />
                                    <div className="slide-title">Stack My Paddle</div>
                                </a>
                                <div className="slide-text">
                                    <h6>
                                        <a href="https://github.com/furhan-dev/pickleball">Repository link</a>
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <button className="next-btn"
                            onClick={() => {
                                let groupSlides = document.querySelectorAll(".group-slide");
                                
                                groupSlides.forEach(slide => {
                                    let slideDataID = slide.getAttribute('data-id');
                                    let slidePos = slideDataID - 7;
                                    
                                    slidePos--;
                                    if(slidePos < -2) {
                                        slide.style.transform = `translateX(${(slidePos * 100) + 600}%)`;
                                        slide.setAttribute("data-id", 10);
                                        slide.style.zIndex = 0;
                                        console.log(slidePos);
                                    } else {
                                        slide.style.transform = `translateX(${slidePos * 100}%)`;
                                        slide.setAttribute("data-id", (slidePos + 7));
                                        slide.style.zIndex = 2;
                                        console.log(slidePos);
                                    }
                                });
                            }}>
                            <div className="arrow">{nextButton}</div>
                        </button>
                        <button className="prev-btn"
                            onClick={() => {
                                let groupSlides = document.querySelectorAll(".group-slide");
                                
                                groupSlides.forEach(slide => {
                                    let slideDataID = slide.getAttribute('data-id');
                                    let slidePos = slideDataID - 7;
                                    
                                    slidePos++;
                                    if(slidePos > 3) {
                                        slide.style.transform = `translateX(${(slidePos * 100) - 600}%)`;
                                        slide.setAttribute("data-id", 5);
                                        slide.style.zIndex = 0;
                                        console.log(slidePos);
                                    } else {
                                        slide.style.transform = `translateX(${slidePos * 100}%)`;
                                        slide.setAttribute("data-id", (slidePos + 7));
                                        slide.style.zIndex = 2;
                                        console.log(slidePos);
                                    }
                                });
                            }}>
                            <div className="arrow">{prevButton}</div>
                        </button>
                    </div>
                    <code>Wow, look at that carousel! 😀</code>
                </div>
            </div>
        </>;

    const renderTab = () => {
        if(currentTab === "Solo") {
            return soloProjects;
        } else if (currentTab === "Group") {
            return groupProjects;
        }
    };

    useEffect(() => {
        let soloSlides = document.querySelectorAll(".solo-slide");
        let groupSlides = document.querySelectorAll(".group-slide");
                                      
        soloSlides.forEach(slide => {
            let slideDataID = slide.getAttribute('data-id');
            let slidePos = slideDataID - 2;

            slide.style.transform = `translateX(${slidePos * 100}%)`;
            slide.style.zIndex = 2;
        });

        groupSlides.forEach(slide => {
            let slideDataID = slide.getAttribute('data-id');
            let slidePos = slideDataID - 7;

            slide.style.transform = `translateX(${slidePos * 100}%)`;
            slide.style.zIndex = 2;
        });
    });

    return (
        <>
            <div className="portfolio-title title-container">
                <div className="portfolio-icon-container icon-container">
                    <img src={icon} alt='icon' className='portfolio-icon' />
                </div>
                <h1 className='title-text'>Portfolio</h1>
            </div>
            {renderTab()}
        </>
    )
}
