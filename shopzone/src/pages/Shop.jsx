import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Shop.css";

 function Shop(){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data =>{
      setProducts(data.products);
    });
  },[]);
    return (
     <div className="shop">
       <h1>Shop Page</h1>
        <div className="products">
          {products.map((item) =>(
            <ProductCard key ={item.id} product={item}/>
          ))}

        </div>
</div>
    );
}
export default Shop;