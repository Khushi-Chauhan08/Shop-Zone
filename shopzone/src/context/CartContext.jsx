import { createContext,useEffect,useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({children}) =>{

  const[cart, setCart] = useState(() =>{
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
    });
    const [user, setUser] = useState(() => {
        return localStorage.getItem("user") === "true";
    });
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));

    }, [cart]);
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);
    const addToCart = (product) =>{
        setCart((prev) => [...prev, product]);
    };
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter(item => item.id !== id));
       }


    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
           {children}
        </CartContext.Provider>
    );
};