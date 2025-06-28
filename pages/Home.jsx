import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">🏋️ Welcome to FitTrack</h1>
      <p className="text-gray-700 mb-6">
        Track your workouts, log your meals, and visualize your fitness journey!
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Link to="/add-plan" className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition">
          Add Workout Plan
        </Link>
        <Link to="/add-diet" className="bg-green-600 text-white px-6 py-2 rounded-xl shadow hover:bg-green-700 transition">
          Add Diet Log
        </Link>
        <Link to="/progress" className="bg-purple-600 text-white px-6 py-2 rounded-xl shadow hover:bg-purple-700 transition">
           Progress Chart 
        </Link>
         <Link to="/progress" className="bg-purple-400 text-white px-6 py-2 rounded-xl shadow hover:bg-purple-700 transition">
          Social sharing
        </Link>
      </div>
    </div>
  );
}

export default Home;
