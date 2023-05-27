import React, { useState, useEffect } from "react";
import { CarouselItem } from "./CarouselItem";


export const Carousel = () => {
    const [activeIndex, setActiveIntex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = items.length - 1;
        }else if (newIndex >= items.length){
            newIndex = 0;
        }
        setActiveIntex(newIndex);
    }

     useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);


    const items =[
        {
            title: 'cat',
            description: 'A beautiful cat that purrrrrrs when you pet him.',
            icon: require ('../images/cat.svg')
        },
        {
            title: 'phantom',
            description: 'A ghost that will visit you at night to haunt your dreams with evil pumpkins.',
            icon: require ('../images/phantom.svg')
        },
        {
            title: 'starts',
            description: 'A pretty view of a starred night, it makes you feel the immensity of the univers.',
            icon: require ('../images/stars.svg')
        }
    ]
    return ( 
    <div className="carousel">
        <div className="inner" style={{transform:`translate(-${activeIndex * 100}%)`}}> 
            {items.map((item)=>{return ( <CarouselItem item={item} /> ) })}
        </div>

        <div className="carousel-buttons">
            <button className="button-arrow" onClick={() =>{updateIndex(activeIndex -1)}}>
                <span class="material-symbols-outlined"> arrow_back_ios_new</span></button>

            <div className="indicators">
                {items.map((item,index) =>{
                    return (
                        <button className="indicator-buttons" onClick={() =>{updateIndex(index)}}>
                            <span className={`material-symbols-outlined ${(index===activeIndex? "indicator-symbol-active": "indicator-symbol")}`}> radio_button_checked </span>
                        </button>
                    )
                })}
            </div>
            <button className="button-arrow" onClick={() =>{updateIndex(activeIndex +1)}}><span className="material-symbols-outlined"> arrow_forward_ios </span></button>
        </div>
    </div>
    )
};