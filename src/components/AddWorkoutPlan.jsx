import React, { useState } from 'react';

function AddWorkoutPlan({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [exercises, setExercises] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      title,
      description,
      exercises: exercises.split(',').map(ex => ex.trim()),
      duration
    });
    alert('Workout Plan Added');
    setTitle('');
    setDescription('');
    setExercises('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg p-6 bg-white rounded-xl shadow-lg flex flex-col gap-4 border">
      <h2 className="text-2xl font-bold mb-2 text-blue-700">Add Workout Plan</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
      />
      <input
        placeholder="Exercises (comma separated)"
        value={exercises}
        onChange={(e) => setExercises(e.target.value)}
        className="block p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
      />
      <input
        placeholder="Duration (days)"
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="block p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition-colors duration-150 shadow">Add Plan</button>
    </form>
  );
}

export default AddWorkoutPlan;
