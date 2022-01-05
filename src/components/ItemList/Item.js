import React from "react";
import { NavLink } from "react-router-dom";
import "./Item.css";

function Item({ id, title, price, image }) {
  return (
    <div className="cardInfo" key={id}>
      <div className="imgContain">
        <img className="imgItem" src={image} alt={title}></img>
      </div>
      <NavLink to={`/item/${id}`}>
        <h2>{title}</h2>
      </NavLink>
      <p>${price}</p>
    </div>
  );
}

export default Item;
