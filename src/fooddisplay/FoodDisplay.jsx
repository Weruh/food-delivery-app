import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../context/StoreContext'
import FoodItem from '../components/fooditem/FoodItem'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

  // Filter food_list by category if not "All"
  const filteredList =
    category === "All"
      ? food_list
      : food_list.filter(item => item.category === category)

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {filteredList && filteredList.length > 0 ? (
          filteredList.map((item, index) => (
            <FoodItem
              key={item._id || index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p>No dishes found.</p>
        )}
      </div>
    </div>
  )
}

export default FoodDisplay