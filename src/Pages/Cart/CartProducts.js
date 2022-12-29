import { useContext } from "react";
import { shoppingContext } from "../../Context/ContextProvider";
const CartProducts = ({ data }) => {
  const { cartItems, addToCart, removeFromCart, manualCartItemCount} = useContext(shoppingContext);

  const { id, productName, productImage, price } = data;
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>&#8377;{price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input value={cartItems[id]} onChange={(e)=>(manualCartItemCount(Number(e.target.value),id))}  />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
export default CartProducts;
