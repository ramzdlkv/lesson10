import ProductCard from "./ProductCard";
import { phonesData } from "../data";
function ProductList({addToCart}) {
  return (
    <div className="product_list">
      <h1>Товары</h1>
      <div className="product_cards">
        {phonesData.map((phone) => {
          return <ProductCard phone={phone} addToCart={addToCart}  />;
        })}
      </div>
    </div>
  );
}

export default ProductList;
