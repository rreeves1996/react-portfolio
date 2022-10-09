import React, { useEffect } from 'react';
import Carousel from './subs/Carousel';
import icon from "../assets/portfolio.png";
import '../assets/style/portfolio.css';

export default function Portfolio({ currentTab, handleTabChange }) {
    const soloProjects = 
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
                    <Carousel side="Solo" />
                    <code>Wow, look at that carousel! 😀</code>
                </div>
            </div>
        </>;
    const groupProjects = 
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
                    <Carousel side="Group" />
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
