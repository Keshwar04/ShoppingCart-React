const Product = ({ data }) => {
  const { id, productName, productImage, price } = data;

  return (
    <div className="product">
      <img src={productImage} width="200px" alt="error" />
      <div className="desc">
        <p>
          <b>{productName}</b>
        </p>
        <p>{price}</p>
        <button className="addToCartBttn">Add To Cart</button>
      </div>
    </div>
  );
};
export default Product;
