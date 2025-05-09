import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const scrollToFoodItems = () => {
    const foodItemsSection = document.getElementById("food-items");
    if (foodItemsSection) {
      foodItemsSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}>
          <Link to="/" onClick={() => setMenu("home")}>Home</Link>
          </li>
          <li className={menu === "menu" ? "active" : ""}>
  <Link
    to="/"
    onClick={(e) => {
      e.preventDefault(); // Prevent navigation
      setMenu("menu");
      scrollToFoodItems(); // Scroll to food section
    }}
  >
    Menu
  </Link>
</li>

        <li className={menu === "review" ? "active" : ""}>
          <Link to="/review" onClick={() => setMenu("review")}>Review</Link>
        </li>
        <li className={menu === "prevorders" ? "active" : ""}>
          <Link to="/prevorders" onClick={() => setMenu("prevorders")}>Restaurant</Link>
        </li>
        <li className={menu === "contact-us" ? "active" : ""}>
          <Link to="/contact-us" onClick={() => setMenu("contact-us")}>Contact Us</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket" />
          </Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
