import React, { useState } from "react";

export default function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");
  const [image, setImage] = useState("");

  const handleNameInput = (e) => setName(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, calories, servings, image };

    props.addFood(newFood);
    setName("");
    setCalories("");
    setServings("");
    setImage("");
  };

  return (
    <div className="AddFoodForm">
      <h2>New Food</h2>
      <form action="" onSubmit={handleSubmit}>
        {" "}
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />
        <label>calories</label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />
        <label>servings</label>
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServingsInput}
        />
        <label>Image</label>
        <input
          type="text"
          name="Image"
          value={image}
          onChange={handleImageInput}
        />
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}