import { Routes, Route, } from "react-router-dom";
import { CartContext } from "./CartContext";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <>
    <CartContext.Provider value={{}}>
      <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>} exact></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/products" element={<ProductsPage/>}></Route>
      <Route path="/products/:id" element={<SingleProduct/>}></Route>
    </Routes>
    </CartContext.Provider>
    </>
  );
}

export default App;
