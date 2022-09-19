import React, { useState } from 'react';
import NavBar from './Navigation';
import Footer from './Footer'
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Wrapper from "./Wrapper";

import '../assets/style/style.css';

export default function Container() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [currentTab, setCurrentTab] = useState("Solo");
  
  // Parallex function that tracks mouse location to move stars picture multiplicatively based on the elements data-value
  document.addEventListener("mousemove", parallax);

  function parallax(e) {
    document.querySelectorAll(".object").forEach(function(move) {
      var movingValue = move.getAttribute("data-value");

      var x = (e.clientX * movingValue) / 250;
      var y = (e.clientY * movingValue) / 250;

      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    })
  }

  const renderPage = () => {
    switch(currentPage) {
      case "Home":
        return <Home handlePageChange={handlePageChange} />;
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio currentTab={currentTab} handleTabChange={handleTabChange} />;
      case "Contact":
        return <Contact handlePageChange={handlePageChange}/>;
      case "Resume":
        return <Resume />;
      default:
        return <Home />;
    }
  };
  
  const handlePageChange = (page) => setCurrentPage(page);
  const handleTabChange = (tab) => setCurrentTab(tab);

  return (
    <>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        <main>
          {/* {currentPage === "Home" ? (
            <></>
          ) : (
            <Wrapper />
          )} */}
          {renderPage()}  
        </main>
      <Footer />
    </>
  );
}