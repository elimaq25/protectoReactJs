import React, { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { db } from '../firebase/firesbaseConfig';
import { CartContext } from './CartContext'
import { useContext } from 'react'
import { async } from '@firebase/util';




// function Finalizar({total}) {
//     const {items} = useContext(CartContext); 
//     const [order, setOrder] = useState("");
    
//     let today = new Date();
//     const initialState = {
//         nombre: "",
//         telefono: "",
//         correo: "", 
//         buyer: [ 
//             {
//             nombre: "",
//             telefono: "",
//             correo: "", 
//             },
//         ],
//         items: [
//             {
//                 id: "",
//                 title: "",
//                 precio: "",
//             },
//         ],
//         date: "",
//         total: "",
//         }

//         const [values, setValues] = useState(initialState);
//         const [buyer, setBuyer] = useState(initialState);

//         const handleOnChange = (e) => {
//             const {name, value} = e.target;
//             setValues({
//                 ...values, 
//                 buyer: [{ ...values.buyer[0], [name]:  value}],
//                 items: items,
//                 total: total,
//                 total: Number(total),
//                 date: today,
//             });
//         }; 

//         const onSubmit = async (e) => {
//             e.preventDefault();
//             const docRef = await addDoc(collection(db, "Compras"), values);
//             setOrder(docRef.id);
//             setValues(initialState);
//         }; 

//         console.log(items);

    

const initialState = {
    nombre: "", 
    telefono: "",
    correo: "",
}

const Finalizar = ({items}) => {
    // const {items} = useContext(CartContext)
    
    const [buyer, setBuyer] = useState(initialState);
    const [purchaseID, setPurchaseID] = useState("");

    const handleOnChange = (e) => {
        const {value, name} = e.target;
        setBuyer({...buyer, [name]: value})
        
    };

    const onSubmit = async (e) => {
        e.preventDefault(); 
        const fecha = new Date().toLocaleString()
        


        const docRef = await addDoc(collection(db, "compras"), {
            buyer,
            items,
            fecha
          });
          console.log("Document written with ID: ", docRef.id);
          setPurchaseID(docRef.id);
          setBuyer(initialState);
          alert("Gracias por tu compra\nSu codigo de seguimiento es: \n" + docRef.id)
        
    }


  return (
    <div>
    <h1>Finalizar Compra</h1>
    <form onSubmit={onSubmit}>
        <h3>Datos para confirmar compra</h3>
        <label>
            Nombre</label>
        <input 
        type="text"
        name="nombre" 
        placeholder='Nombre completo' 
        value={buyer.name} 
        onChange={handleOnChange}>

        </input>
        <br></br>
        <label>
            Telefono</label>
        <input 
        type="number"
        name="telefono" 
        placeholder='A diez digitos' 
        value={buyer.telefono} 
        onChange={handleOnChange}>

        </input>
        <br></br>
        <label>
            Correo electronico</label>
        <input 
        type="text"
        name="correo" 
        value={buyer.correo} 
        onChange={handleOnChange}></input>
        <br></br>
        <button>Enviar</button>
    </form>
    </div>
  )

  }
export default Finalizar