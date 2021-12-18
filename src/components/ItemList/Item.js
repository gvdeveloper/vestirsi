import React from "react";
import "./Item.css"



function Item ({...item}){
  return (
    <div className="cardInfo">
      <div className="imgContain">
        <img className="imgItem" src={item.image} alt={item.title}></img>
      </div>
      <h2>{item.title}</h2>
      <p>${item.price}</p>
    </div>
  )
}

export default Item;