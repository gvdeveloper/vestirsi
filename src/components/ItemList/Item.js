import React, { useState } from "react";
import nike from "./img/nike.jpg"
import "./Item.css"

function Item(){
const [state, setState] = useState([]);

  const arrayItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      setState([{id:"1",title:"Nike Air",price:"$800"}]);
      resolve(true);
    }, 2000);
  });

  arrayItem.then();

  return (
    <div>
      {state.map(list => {
        return <div className="items contenedor">
        <p> <img src={nike} className="imgItem" alt="Nike Air"></img> </p>
        <p>{list.id}</p> 
        <p>{list.title}</p> 
        <p>{list.price}</p>
        </div>
      })}
    </div>
  );
}

export default Item;