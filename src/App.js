import {Route, Routes, Link} from "react-router-dom";
import './App.css';
import ProductList from "./components/ProductList";
import About from "./components/About";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <div className="App">
      <header>
        <div className='logo'></div>
        <div className='navigation'>
          <a>Home</a>
          <a href="about">About</a>
          <a>Contacts</a>
        </div>
        <div className='btns_header'></div>
      </header>

      <main>
          <Routes>
            <Route  path="/" element={<ProductList/>} />
            <Route  path="/about" element={<About/>} />
            <Route  path="/product/:id" element={<ProductPage/>} />
          </Routes>
      </main>

    </div>
  );
}

export default App;
