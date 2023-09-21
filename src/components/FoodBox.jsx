import React from "react";

export default function FoodBox({ food, deleteItem }) {
  const { id, name, image, calories, servings } = food;

  const handleDelete = () => {
    deleteItem(id);
  };

  return (
    <div>
      <p>{name}</p>

      <img src={image} width={300} height={300} />

      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>

      <p>
        <b>Total Calories: {servings * calories} </b> kcal
      </p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}