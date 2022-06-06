import React from 'react'
import oblecom from "../imagenes/oblecom.png"
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import { useContext } from 'react'



export const Header = () => {
  const [addItem, removeItem, clear, isInCart, devuelveCantItems, items] = useContext(CartContext)

  return (
    <header className='header'>
       
            <div className="logo">
              <Link to="/">
              <img src={oblecom} alt="logo" width="150"></img>
              </Link>
                
            </div>
       
        <ul>
            <Link to="/" className='menu'>Inicio</Link>
            <Link to="/category/plataformas" className='menu'>Plataformas</Link>
            <Link to="/category/depiso" className='menu'>De piso</Link>
            
        </ul>
        <div> <CartWidget/></div>
    </header>
  )
} 

// export default index