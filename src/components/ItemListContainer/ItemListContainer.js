import React, { useState, useEffect, useContext } from "react";
import ItemList from "../ItemList/ItemList";
import mockProducts from "../ItemList/MockProducts";
import ItemCount from "../ItemCount/ItemCount";
import "../../styles.css";
import cartContext from "../../context/cartContext";
/* const textColor = {
  color: "rgb(0,140,69)",
};
 */
//INICIO PROMISE
function ItemListContainer() {
  
  const value = useContext(cartContext)

  const [products, setState] = useState([]);
  const arrayItem = new Promise((resolve, reject) => {
    setTimeout(() => {      
      resolve(mockProducts);
    }, 2000);
  });

  useEffect(() => {
    arrayItem
    .then(response => setState(response))
    .catch(error => console.log(error))
  }, []);
  //FIN PROMISE

  return (
    <main>
      <section className="contenedor">
      <div>
        {/* <h2 style={textColor} className="container">
          {props.msg}
        </h2> */}
        <div>
        <ItemList products={products}/> 
        </div>
        <p>{value}</p>
      </div>
    </section>
    </main>
  );
}
export default ItemListContainer;