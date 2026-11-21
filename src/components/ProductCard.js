import { Link } from "react-router-dom";

function ProductCard({ phone , addToCart}) {
 
  

  let title = "iphone 18 PRO";
  return (
    <>
    <Link to={`/product/${phone.id}`}>
      <div className="card">
        <div className="card_top">
          <img width={"300px"} src={phone.image} />
        </div>
        <div className="card_bottom">
          <h1>{phone.brand}</h1>

          <p>{phone.price}</p>
        </div>
       
      </div>
    </Link>
    <button onClick={()=> addToCart(phone)}>Добавить в корз</button>
    </>
  );
}

export default ProductCard;
