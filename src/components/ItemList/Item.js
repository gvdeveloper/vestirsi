
import React, { useState } from "react";
function Item(){
const [state, setState] = useState([]);

  const arrayItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      setState([{id:"1",title:"Gorra Nike Air",price:"$800"}]);
      resolve(true);
    }, 2000);
  });

  arrayItem.then();

  return (
    <div>
      {state.map(list => {
        return <div>
        <p>{list.id}</p> 
        <p>{list.title}</p> 
        <p>{list.price}</p>
        </div>
      })}
    </div>
  );
}

export default Item;