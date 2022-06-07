import React from 'react'
import Item from "../componentes/Item";
import { Link } from 'react-router-dom';


    const ItemList = ({productos}) => {
      return (
      <div>
        <Link to={`/item/${productos.id}`}>
        <div className='productos' >
          <div className='producto'>
          <img className='fotos' src={productos.img}/>
            <h5 className='title'>{productos.title}</h5>
            <div className='producto__footer'>
            <p className='details'>${productos.precio}</p>
            <p> id: {productos.id}</p>
            
            </div>
       
       
      </div>
       
    </div>
    </Link>  
          </div>
        );
      };
// const ItemList = ({items}) => {
//   return (
//     <div>
//         {items.map((iterar) => {
//             return <Item key={iterar.id} item={iterar}/> 
//         })}
//     </div>
//   );
// };

export default ItemList







