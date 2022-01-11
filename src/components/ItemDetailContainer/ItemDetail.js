import React, { useContext, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import {CartContext} from "../../context/cartContext"
import { NavLink } from "react-router-dom";
function ItemDetail({ getDetail,stock }) {

 const [count, setCount] = useState(0)
 const {addItem, cartItems} = useContext(CartContext)

 const handleClick = (count) => {
   console.log("count", count)
   setCount(count)
   if (count) {
     addItem(getDetail, count)
   }
 }

 console.log("cartItems", cartItems)
 console.log("getDetail", getDetail)

  return (
    <div className="cardContainerDetailPrincipal">
      <div className="cardContainerDetail">
            <div key={getDetail.id} className="cardInfo">
              <h2 className="titular">DETALLES</h2>
              <div className="imgContain">
                <img
                  className="imgItem"
                  src={getDetail.image}
                  alt={getDetail.title}
                ></img>
              </div>
              <h2>{getDetail.title}</h2>
              <p>${getDetail.price}</p>
              <p>Detalle: {getDetail.detalle}</p>

              {count === 0 ? (
              <ItemCount
                stock={stock}
                onAdd={handleClick}
              />
             ) : <NavLink to="/cart" className="btn-addCarrito"> Comprar </NavLink>}
            </div>
          );    
      </div>
    </div>
  );
}

export default ItemDetail;