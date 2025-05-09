import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>Meal Mingle makes food delivery easy and exciting. With a wide range of delicious options, we bring your favorite meals straight to your door, hot and fresh. Whether you're in the mood for a quick bite or a feast, we've got you covered!</p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
