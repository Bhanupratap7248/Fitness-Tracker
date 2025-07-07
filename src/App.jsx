import React, { useState } from 'react';
import AddWorkoutPlan from './components/AddWorkoutPlan';
import WorkoutPlansList from './components/WorkoutPlansList';
import Home from './pages/Home';

function App() {
  const [plans, setPlans] = useState([]);
  const [view, setView] = useState('home');

  const addPlan = (plan) => {
    setPlans([...plans, plan]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <nav className="mb-8 mt-6 flex gap-4 bg-white shadow-md rounded-lg px-6 py-3 w-full max-w-2xl justify-center">
        <button
          onClick={() => setView('home')}
          className={`px-4 py-2 rounded font-semibold transition-colors duration-150 ${view === 'home' ? 'bg-blue-600 text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'}`}
        >
          Home
        </button>
        <button
          onClick={() => setView('list')}
          className={`px-4 py-2 rounded font-semibold transition-colors duration-150 ${view === 'list' ? 'bg-blue-600 text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'}`}
        >
          View Plans
        </button>
        <button
          onClick={() => setView('add')}
          className={`px-4 py-2 rounded font-semibold transition-colors duration-150 ${view === 'add' ? 'bg-blue-600 text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'}`}
        >
          Add Plan
        </button>
      </nav>
      <main className="w-full max-w-2xl flex-1">
        {view === 'home' && <Home />}
        {view === 'add' && <AddWorkoutPlan onAdd={addPlan} />}
        {view === 'list' && <WorkoutPlansList plans={plans} />}
      </main>
    </div>
  );
}

export default App;    