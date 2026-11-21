import { Route, Routes, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import About from "./components/About";
import ProductPage from "./components/ProductPage";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import "./App.css"

function App() {


  const savePhonesGet = JSON.parse(localStorage.getItem("cart")) || []
  
    const [cart, setCart] = useState(savePhonesGet);

  const addToCart = (phone) => {
    alert(phone.brand);
    setCart([...cart, phone]);
    console.log(cart);
  };

  useEffect(() => {
        localStorage.setItem("cart" , JSON.stringify(cart))
    
  }, [cart]);
  return (
    <div className="App">
      <header>
        <div className="logo"></div>
        <div className="navigation">
          <Link to="/">Home</Link>
          <Link to="/aboudsrftgdhsfguyhrtdsusryhrshysdthgesserergrert">About</Link>
          <Link to="/cart">Contacts</Link>
        </div>
        <div className="btns_header"></div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart cartItems={savePhonesGet} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
