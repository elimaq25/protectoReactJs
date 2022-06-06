import React from 'react'
import {useEffect , useState} from "react"
import produc  from "./Productos"
import ItemDetail from '../componentes/ItemDetail'
import { Link, useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
   
    const [producto, setProducto] = useState({});
    const { id } = useParams();
    // console.log(category)


    useEffect(()=>{
        // setTimeout(()=>{

        // }, 2000
        // )
        const detall = new Promise((resolve, reject)=>{
           setTimeout(()=>{
               const myData = produc.find((item) => item.id === id)
            resolve(myData);
           }, 2000)
           
        }); 

        detall.then((detall)=>{
            setProducto(detall);
        } );
        detall.catch((err) => {
            console.log(err)
        });
    }, [id]);

  return (
    <div>
        
        <ItemDetail {...producto}/>
        
       
    </div>
  )
}





export default ItemDetailContainer