import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
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
    if (contact) contact.scrollIntoView({ behavior: "smooth" });
    else navigate("/"); // fallback if not on homepage
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://i.ibb.co/xSGK1Hs7/Logo.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <button onClick={scrollToTop}>Home</button>
        <Link to="/cart">Cart</Link>
        <button onClick={scrollToContact}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
