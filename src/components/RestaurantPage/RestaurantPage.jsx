import React from "react";
import { useNavigate } from "react-router-dom";
import "./RestaurantPage.css";

const restaurants = [
  {
    id: 1,
    name: "McDonald's",
    image: "mcd.png",
    description: "A global fast-food chain known for its burgers, fries, and shakes.",
    menu: [
      { id: 1, name: "McVeggie Burger", price: "₹99", description: "A crispy vegetable patty with fresh lettuce and mayo in a soft bun.", nutrition: { calories: 450, protein: "9g", fat: "20g", carbs: "50g" } },
      { id: 2, name: "McChicken Burger", price: "₹120", description: "Juicy chicken patty with crispy lettuce and creamy mayonnaise.", nutrition: { calories: 500, protein: "22g", fat: "25g", carbs: "45g" } },
      { id: 3, name: "French Fries", price: "₹70", description: "Golden, crispy fries lightly salted and served hot.", nutrition: { calories: 320, protein: "4g", fat: "17g", carbs: "42g" } },
      { id: 4, name: "McFlurry", price: "₹120", description: "Creamy soft-serve ice cream mixed with delicious toppings.", nutrition: { calories: 380, protein: "7g", fat: "10g", carbs: "60g" } },
      { id: 5, name: "Cold Coffee", price: "₹110", description: "Rich and refreshing cold coffee with a creamy texture.", nutrition: { calories: 250, protein: "6g", fat: "12g", carbs: "30g" } },
    ],
  },
  {
    id: 2,
    name: "Burger King",
    image: "bk.png",
    description: "Home of the Whopper and flame-grilled burgers with a unique taste.",
    menu: [
      { id: 1, name: "Whopper", price: "₹150", description: "A flame-grilled beef burger with fresh toppings and mayo.", nutrition: { calories: 660, protein: "28g", fat: "40g", carbs: "49g" } },
      { id: 2, name: "Veg King Burger", price: "₹130", description: "Crispy veggie patty with lettuce and tangy mayo in a bun.", nutrition: { calories: 520, protein: "10g", fat: "22g", carbs: "60g" } },
      { id: 3, name: "Crispy Chicken", price: "₹140", description: "Crunchy chicken patty with lettuce and mayo in a toasted bun.", nutrition: { calories: 550, protein: "25g", fat: "28g", carbs: "45g" } },
      { id: 4, name: "Chicken Fries", price: "₹100", description: "Crispy chicken fries seasoned with special spices.", nutrition: { calories: 430, protein: "23g", fat: "26g", carbs: "30g" } },
      { id: 5, name: "Choco Shake", price: "₹130", description: "Thick and creamy chocolate shake blended with rich cocoa.", nutrition: { calories: 420, protein: "8g", fat: "14g", carbs: "65g" } },
    ],
  },
  {
    id: 3,
    name: "Pizza Hut",
    image: "ph.png",
    description: "Serving delicious pizzas with fresh toppings and cheesy goodness.",
    menu: [
      { id: 1, name: "Cheese Pizza", price: "₹250", description: "Classic pizza loaded with rich mozzarella on a crispy crust.", nutrition: { calories: 300, protein: "12g", fat: "10g", carbs: "38g" } },
      { id: 2, name: "Veggie Supreme", price: "₹280", description: "Topped with bell peppers, olives, onions, and mushrooms.", nutrition: { calories: 320, protein: "14g", fat: "9g", carbs: "40g" } },
      { id: 3, name: "Pepperoni Pizza", price: "₹300", description: "Classic pizza with spicy pepperoni and extra cheese.", nutrition: { calories: 350, protein: "16g", fat: "15g", carbs: "38g" } },
      { id: 4, name: "Garlic Bread", price: "₹120", description: "Crispy garlic bread topped with butter and herbs.", nutrition: { calories: 180, protein: "4g", fat: "8g", carbs: "25g" } },
      { id: 5, name: "Choco Lava Cake", price: "₹150", description: "Warm chocolate cake with a gooey, molten center.", nutrition: { calories: 360, protein: "5g", fat: "18g", carbs: "45g" } },
    ],
  },
  {
    id: 4,
    name: "Domino’s",
    image: "dp.png",
    description: "Famous for its fresh, hot pizzas delivered fast to your doorstep.",
    menu: [
      { id: 1, name: "Peppy Paneer", price: "₹270", description: "Cheesy pizza with paneer, capsicum, and spicy red paprika.", nutrition: { calories: 340, protein: "14g", fat: "12g", carbs: "40g" } },
      { id: 2, name: "Farmhouse Pizza", price: "₹260", description: "Veggie delight with mushrooms, capsicum, and olives.", nutrition: { calories: 320, protein: "12g", fat: "10g", carbs: "38g" } },
      { id: 3, name: "Chicken Dominator", price: "₹320", description: "Loaded with grilled chicken, pepperoni, and exotic herbs.", nutrition: { calories: 380, protein: "18g", fat: "14g", carbs: "42g" } },
      { id: 4, name: "Garlic Breadsticks", price: "₹150", description: "Soft, buttery breadsticks infused with garlic seasoning.", nutrition: { calories: 200, protein: "5g", fat: "7g", carbs: "30g" } },
      { id: 5, name: "Butterscotch Mousse", price: "₹120", description: "Creamy butterscotch mousse topped with caramel sauce.", nutrition: { calories: 290, protein: "4g", fat: "12g", carbs: "38g" } },
    ],
  },
  {
    id: 5,
    name: "California Burrito",
    image: "cb.jpg",
    description: "Serving fresh, flavorful burritos and Mexican-inspired dishes.",
    menu: [
      { id: 1, name: "Chicken Burrito", price: "₹200", description: "Stuffed with grilled chicken, rice, beans, salsa, and cheese.", nutrition: { calories: 650, protein: "35g", fat: "20g", carbs: "85g" } },
      { id: 2, name: "Paneer Burrito", price: "₹190", description: "Spiced paneer, beans, rice, and salsa wrapped in a soft tortilla.", nutrition: { calories: 600, protein: "28g", fat: "18g", carbs: "80g" } },
    ],
  },
  {
    id: 6,
    name: "Taco Bell",
    image: "tb.png",
    description: "Famous for its tacos, burritos, and Mexican-inspired fast food.",
    menu: [
      { id: 1, name: "Crunchy Taco", price: "₹99", description: "Crispy corn shell filled with seasoned beef, lettuce, and cheese.", nutrition: { calories: 170, protein: "8g", fat: "10g", carbs: "14g" } },
      { id: 2, name: "Soft Taco", price: "₹109", description: "Warm flour tortilla filled with grilled chicken, lettuce, and cheese.", nutrition: { calories: 190, protein: "12g", fat: "7g", carbs: "18g" } },
    ],
  },
];


const RestaurantPage = () => {
  const navigate = useNavigate();

  return (
    <div className="restaurant-container">
      <h1>Choose a Restaurant</h1>
      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="restaurant-card"
            onClick={() => navigate(`/menu/${restaurant.id}`, { state: { restaurant } })}
          >
            <img src={restaurant.image} alt={restaurant.name} />
            <h2>{restaurant.name}</h2>
            <p className="restaurant-description">{restaurant.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
