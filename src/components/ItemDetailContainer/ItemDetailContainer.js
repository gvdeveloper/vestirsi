import React, { useState } from "react";

const getItem = ()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState([]);
    
  const arrayItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      setState([{id:"1",title:"Nike Air",price:"$800"}]);
      resolve(true);
    }, 2000);
  });
  arrayItem.then()
}








function ItemDetailContainer(){
    return(
        <section className="contenedor">
            <div>
               {getItem}
            </div>
        </section>
    )
}

export default ItemDetailContainer;

