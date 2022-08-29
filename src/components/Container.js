import React, { useState } from 'react';
import NavBar from './Navigation';
import Footer from './Footer'
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';


export default function Container() {
    const [currentPage, setCurrentPage] = useState("Home");
    
    const renderPage = () => {
        if (currentPage === "Home") {
          return <Home />;
        }
        if (currentPage === "Portfolio") {
          return <Portfolio />;
        }
        if (currentPage === "About") {
          return <About />;
        }
        if (currentPage === "Contact") {
          return <Contact />;
        }
        return <Resume />;
    };
    
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <main>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />

            {renderPage()}

            <Footer />
        </main>
    );
}