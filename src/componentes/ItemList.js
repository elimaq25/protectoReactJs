import React from 'react'
import Item from "../componentes/Item";

const ItemList = ({items}) => {
  return (
    <div>
        {items.map((iterar) => {
            return <Item key={iterar.id} item={iterar}/> 
        })}
    </div>
  );
};

export default ItemList







