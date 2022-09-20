import React, { useState } from 'react';
import NavBar from './Navigation';
import Footer from './Footer'
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Wrapper from "./Wrapper";
import Stars from "./Stars";

import '../assets/style/style.css';

export default function Container() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [currentTab, setCurrentTab] = useState("Solo");
  


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
        return <Home handlePageChange={handlePageChange} />;
    }
  };
  
  const handlePageChange = (page) => setCurrentPage(page);
  const handleTabChange = (tab) => setCurrentTab(tab);

  return (
    <>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        <main>
          <Stars />
          {currentPage === "Home" || currentPage === "Resume" ? (
            <>
              {renderPage()}
            </>
          ) : (
            <Wrapper>
              {renderPage()}  
            </Wrapper>
          )}
        </main>
      <Footer />
    </>
  );
}