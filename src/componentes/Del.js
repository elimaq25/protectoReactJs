import React from 'react'
import { Link } from 'react-router-dom'



const Del = () => {
  return (
    <>
        <h1 >Articulo eliminado</h1>
        <div >
        <Link to="/cart">Volver al Carrito</Link>
        </div>

    </>
  )
}

export default Del 