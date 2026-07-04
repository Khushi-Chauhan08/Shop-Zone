import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

 function Cart(){
    const {cart, removeFromCart} = useContext(CartContext);
    const totalPrice = cart.reduce((total, item) => {
        return total + item.price * 95.29;
    },0);

    return (
    <div className="cart">
        <h1>Your Cart </h1>
        {cart.length === 0 ? (
            <p>Cart is Empty</p>
            
        ):(
            <> 
            <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.thumbnail} alt="{item.title}"/>

                <div className="cart-info">
                <h3>{item.title}</h3>
                <div className="price-btn">
                <p>₹{(item.price * 95.29).toLocaleString("en-IN")}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
              </div>
              </div>
             ))}
              </div>
            <h2>Total: ₹{totalPrice.toLocaleString("en-IN")}</h2>
            <Link to="/checkout">
            <button className="checkout-btn">Checkout</button>
            </Link>
          </>
    )}
        </div>
    );
}
export default Cart;