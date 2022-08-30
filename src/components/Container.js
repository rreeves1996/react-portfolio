import React, { useState } from 'react';
import NavBar from './Navigation';
import Footer from './Footer'
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';


export default function Container() {
    const [currentPage, setCurrentPage] = useState("Home");
    
    const renderPage = () => {
        switch(currentPage) {
          case "Home":
            return <Home />;
          case "About":
            return <About />;
          case "Portfolio":
            return <Portfolio />;
          case "Contact":
            return <Contact />;
          case "Resume":
            return <Resume />;
          default:
            return <Home />;
        }
    };
    
    const handlePageChange = (page) => setCurrentPage(page);

    document.addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".object").forEach(function(move) {
        var movingValue = move.getAttribute("data-value");

        var x = (e.clientX * movingValue) / 250;
        var y = (e.clientY * movingValue) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
      })
    }

    return (
      <>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        <main>
          {renderPage()}  
        </main>
        <Footer />

      </>
    );
}