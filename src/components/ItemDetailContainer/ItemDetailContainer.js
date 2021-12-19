import React, {useState,useEffect} from "react";
import "../../styles.css";
import mockProducts from "../ItemList/MockProducts";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [getDetail, setState] = useState([]);
  
  const arrayItemDetail = new Promise((resolve, reject) => {
      setTimeout(() => {
        setState(mockProducts)
        resolve(true);
      }, 2000);
    }); 
    useEffect(() => {
      arrayItemDetail()
    }, []);


   /*  const getItem= () =>{
      return (
        <div>
          
        </div>
      )
    } */



   return(
    <section className="contenedor">
    <div>
     <ItemDetail getDetail={getDetail}/> 
    </div>
    </section>
  )
  
  
}

export default ItemDetailContainer;