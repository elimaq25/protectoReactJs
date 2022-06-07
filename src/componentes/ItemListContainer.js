import React from 'react'
import { useEffect, useState } from 'react'
import produc from './Productos';
import ItemList from "../componentes/ItemList";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { category } from "./Productos";
import { collection, query, where, documentId, getDocs } from "firebase/firestore";
import { db } from '../firebase/firesbaseConfig';



const ItemListContainer = () => {

       const [productos, setProductos] = useState([])    
       

       useEffect(()=> {
        const getPantuflas = async () => {
          const q = query(collection(db, "pantuflas"))
          const docs = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            docs.push({ ...doc.data(), id: doc.id });
          });
          // console.log(docs)
          setProductos(docs)
        }
          getPantuflas()
       }, [])

  //   const [items, setItems] = useState([]);
  //   const { category } = useParams();
      
  

  //   useEffect(()=>{
  //       // setTimeout(()=>{

  //       // }, 2000
  //       // )
       
  //       const data = new Promise((resolve)=>{
  //         const productosFiltrados = produc.filter(
  //           (prod)=>prod.category === category);
  //          setTimeout(()=>{
  //           if (category === undefined) {
  //             resolve(produc);
  //           } else {
  //             const productosFiltrados = produc.filter(
  //               (prod) => prod.category === category
  //             ); 
  //             resolve(productosFiltrados)
  //           }
            
  //          }, 2000)
           
  //       });

  //       data.then((data)=>{
  //           setItems(data);
  //       } );
  //       data.catch((err) => {
  //           console.log(err)
  //       });
  //   }, [category]);

        return (
          <>
          <h1>Catalogo de productos</h1>
          {productos.map((data) => {
            return(
              <Link to={`item/${data.id}`} key={data.id}>
              <ItemList productos={data}/>
              </Link>
            )
          })}
          {/* <ItemList items={items}/> */}
          
            
          </>
        );  
};


export default ItemListContainer


