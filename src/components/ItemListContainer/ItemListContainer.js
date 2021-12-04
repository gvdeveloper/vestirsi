import "../../styles.css"

const textColor = {
    color: "rgb(0,140,69)"
}

function ItemListContainer(props){
    return(
        <section className="contenedor">
            <div>
                <h2 style={textColor} className="container">{props.msg}</h2>
            </div>
        </section>
    )
}


export default ItemListContainer;