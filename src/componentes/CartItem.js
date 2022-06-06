import React, {useContext} from 'react'
import {CartContext} from './CartContext'
import {Link} from 'react-router-dom'

const CartItem = ({item}) => {
    const [addItem, removeItem, clear, isInCart, items] = useContext(CartContext)
    return (
      <tr >
        <td >{item.title}</td>
        <td >{item.qty}</td>
        <td >$ {item.precio}</td>
        <td >$ {item.precio * item.qty}</td>
        <td >
          <Link to="/del">
            <button onClick={() =>removeItem(item.id)}>
              Eliminar
            </button>
          </Link>
        </td>
      </tr>
    )
  }

  export default CartItem