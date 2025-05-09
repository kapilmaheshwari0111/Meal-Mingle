import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";  

const FoodItem = ({ id, name, price, description, image, nutrition }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="fooditem">
      <div className="fooditemimgcont">
        <img className="fooditemimg" src={image} alt={name || "Food item"} />
        {!cartItems[id] ? (
          <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to cart"/>
        ) : (
          <div className="fooditemcount">
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove from cart"/>
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add more"/>
          </div>
        )}
      </div>
      <div className="fooditeminfo">
        <div className="fooditemnamerating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="fooddes">{description}</p>
        
        {nutrition && (
          <div className="nutritioninfo">
            <p><strong>Calories:</strong> {nutrition.calories}</p>
            <p><strong>Protein:</strong> {nutrition.protein}</p>
            <p><strong>Fat:</strong> {nutrition.fat}</p>
            <p><strong>Carbs:</strong> {nutrition.carbs}</p>
          </div>
        )}

        <p className="fooditemprice">{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
