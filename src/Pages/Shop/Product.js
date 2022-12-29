import { useContext } from "react";
import { shoppingContext } from "../../Context/ContextProvider";

const Product = ({ data }) => {
  const { id, productName, productImage, price } = data;

  const { addToCart, cartItems } = useContext(shoppingContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} width="200px" height='200px' alt="error" />
      <div className="desc">
        <p>
          <b>{productName}</b>
        </p>
        <p>&#8377;{price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart{cartItemAmount > 0 ? ` ${cartItemAmount}` : null}
        </button>
      </div>
    </div>
  );
};
export default Product;
