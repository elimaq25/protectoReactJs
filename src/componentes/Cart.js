import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import CartItem from './CartItem'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firesbaseConfig';
// import Finalizar from './Finalizar'

const initialState = {
  nombre: "", 
  telefono: "",
  correo: "",
}

const Cart = ({data}) => {

  const [addItem, removeItem, clear, isInCart, devuelveCantItems, items] = useContext(CartContext)
  const [show, setShow] = useState(false)
  const [total, setTotal] = useState(0)
  const [buyer, setBuyer] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");

  useEffect(()=> {
    if(items.length>0){
      setShow(true)
    }

    let partial = 0 
    items.forEach(data => {
      partial = partial + (data.precio*data.qty)
    })
    setTotal(partial)
  }, []); 


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
        total,
        fecha
      });
      console.log("Document written with ID: ", docRef.id);
      setPurchaseID(docRef.id);
      setBuyer(initialState);
      alert("Gracias por tu compra\nSu codigo de seguimiento es: \n" + docRef.id)
    
}
 
  return (
   
    <>
        { show ?
          <>
             {items.map((value)=> {
            return (
            <CartItem key={value.id} item={value} />  
            )
            })
            }
            <p>Total: ${total}</p> 
            <br></br>
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
            {/* <Link to="/finalizar" ><Finalizar items={items}/><button>Finalizar compra</button> </Link>              */}
          </>
            :
          <>
            <h2>Carrito vacío</h2>
           <Link to="/">Ver tienda</Link>

          </>
          } 
    </> 
)
}

  



export default Cart