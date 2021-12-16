import React, {useState} from "react";
import "../../styles.css"
import Item from "../ItemList/Item"
import ItemList from "../ItemList/ItemList"
import ItemCount from "../ItemCount/ItemCount"
import mockProducts from "../ItemList/MockProducts";



const textColor = {
    color: "rgb(0,140,69)"
}


function ItemListContainer(props){
    
    const [products, setState] = useState([]);
    const arrayItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      setState(mockProducts);
      resolve(true);
    }, 2000);
  });
  arrayItem.then();

    return(
        <section className="contenedor">
            <div>
                <h2 style={textColor} className="container">{props.msg}</h2>

                <div className="cardContainer contenedor">
                    {products.map(product => {
                    return <div key={product.id}>
                        <ItemList product={product} />
                    {/* <Item product={product} /> */}
                    </div>
                    })}
                </div>
                <ItemCount onAdd={cantidad => console.log(`Se agregaron ${cantidad} productos`)}/>
            </div>
        </section>
    )
}
export default ItemListContainer;