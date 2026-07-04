 import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Product.css";

 function Product(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    const {addToCart} = useContext(CartContext);

    useEffect(() =>{
      fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("PRODUCT DATA:", data);
        setProduct(data);
      });

    },[id]);
    if(!product) return <h2>Loading...</h2>;

    return (
        <div className="product-page">
        <div className="product-container">
          <img src={product.thumbnail} alt={product.title} className="product-image" />

        <div className="product-details">
         <h1>{product.title}</h1>
         <p className="desc">{product.description}</p>
       
      
      <h2 className="price">
        ₹{(product.price * 95.29).toLocaleString("en-IN")}
      </h2>
      <button className="add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
      </div>
      </div>
);
}
export default Product;