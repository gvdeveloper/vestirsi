import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
const Cart = () => {
  
  const {cartItems} = useContext(CartContext);

  return (
    <div>
      {cartItems.map((elements)=>(
        <div>{elements.title}</div>
      ))}
    </div>
  )
}

export default Cart