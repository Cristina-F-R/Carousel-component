import React from "react";

export const CarouselItem = ({item}) =>{
    return <div className="carousel-item">
            <img src={item.icon.default} alt="" className="carousel-img" />
            <div className="carousel-item-text">{item.description}</div>
    </div>
}