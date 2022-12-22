import "./Shop.css";
import { Products } from "../../Products/Products";
import Product from "./Product";

const Shop = () => {
  return (
    <div className="">
      <div className="products">
        {Products.map((e) => (
          <Product key={e.id} data={e} />
        ))}
      </div>
    </div>
  );
};
export default Shop;
