import React, {useState} from 'react';

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
        <div>
            <button onClick={suma}>+</button>
            <p>{cantidad}</p>
            <button onClick={resta}>-</button>
            <button onClick= {() =>{onAdd(cantidad)}}>AGREGAR AL CARRITO</button>
        </div>
    )
}

export default ItemCount;