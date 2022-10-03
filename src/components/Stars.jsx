import React from 'react';

import stars1 from '../assets/stars1.png';
import stars2 from '../assets/stars2.png';
import stars3 from '../assets/stars3.png';

export default function Stars() {
    
    // Parallex function that tracks mouse location to move stars pictures individually based on the elements data-value creating a "3D" effect
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
        <div className="stars-container">
            <img src={stars1} alt="stars1" id="stars1" className="object" data-value="6" />
            <img src={stars2} alt="stars2" id="stars2" className="object" data-value="3" />
            <img src={stars3} alt="stars3" id="stars3" className="object" data-value="2" />
        </div>
    )
}