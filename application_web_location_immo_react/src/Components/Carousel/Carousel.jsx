import React, { useState } from 'react';

import arrowLeft from '../../Images/arrow_left.png';
import arrowRight from '../../Images/arrow_right.png';



function Carousel (props) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const imgCarousel = props.img;

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imgCarousel.length - 1 ? 0 : prevIndex + 1));
    }
    const prev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imgCarousel.length - 1 : prevIndex - 1));
    }

    const manyImg = imgCarousel.length > 1;
    

    return (
        <div className='carousel'>
            {manyImg && (
                <div className="arrow">
                <button className='arrowLeft' onClick={prev}>
                    <img  src={arrowLeft} alt="Fleche précédent"/>
                </button>
                <button className='arrowRight' onClick={next}>
                    <img  src={arrowRight} alt="Fleche suivant"/>
                </button>
            </div>
            )}
            
            <div>
                <img className='imgCarousel' src={imgCarousel[currentIndex]} alt="" />
                {manyImg && <p className='compteur'> {currentIndex + 1} / {imgCarousel.length}</p>}
            </div>
        </div>
    )
}

export default Carousel;