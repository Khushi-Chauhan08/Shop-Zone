import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";

function App(){
  return (
    <> 
    <Navbar/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/shop" element={<Shop/>}/>
     <Route path="/product/:id" element={<Product/>}/>
     <Route path="/cart" element={<Cart/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/checkout" element={<Checkout/>}/>
  </Routes>
  </>
  );
}

export default App;