import React, { useState } from 'react';
import API from '../api';

function AddDiet() {
  const [mealType, setMealType] = useState('');
  const [calories, setCalories] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/diets', { mealType, calories, description });
    alert('Diet Logged');
    setMealType('');
    setCalories('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <h2 className="text-xl mb-4">Log Your Meal</h2>
      <input placeholder="Meal Type" value={mealType} onChange={(e) => setMealType(e.target.value)} className="block mb-2 p-2 border w-full" />
      <input placeholder="Calories" type="number" value={calories} onChange={(e) => setCalories(e.target.value)} className="block mb-2 p-2 border w-full" />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="block mb-4 p-2 border w-full" />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Add Meal</button>
    </form>
  );
}

export default AddDiet;
