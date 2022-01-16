import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
const Cart = ({item}) => {
  
  const {cartItems,removeItem} = useContext(CartContext)
  console.log("Muestra de" + cartItems)
  return (
    <div >
      <h1>SUS COMPRAS</h1>

      {cartItems.map((elements)=>(
        <div key={elements.id}>
          <img
          src={elements.item.image}
          alt={elements.item.title}
          ></img>
          <li ><p> {elements.item.title}</p></li>
          <li ><p> {elements.item.price}</p></li>
          <li ><p> {elements.item.total}</p></li>

          <button onClick={() => removeItem(item)} className='btn-danger'>Eliminar</button>

        </div>
      ))}
    </div>
  )
}

export default Cart