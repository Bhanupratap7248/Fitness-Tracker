import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="bg-blue-300 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">🏋️ FitTrack</h1>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/AddWorkoutPlan">Workout Plan</Link></li>
          <li><Link to="/add-diet">Diet Log</Link></li>
          <li><Link to="/progress">Progress</Link></li>
          <li><Link to="/share">Share</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
