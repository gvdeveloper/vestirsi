import "../../styles.css"
import ItemCount from "../ItemCount/ItemCount"
import Item from "../ItemList/Item"
const textColor = {
    color: "rgb(0,140,69)"
}

function ItemListContainer(props){
    return(
        <section className="contenedor">
            <div>
                <h2 style={textColor} className="container">{props.msg}</h2>
                < Item/>
            <ItemCount onAdd={cantidad => console.log(`Se agregaron ${cantidad} productos`)}/>
            </div>
        </section>
    )
}


export default ItemListContainer;