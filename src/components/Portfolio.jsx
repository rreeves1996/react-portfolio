import React, { useEffect } from 'react';
import Carousel from './subs/Carousel';
import icon from '../assets/icon-images/portfolio.png';
import '../assets/style/portfolio.css';

export default function Portfolio({ currentTab, handleTabChange }) {
	const soloProjects = (
		<>
			<div className='project-tabs'>
				<button className='solo-active'>Solo</button>
				<button
					className='group-inactive'
					onClick={() => handleTabChange('Group')}>
					Group
				</button>
				<h5>
					<span>❮</span>Click to switch tabs!
				</h5>
			</div>
			<div className='solo-projects'>
				<div className='text-side'>
					<h6>
						<strong>TeamEZ - Team Management App:</strong>
					</h6>
					<p>
						This was my first full-stack (MERN) app that I created by myself
						following my boot camp graduation. I was interested in creating an
						app from scratch on my own, so I started from scratch and went from
						there, learning what was needed as I went! Building this app taught
						me a TON!
					</p>
					<h6>
						<strong>To-Do List:</strong>
					</h6>
					<p>
						Simple to-do list app with Bootstrap and React. I hadn't created a
						to-do list app yet, so I tried my hand creating one on my own. I am
						fairly happy with how the functionality and sleek UI turned out, and
						enjoyed trying to figure out how to go about making a to-do list app
						on my own!
					</p>
					<h6>
						<strong>Virtual Keyboard:</strong>
					</h6>
					<p>
						This was the first app I created following my boot camp graduation.
						I'd stumbled upon the idea of creating a virtual keyboard and the
						idea piqued my interest, so I tried to see if I could do it myself
						with React! Though the code is messy, I'm proud I was able to create
						it on my own as a fresh boot camp grad!
					</p>
					<h6>
						<strong>Tech Blog:</strong>
					</h6>
					<p>
						Created during my boot camp - we were tasked to create a blog-style
						app using Handlebars and MySQL. My first real taste at creating a
						full-stack app outside of a group!
					</p>
					<h6>
						<strong>Weather Dashboard:</strong>
					</h6>
					<p>
						This is a simple app that I created during bootcamp that generates a
						dashboard based on the searched city. It then grabs information on
						the city's weather using a third-party weather API. This was my
						first time implementing third-party API calls/requests.
					</p>
				</div>
				<div className='slider-side'>
					<h1>Solo Projects</h1>
					<Carousel side='Solo' />
					<code>Wow, look at that carousel! 😀</code>
				</div>
			</div>
		</>
	);
	const groupProjects = (
		<>
			<div className='project-tabs'>
				<button
					className='solo-inactive'
					onClick={() => handleTabChange('Solo')}>
					Solo
				</button>
				<button className='group-active'>Group</button>
				<h5>
					<span>❮</span>Click to switch tabs!
				</h5>
			</div>
			<div className='group-projects'>
				<div className='text-side group-project-text'>
					<h6>
						<strong>Project #1 - Fork The Food:</strong>
					</h6>
					<p>
						This was my first project for my class where I worked in a group
						with three other people. We were tasked to create an app that
						utilized at least two server-side APIs. In the end, we ended up
						creating an app called Fork The Food, which generated recipes based
						on inputted ingredients. To meet the MVP, we ended up using
						YouTube's API to display a YouTube tutorial on how to make the
						generated recipe. We also used a recipe API for grabbing ingredients
						and recipes.
					</p>
					<h6>
						<strong>Project #2 - Stack My Paddle:</strong>
					</h6>
					<p>
						In this project, I worked with three others to create an app called
						Stack My Paddle, a pickleball court locator. The app uses an API to
						search for pickleball courts based on the user's inputted location.
						It has a fully-functioning login/logout/register feature, and it has
						an "Upcoming Events" section that displays upcoming
						pickleball-related events on the homepage.
					</p>
					<h6>
						<strong>Project #3 - The RanDUMBizer:</strong>
					</h6>
					<p>
						This was my final group project for my bootcamp. We were tasked to
						make a fully functioning app with a polished UI, login feature and
						routes with Apollo and GraphQL. We created an app with a simple
						concept that was centered around users creating/posting random lists
						(movies, games, food, etc). I created the UI/UX from scratch with my
						own custom CSS library here, and I'm fairly happy with the result!
					</p>
				</div>
				<div className='slider-side'>
					<h1>Group Projects</h1>
					<Carousel side='Group' />
					<code>Wow, look at that carousel! 😀</code>
				</div>
			</div>
		</>
	);

	const renderTab = () => {
		if (currentTab === 'Solo') {
			return soloProjects;
		} else if (currentTab === 'Group') {
			return groupProjects;
		}
	};

	useEffect(() => {
		let soloSlides = document.querySelectorAll('.solo-slide');
		let groupSlides = document.querySelectorAll('.group-slide');

		soloSlides.forEach((slide) => {
			let slideDataID = slide.getAttribute('data-id');
			let slidePos = slideDataID - 2;

			slide.style.transform = `translateX(${slidePos * 100}%)`;
			slide.style.zIndex = 2;
		});

		groupSlides.forEach((slide) => {
			let slideDataID = slide.getAttribute('data-id');
			let slidePos = slideDataID - 7;

			slide.style.transform = `translateX(${slidePos * 100}%)`;
			slide.style.zIndex = 2;
		});
	});

	return (
		<>
			<div className='portfolio-title title-container'>
				<div className='portfolio-icon-container icon-container'>
					<img src={icon} alt='icon' className='portfolio-icon' />
				</div>
				<h1 className='title-text'>Portfolio</h1>
			</div>
			{renderTab()}
		</>
	);
}
