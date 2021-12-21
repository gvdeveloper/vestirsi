import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

function Home(){
    return(
        <div>
            <ItemListContainer msg="Mensaje de Prueba" />
            <ItemDetailContainer/>
        </div>
    )
}

export default Home;