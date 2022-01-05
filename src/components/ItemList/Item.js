import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "./Item.css"

function Item ({id, title, price, image}){
const {id:idItem} = useParams()
  return (
    <div className="cardInfo" key={id}>
      <div className="imgContain">
        <img className="imgItem" src={image} alt={title}></img>
      </div>
      <NavLink to={`/item/${idItem}`}><h2>{title}</h2></NavLink>
      <p>${price}</p>
    </div>
  )
}

export default Item;