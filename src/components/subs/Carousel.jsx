import React from "react";
import Project from "./Project";
import soloProject1 from "../../assets/proj-images/ecommerce.png";
import soloProject2 from "../../assets/proj-images/emptracker.png";
import soloProject3 from "../../assets/proj-images/readmegen.png";
import soloProject4 from "../../assets/proj-images/teamgen.png";
import soloProject5 from "../../assets/proj-images/weather.png";
import groupProject1 from "../../assets/proj-images/ftf.png";
import groupProject2 from "../../assets/proj-images/smp.png";
import groupProject3 from "../../assets/proj-images/placeholder.png";

export default function Carousel(props) {
    const nextButton = `❭`;
    const prevButton = `❬`;
    const soloProjects = [
        {
            github: "https://github.com/rreeves1996/week13-hw",
            img: soloProject1,
            title: "E-Commerce Back-End",
            text: "Express, MySQL, ORM"
        },
        {
            github: "https://github.com/rreeves1996/week12-hw",
            img: soloProject2,
            title: "HR Employee Tracker",
            text: "Node, MySQL, Inquirer"
        },
        {
            github: "https://github.com/rreeves1996/week9-hw",
            img: soloProject3,
            title: "README Generator",
            text: "Node, Command line, Inquirer"
        },
        {
            github: "https://github.com/rreeves1996/week10-hw",
            img: soloProject4,
            title: "Team Profile Generator",
            text: "Node, Command line, Inquirer"
        },
        {
            github: "https://github.com/rreeves1996/week6-hw",
            img: soloProject5,
            title: "Weather Dashboard",
            text: "Third-Party API, JavaScript"
        }]
    const groupProjects = [
        {
            github: "https://the-randumbizer.herokuapp.com/",
            img: groupProject3,
            title: "The RanDUMBizer",
            repo: "https://github.com/EyesackEl/the-ranDUMBizer"
        },
        {
            github: "https://eyesackel.github.io/fork-the-food/",
            img: groupProject1,
            title: "Fork The Food",
            repo: "https://github.com/EyesackEl/fork-the-food"
        },
        {
            github: "https://stack-my-paddle.herokuapp.com/",
            img: groupProject2,
            title: "Stack My Paddle",
            repo: "https://github.com/furhan-dev/pickleball"
        },
        {
            github: "https://the-randumbizer.herokuapp.com/",
            img: groupProject3,
            title: "The RanDUMBizer",
            repo: "https://github.com/EyesackEl/the-ranDUMBizer"
        },
        {
            github: "https://eyesackel.github.io/fork-the-food/",
            img: groupProject1,
            title: "Fork The Food",
            repo: "https://github.com/EyesackEl/fork-the-food"
        },
        {
            github: "https://stack-my-paddle.herokuapp.com/",
            img: groupProject2,
            title: "Stack My Paddle",
            repo: "https://github.com/furhan-dev/pickleball"
        }]

    return (
        <>
            <div className="slider">                  
                <div className="slider-bg"></div>
                {props.side === "Solo" ? (
                    <>
                        {soloProjects.map((project, index) => (
                            <>
                                <Project side="Solo" id={index} github={project.github} img={project.img} title={project.title} text={project.text} />
                            </>
                        ))}

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
                    </>
                ) : (
                    <>
                        {groupProjects.map((project, index) => (
                            <>
                                <Project side="Group" id={index + 5} github={project.github} img={project.img} title={project.title} text={project.repo} />
                            </>
                        ))}

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
                    </>
                )}
            </div>
        </>
    )
}