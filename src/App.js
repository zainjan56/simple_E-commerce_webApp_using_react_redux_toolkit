import React from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header /><br></br>
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/carts" element={<Cart />}></Route>
          <Route>404: Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
