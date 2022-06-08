import React from "react";
import { Header } from "./componentes/NavBar";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
//Componentes

import ItemListContainer from "./componentes/ItemListContainer"

import ItemDetailContainer from "./componentes/ItemDetailContainer";

import { CartProvider } from "./componentes/CartContext";
import Cart from "./componentes/Cart";
import Del from "./componentes/Del";
import Finalizar from "./componentes/Finalizar";


  

function App() {
  return (
    <CartProvider>
    <>
    
    
    <Router>
      <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/finalizar" element={<Finalizar/>}/>
        <Route path="/del" element={<Del/>}/>


      </Routes>
    
     <br/>

     <br/>
     {/* <ItemCoun></ItemCoun> */}
     </div>
     </Router>
     
    </>
    </CartProvider>
    

  );
}

export default App;
