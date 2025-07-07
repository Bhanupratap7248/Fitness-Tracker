import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Fitness Tracker</h1>
        <p className="text-lg mb-2">Track your workouts, create custom plans, and stay motivated!</p>
        <p className="text-gray-600">Use the navigation above to add a new workout plan or view your existing plans.</p>
      </div>
    </div>
  );
}

export default Home; 