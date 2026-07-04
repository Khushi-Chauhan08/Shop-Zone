import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Navigate } from "react-router-dom";
import Login from "./Login";

function Checkout(){
    const {user, cart} = useContext(CartContext);

    if(!user){
        return <Navigate to="/login"/>;
    }
    return (
        <div style={{padding:"20px"}}>
    <h1>Checkout </h1>
    {cart.length ===0?(
        <h3>Your cart is empty</h3>
    ):(
        <>
        {cart.map ((item) => (
            <div key={item.id}>
                <p>{item.title}</p>
            </div>
        ))}
        <h2>Total: ₹
            {cart.reduce((sum, item) => sum + item.price * 95.29, 0)}
        </h2>
        </>
    
    )}
    </div>
    );}
export default Checkout;