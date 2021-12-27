import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import "./Item.css"

const ItemList = ({ products }) => {
  return (
    <div className="cardContainer">
      {products.map((item => 
        <div>
          <Link to="/item/:id">
              <Item key={item.id} {...item} />
          </Link>
        </div>))
      }
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