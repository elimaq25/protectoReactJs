import React from 'react'
import {useEffect , useState} from "react"
import produc  from "./Productos"
import ItemDetail from '../componentes/ItemDetail'
import { Link, useParams } from 'react-router-dom';
import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from '../firebase/firesbaseConfig';



const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({}) 
   
    const { id } = useParams();
    

       useEffect(()=> {
        const getPantuflas = async () => {
          const q = query(collection(db, "pantuflas"), where(documentId(), "==", id));
          const docs = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            docs.push({ ...doc.data(), id: doc.id });
          });
          console.log(docs)
          setProducto(docs)
        }   
          getPantuflas()
       }, [id]) 

   
    // const [producto, setProducto] = useState({});
    // const { id } = useParams();
    


    // useEffect(()=>{
       
    //     const detall = new Promise((resolve, reject)=>{
    //        setTimeout(()=>{
    //            const myData = produc.find((item) => item.id === id)
    //         resolve(myData);
    //        }, 2000)
           
    //     }); 

    //     detall.then((detall)=>{
    //         setProducto(detall);
    //     } );
    //     detall.catch((err) => {
    //         console.log(err)
    //     });
    // }, [id]);

  return (
    <div>
        <>
         <ItemDetail producto={producto}/>
       </>
        <>
        {/* <ItemDetail {...producto}/> */}
        </>
       
    </div>
  )
}





export default ItemDetailContainer