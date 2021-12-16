import React from "react";


const ItemList = ({product})=>{
    return (
      <div>
        <div className="cardInfo">
          <img src={product.image} className="imgItem"></img>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      </div>
    )
  }

export default ItemList;