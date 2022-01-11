import React, { useState, useEffect, useContext } from "react";
import ItemList from "../ItemList/ItemList";
import mockProducts from "../ItemList/MockProducts";
import "../../styles.css";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const { id: categoryId } = useParams();
  const [products, setState] = useState([]);
  useEffect(() => getItemsAsyncAwait(), [categoryId]);

  //ejercicio clase 13
  /* const carrito = [{id:1, title:"remera", price: 10}, {id:2, title:"gorra", price: 50}]
  const precioTotal = carrito.reduce((preValue, newVal)=>{
    return preValue.price + newVal.price 
   }) 
   console.log("Precio Total" + precioTotal)
  let order = { */
    // buyer: {name:"Jorge", phone:44441212, mail: "test@test.com"}, //este se hardcodea para no hacer un formulario
    // items: [{id:1, title:"remera", price: 10}, {id:2, title:"gorra", price: 50}], //este se tiene que rellenar solo se agregue al carro
    //total: precioTotal //es el total entre el id 1 + id 2
  //}
// fin erjercicio clase 13

  const arrayItem = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 2000);
    });

  const getItemsAsyncAwait = async () => {
    try {
      const products = await arrayItem();
      setState(FiltroData(products));
    } catch (error) {
      console.error("ERROR", "Algo salio mal", error);
    }
  };

  const FiltroData = data =>
    categoryId && data
      ? data.filter((item) => item.categoria === categoryId)
      : data;

  return (
    <main>
      <section className="contenedor">
        <div>
          <div>
            <ItemList products={products} />
          </div>
          
        </div>
      </section>
    </main>
  );
}
export default ItemListContainer;
