import React, {useState} from 'react';
import "./ItemCount.css"
function ItemCount({valorInicial=0, stock=4, onAdd}){
    const [cantidad, setState] = useState(valorInicial);

    const suma = ()=>{
        if(cantidad < stock) setState((sum)=> sum +1)
        else alert ("Llegó al máximo")
    }

    const resta = ()=>{
        if(cantidad > !stock) setState((rest)=> rest -1)
        else alert ("Llegó al mínimo")
    }

    return(
        <div className="container-btn-carrito">
            <div className="content-btn-carrito-cantidad">
                <button onClick={resta} className="btn-count">-</button>
                <p>{cantidad}</p>
                <button onClick={suma} className="btn-count">+</button>
            </div>
            <button onClick= {() =>onAdd(cantidad)} className="btn-addCarrito">AGREGAR</button>
        </div>
    )
}

export default ItemCount;