import React from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firesbaseConfig';

const Plataformas = () => {

  const [productos, setProductos] = useState([])    

  useEffect(()=> {
   const getPantuflas = async () => {
     const q = query(collection(db, "pantuflas"), where("category",  "==", "depiso"))
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


// const Plataformas = () => {
//   return (
//     <div>
//         <h1>Plataformas</h1>

//         <img className='fotos' src="/assets/2.jpg"/>
//         <h5 className='title'>Modelo Unicornio</h5>
//         <div className='producto__footer'>
//         <p className='details'>descripcion: "pantufla con diseño",
//             precio: $225</p>
//         <p> id: 1235</p>
//         </div>

//         <img className='fotos' src="/assets/3.jpg"/>
//         <h5 className='title'>Modelo Barbie</h5>
//         <div className='producto__footer'>
//         <p className='details'>descripcion: "pantufla que brilla en la oscuridad",
// ,
//             precio: $225</p>
//         <p> id: 1236</p>
//         </div>
//         <img className='fotos' src="/assets/6.jpg"/>
//         <h5 className='title'>Modelo Lizzy</h5>
//         <div className='producto__footer'>
//         <p className='details'>descripcion: pantufla con brillantes
//             precio: $255</p>
//         <p> id: 1238</p>
//         </div>
       
//     </div>
//   )
// }

export default Plataformas;