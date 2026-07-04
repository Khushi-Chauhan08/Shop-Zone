import { Link } from "react-router-dom";
import "./Home.css";

function Home(){
  return ( 
  <div className="home">
  <div className="banner">
  <h1>Welcome to ShopZone</h1>
  <p>Discover thes best products at amazing prices</p>
  <Link to="/shop">
  <button className="shop-btn">Shop Now</button>
  </Link>
  </div>
  </div>
);}
export default Home;