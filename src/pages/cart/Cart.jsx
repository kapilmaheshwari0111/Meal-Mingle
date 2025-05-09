import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const Cart = () => {
  const { cartItems, food_list, addToCart, removeFromCart } = useContext(StoreContext);

  // Filter food items that are in the cart
  const cartFoodItems = food_list.filter((item) => cartItems[item.id]);

  return (
    <div className="cart">
        <div className="cartitems">
          <div className="cartitemtitle">
         <p>Items</p>
         <p>Title</p>
         <p>Price</p>
         <p>Quantity</p>
         <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div>
              <div className='cartitemtitle cartitemsitem'>
                <img src={item.image}></img>
                <p>{item.name}</p>
                <p>Rs {item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className="cross">x</p>
                </div>
                <hr/>
              </div>
            )
          }
        })}
    </div>
    </div>
  );
};

export default Cart;
