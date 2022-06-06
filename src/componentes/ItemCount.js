import React, { useState } from 'react'




const Counter = ({stock, initial, onAdd}) => {
    const [qty, setQty] = useState(initial)

    const sumaQty = () =>{
        if (qty < stock) {
            setQty(qty + 1 );
        }
    }

    const restaQty = () => {
        if (qty > 0 ) {
            setQty(qty - 1 ); 
        }
    }
   
   
   
    return (
    <section className='agregar'>
        <div className='botones'>
            <button  onClick={restaQty} > - </button>
            <p> {qty} </p>
            <button  onClick={sumaQty}> + </button>
        </div>
        {
            qty > 0 ?

            <button onClick={() => onAdd(qty)} className='estilo_alcarrito'>Agregar al carrito</button>
            : 

            <button> </button>
        } 

        
       
       
     
       </section> 
  )
}


export default Counter