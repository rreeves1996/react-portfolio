import React from 'react';
import { useEffect, useState } from 'react';
import mountainsImage from "../assets/mountains.png";
import treesImage from "../assets/trees.png";
import city1Image from "../assets/city1.png";
import city2Image from "../assets/city2.png";

export default function Wrapper( props, { currentPage } ) {
    // const [width, setWidth] = useState<1600>(window.innerWidth);

    // function handleWindowSizeChange() {
    //     setWidth(window.innerWidth);
    // }

    // useEffect(() => {
    //     window.addEventListener('resize', handleWindowSizeChange);
    //     return () => {
    //         window.removeEventListener('resize', handleWindowSizeChange);
    //     }
    // }, []);

    // const smallerLayout = width <= 1600;
    return (
        <div className='wrapper'>
            <div className="background">
                <img src={mountainsImage} alt="mountains" className="mountains" />
                <img src={treesImage} alt="trees" className="trees" />
                <img src={city1Image} alt="city1" className="city1" />
                <img src={city2Image} alt="city2" className="city2" />
            </div>
            <div className="page-container">{ props.children }</div>
            {/* {smallerLayout ? (          
                <div className="mobile-background">
                    <img src={mountainsImage} alt="mountains-mobile" className="mountains-mobile" />
                    <img src={treesImage} alt="trees-mobile" className="trees-mobile" />
                    <img src={city1Image} alt="city1-mobile" className="city1-mobile" />
                    <img src={city2Image} alt="city2-mobile" className="city2-mobile" />
                </div>
            ) : (
                <>
                </>
            )} */}

        </div>
    )
}