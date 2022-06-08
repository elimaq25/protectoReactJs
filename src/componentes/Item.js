import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    // const {id, title, descpricion, precio, src} = item;
  return (
    <Link to={`/item/${item.id}`}>
    <div className='productos' >
      <div className='producto'>
      <img className='fotos' src={item.img}/>
        <h5 className='title'>{item.title}</h5>
        <div className='producto__footer'>
        <p className='details'>{item.descpricion} ${item.precio}</p>
        <p> id: {item.id}</p>
        
        </div>
       
       
      </div>
       
    </div>
    </Link>
  )
}

export default Item