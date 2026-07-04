import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const {cart} =useContext(CartContext);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/shop" className="nav-link">Shop</Link>
      <Link to="/cart" className="nav-link">Cart ({cart.length})</Link>
      <Link to="/login" className="nav-link">Login</Link>
    </nav>
  );
}

export default Navbar;