import React, {useState,useEffect} from "react";
import "../../styles.css";
import mockItemDetail from "./MockItemDetail"
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [getDetail, setState] = useState([]);
  
  const arrayItemDetail = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockItemDetail);
      }, 2000);
    }); 
    useEffect(() => {
      arrayItemDetail
      .then(response => setState(response))
      .catch(error => console.log(error))
    }, []);


   return(
    <section className="contenedor">
    <div>
      <ItemDetail getDetail={getDetail}/> 
    </div>
    </section>
  )
  
  
}

export default ItemDetailContainer;