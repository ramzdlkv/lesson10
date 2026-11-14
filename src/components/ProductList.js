import ProductCard from "./ProductCard"
import {phones} from "../data"
function ProductList(){
    
return (
    <div className="product_List">
        <h1>Товары</h1>
        <div className="products_cards">
            {phones.map((phone)=>{
              return  <ProductCard phone={phone}/>
            })}
           
        </div>
    </div>
)
}

export default ProductList