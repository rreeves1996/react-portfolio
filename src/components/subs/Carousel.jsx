import React from "react";
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

    return (
        <>
            <div className="slider">                  
                <div className="slider-bg"></div>
                    {props.side === "Solo" ? (
                        <>
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
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
            </div>
        </>
    )
}