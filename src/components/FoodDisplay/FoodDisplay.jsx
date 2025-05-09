import React, { useContext } from 'react';
import "./FoodDisplay.css";
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    const { food_list } = useContext(StoreContext);
    return (
        <div className='fooddisplay' id='fooddisplay'>
            <h2>Top Dishes near you</h2>
            <div className="fooddislist">
                {food_list.map((item, index) => {
                    if(category === "All" || category===item.category){
                        return (
                            <FoodItem 
                                key={index} 
                                id={item._id} 
                                name={item.name} 
                                description={item.description} 
                                price={item.price} 
                                image={item.image} 
                                nutrition={item.nutrition}
                            />
                        );
                    }
                   
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;
