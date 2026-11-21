import { useParams } from "react-router-dom";
import { phonesData } from "../data";

function ProductPage() {
  const { id } = useParams();
  const phone = phonesData.find((elem) => {
    return elem.id == id;
  });

  return (
    <div className="card">
      <div className="card_top">
        <img width={"300px"} src={phone.image} />
      </div>
      <div className="card_bottom">
        <h1>{phone.brand}</h1>

        <p>{phone.price}</p>
      </div>
    </div>
  );
}

export default ProductPage;
