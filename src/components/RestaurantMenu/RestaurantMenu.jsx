import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./RestaurantMenu.css";

const RestaurantMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const restaurant = location.state?.restaurant;

  if (!restaurant) {
    return <p>Restaurant not found.</p>;
  }

  return (
    <div className="menu-container">
      <h1>{restaurant.name} Menu</h1>

      <div className="menu-grid">
        {restaurant.menu.map((item) => (
          <div key={item.id} className="menu-card">
            <img
              src={item.image || "default-food.png"} // Use a default image if missing
              alt={item.name}
              className="menu-item-image"
            />
            <div className="menu-content">
              <h3>{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p><strong>Price:</strong> {item.price}</p>

              {/* Check if nutrition info exists before displaying */}
              {item.nutrition ? (
                <>
                  <p><strong>Calories:</strong> {item.nutrition.calories}</p>
                  <p><strong>Protein:</strong> {item.nutrition.protein}</p>
                  <p><strong>Fat:</strong> {item.nutrition.fat}</p>
                  <p><strong>Carbs:</strong> {item.nutrition.carbs}</p>
                  <p><strong>Description:</strong> {item.description}</p>
                </>
              ) : (
                <p className="nutrition-missing">Nutrition info not available</p>
              )}

              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      <button className="back-button" onClick={() => navigate("/prevorders")}>
        Back to Restaurants
      </button>
    </div>
  );
};

export default RestaurantMenu;
