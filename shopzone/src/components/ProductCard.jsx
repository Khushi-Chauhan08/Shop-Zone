import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ProductCard.css";

function ProductCard({ product }){
    const {addToCart} = useContext(CartContext);
    return(
        <div className="card">
           <img src={product.thumbnail} alt={product.title} />
           <h3>{product.title}</h3>
           <p>₹{(product.price * 95.29).toLocaleString("en-IN")}</p>
        <div className="btns">
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to={`/product/${product.id}`}>
           <button>View</button>
           </Link>
           </div>
        </div>
    );
}
export default ProductCard;