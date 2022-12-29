import "./Cart.css";
import { Products } from "../../Products/Products";
import CartProducts from "./CartProducts";
import { shoppingContext } from "../../Context/ContextProvider";
import {useNavigate} from 'react-router-dom';
import { useContext } from "react";

const Cart = () => {
  const { cartItems,getTotalCartAmount,checkout } = useContext(shoppingContext);
  let totalAMount = getTotalCartAmount()
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your cart Items</h1>
      </div>
      <div className='cartItems'>
      {Products.map((e) => {
        if (cartItems[e.id] > 0) {
          return <CartProducts data={e} />;
        }
      })}
      </div>
      { totalAMount > 0 ?(
      <div className='checkout'>
        <p>Total Amount:{totalAMount}</p>
        <button onClick={()=>navigate('/')}>Continue Shopping</button>
        <button onClick={()=>{
          checkout();
          navigate('/')
        }}>checkout</button>
      </div>)
      :
      ('Your cart Items is Empty')
}
    </div>
  );
};
export default Cart;
