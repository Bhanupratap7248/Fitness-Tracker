import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">🏋️ Welcome to FitTrack</h1>
      <p className="text-gray-700 mb-6">
        Track your workouts, monitor calories, and stay fit and healthy every day!
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <Link to="/add" className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition">
          Add New Workout
        </Link>

        <Link to="/list" className="bg-green-600 text-white px-6 py-2 rounded-xl shadow hover:bg-green-700 transition">
          View Workout List
        </Link>
      </div>

      <div className="mt-8">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
          alt="Fitness Icon"
          className="w-40 mx-auto opacity-80"
        />
      </div>
    </div>
  );
}

export default Home;
