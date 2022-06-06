import React, {useContext} from 'react'
import {CartContext} from './CartContext'
import {Link} from 'react-router-dom'

const CartItem = ({data}) => {
    const [addItem, removeItem, clear, isInCart, items] = useContext(CartContext)
    return (
      <tr >
        <td >{data.title}</td>
        <td >{data.qty}</td>
        <td >$ {data.precio}</td>
        <td >$ {data.precio * data.qty}</td>
        <td >
          <Link to="/del">
            <button onClick={() =>removeItem(data.id)}>
              Eliminar
            </button>
          </Link>
        </td>
      </tr>
    )
  }

  export default CartItem