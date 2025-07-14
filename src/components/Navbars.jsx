import React from 'react';
import { Link } from 'react-router-dom';

function Navbars() {
  return (
    <nav className="bg-blue-300 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">🏋️ Fitness Tracker</h1>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Add Workout Plan</Link></li>
          <li><Link to="/">Diet Tracker</Link></li>
          <li><Link to="/">Progress Charts</Link></li>
          <li><Link to="/">Social Sharing</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbars;
