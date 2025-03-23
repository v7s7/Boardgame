import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import GamePage from "./GamePage";
import CartPage from "./CartPage";
import Navbar from "./Navbar";

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const existing = cart.find(
      (i) => i.gameId === item.gameId && i.box.id === item.box.id
    );

    if (existing) {
      const updated = cart.map((i) =>
        i.gameId === item.gameId && i.box.id === item.box.id
          ? { ...i, quantity: (i.quantity || 1) + 1 }
          : i
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (indexToRemove) => {
    const updatedCart = [...cart];

    if (updatedCart[indexToRemove].quantity > 1) {
      updatedCart[indexToRemove].quantity -= 1;
    } else {
      updatedCart.splice(indexToRemove, 1);
    }

    setCart(updatedCart);
  };

  return (
    <Router>
      <Navbar cart={cart} />
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
