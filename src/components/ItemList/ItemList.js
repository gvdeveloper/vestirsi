import React from "react";
import Item from "./Item";
import "./Item.css";

const ItemList = ({ products }) => {
  return (
    <div className="cardContainer">
      {products.map((item) => (
        <li key={item.id}>
          <Item {...item} />
        </li>
      ))}
    </div>
  );
};
export default ItemList;

/* const ItemList = ({ products }) => {
  return (
    <div className="cardContainer">
      {products.map((item => <li key={item.id}>
        <NavLink to={`/Item/${item.id}`}>
          <Item {...item} />
        </NavLink>   
      </li>)
      )}
    </div>
  );
};
export default ItemList; */
