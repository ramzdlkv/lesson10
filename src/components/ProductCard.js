import { Link } from "react-router-dom";

function ProductCard({ phone }) {
    console.log(phone);

    let title = "Iphone 18 PRO"
    return (<div className="card">
        <Link to ={`/product/${phone.id}`}>
            <div className="card-top">
                <img width={"300px"} src={phone.image} />
            </div>
            <div className="card-bottom">
                <h1>{phone.brand}</h1>
                <p>{phone.price}</p>
            </div>

        </Link>

        
    </div>
    )
}

export default ProductCard