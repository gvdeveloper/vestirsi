import React, { useState, useEffect, useContext } from "react";
import ItemList from "../ItemList/ItemList";
import mockProducts from "../ItemList/MockProducts";
import "../../styles.css";
import cartContext from "../../context/cartContext";
import {useParams} from 'react-router-dom'

//INICIO PROMISE
function ItemListContainer() {
  const {id: categoryId} = useParams();
  const [products, setState] = useState([]);
  useEffect(() => getItemsAsyncAwait(), [categoryId]);

  const value = useContext(cartContext)

  const arrayItem = ()=> new Promise((resolve, reject) => {
    setTimeout(() => {      
      resolve(mockProducts);
    }, 2000);
  });

  const getItemsAsyncAwait = async () => {
		try {
			const products = await arrayItem();
			setState(handleFilterData(products));
		} catch (error) {
			console.error('ERROR', '🤦‍♂️ Algo malio sal', error);
		}
	};

  const handleFilterData = (data) => (categoryId && data)
		? data.filter(item => item.categoria === categoryId)
		: data;

 /*  useEffect(() => {
    arrayItem
    .then(response => setState(response))
    .catch(error => console.log(error))
  }, []); */
  //FIN PROMISE

  
  return (
    <main>
      <section className="contenedor">
      <div>
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