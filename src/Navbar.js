import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

const Navbar = ({ cart }) => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://i.ibb.co/xSGK1Hs7/Logo.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <button onClick={scrollToTop}>Home</button>

        <div style={{ position: "relative" }}>
          <Link to="/cart">Cart</Link>
          {cart &&
            cart.reduce((total, item) => total + (item.quantity || 1), 0) >
              0 && (
              <span
                style={{
                  position: "absolute",
                  top: -8,
                  right: -14,
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {cart.reduce((total, item) => total + (item.quantity || 1), 0)}
              </span>
            )}
        </div>

        <button onClick={scrollToContact}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
