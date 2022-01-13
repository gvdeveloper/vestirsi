import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
const Cart = () => {
  
  const {cartItems, total, price,} = useContext(CartContext);

  return (
    <div>
      <h1>SUS COMPRAS</h1>
      {cartItems.map(elements=>(
        <li key={elements.id}><p>{elements.price}</p></li>
      ))}
    </div>
  )
}

export default Cart