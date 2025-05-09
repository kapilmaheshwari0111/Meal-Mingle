import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="expmenu">
        Welcome to our menu, where flavor meets variety! Explore a wide range of dishes crafted to satisfy every craving. 
        From hearty meals to indulgent desserts, there’s something for everyone to enjoy. Dive in and let your taste buds 
        embark on a delightful journey!
      </p>
      <div className="expmenulist">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))
            }
            key={index}
            className={`exploremenulistitem ${
              category === item.menu_name ? "active" : ""
            }`}
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={category === item.menu_name ? "active" : ""}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
