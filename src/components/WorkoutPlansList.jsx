import React from 'react';

function WorkoutPlansList({ plans }) {
  if (plans.length === 0) {
    return (
      <div className="mx-auto max-w-lg p-6 bg-white rounded-xl shadow text-center text-gray-500">
        No workout plans yet.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Workout Plans</h2>
      <div className="flex flex-col gap-6">
        {plans.map((plan, idx) => (
          <div key={plan.id || idx} className="p-5 border rounded-lg shadow-sm bg-blue-50">
            {/* Image */}
            {plan.imageUrl && (
              <img
                src={plan.imageUrl}
                alt={plan.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}

            {/* Content */}
            <h3 className="text-xl font-semibold text-blue-800 mb-1">{plan.title}</h3>
            <p className="mb-2 text-gray-700">{plan.description}</p>
            <p className="mb-1">
              <span className="font-semibold text-blue-700">Exercises:</span>{' '}
              {Array.isArray(plan.exercises) ? plan.exercises.join(', ') : 'No exercises listed'}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-blue-700">Duration:</span> {plan.duration} days
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutPlansList;
