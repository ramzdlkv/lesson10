import icon from ".././free-icon-empty-cart-16961608.png"



function Cart({ cartItems }) {
  return (
    <>


      {cartItems.length !== 0 ?

        (
          cartItems.map((ele) => (
            <div className="cart-box" key={ele.id}>
              <div className="cart">
                <div className="cart-left">
                  <img src={ele.image} alt={ele.brand} />
                  <div className="cart-desc">
                    <h1>{ele.brand}</h1>
                    <p>{ele.price}$</p>
                  </div>
                </div>
                <div className="cart-right">

                  <div className="cart-button">
                    <button>-</button>
                    <p>{ele.quantity ?? 1}</p>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="cart-empty">
            <h1>Корзина пуста</h1>
            <img src={icon}></img>
          </div>

        )}
    </>
  );
}

export default Cart;