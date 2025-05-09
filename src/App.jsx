import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Placeorder from "./pages/placeorder/Placeorder";
import Cart from "./pages/cart/Cart";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Contact from "./components/Contact/Contact";
import ReviewPage from "./components/ReviewPage/ReviewPage";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
import RestaurantPage from "./components/RestaurantPage/RestaurantPage";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/placeorder" element={<Placeorder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/prevorders" element={<RestaurantPage />} />
          <Route path="/menu/:id" element={<RestaurantMenu />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
