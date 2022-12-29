import { createContext, useState } from "react";
import { Products } from "../Products/Products";

export const shoppingContext = createContext();

const defaultCartItems = () => {
  let cart = {};
  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ContextProvider = (props) => {
  
  const [cartItems, setCartItems] = useState(defaultCartItems());
  
  const getTotalCartAmount = () =>{
    let totalAMount = 0;
    for(const x in cartItems){
        let itemInfo = Products.find((e) => e.id === Number(x))
        totalAMount = totalAMount + cartItems[x] * itemInfo.price;
    }
    return totalAMount;
  }
  console.log(getTotalCartAmount())

  const addToCart = (itemId) => {
    setCartItems({ ...cartItems, [itemId]: cartItems[itemId] + 1 });
  };
  
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  
  const manualCartItemCount = (value, itemId) =>{
    setCartItems({...cartItems,[itemId]: value })
  } 
  
  const checkout = () =>{
    setCartItems(defaultCartItems())
  }

  const contextValue = { cartItems, addToCart, removeFromCart, 
                         manualCartItemCount, getTotalCartAmount,
                         checkout};

  return (
    <div>
      <shoppingContext.Provider value={contextValue}>
        {props.children}
      </shoppingContext.Provider>
    </div>
  );
};
export default ContextProvider;
