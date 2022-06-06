import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import CartItem from './CartItem'

const Cart = props => {

  const [addItem, removeItem, clear, isInCart, devuelveCantItems, items] = useContext(CartContext)
  const [show, setShow] = useState(false)
  const [total, setTotal] = useState(0)

  useEffect(()=> {
    if(items.lenght>0){
      setShow(true)
    }

    let partial = 0 
    items.forEach(data => {
      partial = partial + (data.precio*data.qty)
    })
    setTotal(partial)
  }, []); 
 
  return (
   
    <>
        { show ?
          <>
             {items.map((data)=> {
            return (
            <CartItem key={data.id} item={data} />  
            )
            })
            }
            <p>Total: ${total}</p> 
                           
          </>
            :
          <>
            <h2>Carrito vacío</h2>
           
          </>
          } 
    </> 
)
}

  



export default Cart