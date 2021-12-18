import React from "react";
import "../../styles.css";
/* import ItemDetail from "./ItemDetail"; */
import mockProducts from "../ItemList/MockProducts";

function ItemDetailContainer() {
  const getItem = async ()=>{
    const arrayItemDetail = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 2000);
    });
    const res = arrayItemDetail.JSON();
    res.then();
  } 
  
  getItem.map((detail)=>{
    return (
      <div key={detail.id}>
        {getItem.detalle}
      </div>
    );
  })
}

export default ItemDetailContainer;