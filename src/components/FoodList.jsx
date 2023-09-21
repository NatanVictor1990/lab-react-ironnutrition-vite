import React,{useState} from "react";
import foodsJson from "../foods.json";
import FoodBox from "../components/FoodBox";
import AddFoodForm from "../components/AddFoodForm";


export default function FoodList() {
  const [food, setFood] = useState(foodsJson);
  const addFood = (newFood) => {
    setFood([...food, newFood]);
  };

  const deleteItem = (id) => {
    const updatedFood = food.filter((foodItem) => foodItem.id !== id);
    setFood(updatedFood);
  };

  return (
    <div>
      <div>
        <AddFoodForm addFood={addFood} />
      </div>
      <h1>LAB | React IronNutrition</h1>
      {food.map((foodItem) => (
        <FoodBox
          key={foodItem.id}
          food={foodItem}
          deleteItem={deleteItem} 
        />
      ))}
    </div>
  );
}
