import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login(){
  const {setUser} = useContext(CartContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    setUser(true);
    navigate("/checkout");
  };
   return (
  <div className="login-container">
    <h1>Welcome Back</h1>
    <p>Login to continue to checkout</p>
    <button className="login-btn" onClick={handleLogin}>Login as Guest</button>
  </div>
   
);}

export default Login;