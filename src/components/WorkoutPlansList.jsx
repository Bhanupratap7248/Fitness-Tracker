import React from 'react';

function WorkoutPlansList({ plans }) {
  if (plans.length === 0) {
    return <div className="mx-auto max-w-lg p-6 bg-white rounded-xl shadow text-center text-gray-500">No workout plans yet.</div>;
  }
  return (
    <div className="mx-auto max-w-lg p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Workout Plans</h2>
      <div className="flex flex-col gap-6">
        {plans.map((plan, idx) => (
          <div key={idx} className="p-5 border rounded-lg shadow-sm bg-blue-50">
            <h3 className="text-xl font-semibold text-blue-800 mb-1">{plan.title}</h3>
            <p className="mb-2 text-gray-700">{plan.description}</p>
            <p className="mb-1"><span className="font-semibold text-blue-700">Exercises:</span> {plan.exercises.join(', ')}</p>
            <p className="mb-1"><span className="font-semibold text-blue-700">Duration:</span> {plan.duration} days</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutPlansList; 