import React from 'react'
import { useEffect, useState } from 'react'
import produc from './Productos';
import ItemList from "../componentes/ItemList";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { category } from "./Productos";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { category } = useParams();
      
  

    useEffect(()=>{
        // setTimeout(()=>{

        // }, 2000
        // )
       
        const data = new Promise((resolve)=>{
          const productosFiltrados = produc.filter(
            (prod)=>prod.category === category);
           setTimeout(()=>{
            if (category === undefined) {
              resolve(produc);
            } else {
              const productosFiltrados = produc.filter(
                (prod) => prod.category === category
              ); 
              resolve(productosFiltrados)
            }
            
           }, 2000)
           
        });

        data.then((data)=>{
            setItems(data);
        } );
        data.catch((err) => {
            console.log(err)
        });
    }, [category]);

  return (
    <>
    
    <ItemList items={items}/>
    
       
    </>
  );  
};


export default ItemListContainer


