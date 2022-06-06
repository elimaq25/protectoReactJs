import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import CartItem from './CartItem'

const Cart = ({data}) => {

  const [addItem, removeItem, clear, isInCart, devuelveCantItems, items] = useContext(CartContext)
  const [show, setShow] = useState(false)
  const [total, setTotal] = useState(0)

  useEffect(()=> {
    if(items.length>0){
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
             {items.map((value)=> {
            return (
            <CartItem key={value.id} item={value} />  
            )
            })
            }
            <p>Total: ${total}</p> 
                           
          </>
            :
          <>
            <h2>Carrito vacío</h2>
           <Link to="/">Ver tienda</Link>
          </>
          } 
    </> 
)
}

  



export default Cart