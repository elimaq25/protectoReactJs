import React, { createContext, useState } from "react";

export const CartContext = createContext(); 

    export const CartProvider = ({children}) => {

        const [items, setItems] = useState([])
        
        const addItem = (value) =>{
            let found = undefined
        
            
        const newProduct = {
            id: value.id,
            title: value.title,
            precio: value.precio,
            qty: Number(value.qty)
        }

        items.forEach((item, index)=>{
            if(item.id === value.id){
                found = index
            }
        })

        if(found === undefined) {
            items.push(newProduct)
            setItems([...items])
            console.log(items)
            console.log("Producto agregado")
        } else {
            items[found].qty += Number(value.qty)
            setItems([...items])
            console.log("Producto modificado")
            console.log(items)
        }
        }

        const removeItem = (itemId) => {
            let found = false

            items.forEach((item, index)=>{
                if(item.id === itemId) {
                    found = index
                }
            }); 

            if (found !== false){
                items.splice(found, 1)
                setItems([...items])
            }else {
                console.log("No se encontro el producto")
            }
        }

        const clear = () => {
            setItems([])
        }

        const isInCart = (id) => {
            const found = items.find(item => item.id === id);

            if(found){
                return(true)
            }else{
                return(false)
            }
        }

        const devuelveCantItems = ()=> {
            const cantProd = items.reduce(
                (total, item) => (total = total + item.qty),
                0
            )
            return cantProd
        }




// export const CartProvider = ({children}) => {

//     const [items, setItems] = useState([])
    
//     const addItem = (value) =>{
//         let found = undefined
    
        
//        const newProduct = {
//            id: value.id,
//            title: value.title,
//            precio: value.precio,
//            qty: Number(value.qty)
//        }

//        items.forEach((item, index)=>{
//            if(item.id === value.id){
//                found = index
//            }
//        })

//        if(found === undefined) {
//            items.push(newProduct)
//            setItems([...items])
//            console.log(items)
//            console.log("Producto agregado")
//        } else {
//            items[found].qty += Number(value.qty)
//            setItems([...items])
//            console.log("Producto modificado")
//            console.log(items)
//        }
//     }

//     const removeItem = (itemId) => {
//         let found = false

//         items.forEach((item, index)=>{
//             if(item.id === itemId) {
//                 found = index
//             }
//         }); 

//         if (found !== false){
//             items.splice(found, 1)
//             setItems([...items])
//         }else {
//             console.log("No se encontro el producto")
//         }
//     }

//     const clear = () => {
//         setItems([])
//     }

//     const isInCart = (id) => {
//         const found = items.find(item => item.id === id);

//         if(found){
//             return(true)
//         }else{
//             return(false)
//         }
//     }

//     const devuelveCantItems = ()=> {
//         const cantProd = items.reduce(
//             (total, item) => (total = total + item.qty),
//             0
//         )
//         return cantProd
//     }

    
    
    return (
        <CartContext.Provider value={[addItem, removeItem, clear, isInCart, devuelveCantItems, items]}>
            {children}
        </CartContext.Provider>
    )
}