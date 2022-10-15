import React from 'react';
import mountainsImage from "../assets/bg-images/mountains.png";
import treesImage from "../assets/bg-images/trees.png";
import city1Image from "../assets/bg-images/city1.png";
import city2Image from "../assets/bg-images/city2.png";

export default function Wrapper(props) {
    return (
        <div className='wrapper'>
            <div className="background">
                <img src={treesImage} alt="trees" className="trees" id="trees-mobile" />
                <img src={mountainsImage} alt="mountains" className="mountains" />
                <img src={treesImage} alt="trees" className="trees" id="trees" />
                <img src={city1Image} alt="city1" className="city1" />
                <img src={city2Image} alt="city2" className="city2" />
            </div>
            <div className="page-container">{ props.children }</div>     
            <div className="mobile-background">
                <img src={mountainsImage} alt="mountains-mobile" className="mountains-mobile" />
                <img src={treesImage} alt="trees-mobile" className="trees-mobile" />
                <img src={city1Image} alt="city1-mobile" className="city1-mobile" />
                <img src={city2Image} alt="city2-mobile" className="city2-mobile" />
            </div>
        </div>
    )
}