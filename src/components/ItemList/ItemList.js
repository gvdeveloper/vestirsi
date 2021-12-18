import React from "react";
import Item from "./Item";
import "./Item.css"

const ItemList = ({ products }) => {
  return (
    <div className="cardContainer">
      {products.map((item => <Item {...item} />)
      )}
    </div>
  );
};

export default ItemList;