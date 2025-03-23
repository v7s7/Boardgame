import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import GamePage from "./GamePage";
import CartPage from "./CartPage";
import Navbar from "./Navbar";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) => {
    const existingIndex = cart.findIndex(
      (item) => item.gameId === newItem.gameId && item.box.id === newItem.box.id
    );

    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...newItem, quantity: 1 }]);
    }
  };

  const removeFromCart = (indexToRemove) => {
    const updatedCart = [...cart];

    if (updatedCart[indexToRemove].quantity > 1) {
      updatedCart[indexToRemove].quantity -= 1;
    } else {
      updatedCart.splice(indexToRemove, 1); // remove the item
    }

    setCart(updatedCart);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/game/:gameId"
          element={<GamePage addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
