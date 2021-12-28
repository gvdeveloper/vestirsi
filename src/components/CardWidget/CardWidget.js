import { Link } from "react-router-dom";
import "./cardWidget.css"
function CardWidget(){
    return(
        <div id="carrito-toggle">
            <Link to="/cart"><span className="material-icons-round shoppingCart">shopping_cart</span></Link>
        </div>
    )
};

export default CardWidget;