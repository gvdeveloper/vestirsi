import React from "react";
import "./Item.css"


function Item ({product}){
  return (
    <div className="cardContainer">
      <div>{product.image}</div>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
    </div>
  )
}

export default Item;