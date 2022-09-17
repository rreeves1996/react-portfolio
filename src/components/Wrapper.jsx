import React from 'react';
import mountainsImage from "../assets/mountains.png";
import treesImage from "../assets/trees.png";
import city1Image from "../assets/city1.png";
import city2Image from "../assets/city2.png";

export default function Wrapper() {
    return (
        <>
            <div className="page-background">
                <img src={mountainsImage} alt="mountains" className="mountains" />
                <img src={treesImage} alt="trees" className="trees" />
                <img src={city1Image} alt="city1" className="city1" />
                <img src={city2Image} alt="city2" className="city2" />
            </div>
        </>
    )
}