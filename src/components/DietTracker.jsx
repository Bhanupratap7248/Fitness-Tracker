import React from "react";

const DietTracker = () => {
  return (
    <div className="max-w-md mx-auto my-8 p-6 rounded-2xl shadow-xl bg-gradient-to-tr from-green-200 via-green-100 to-white border border-green-300">
      <div className="flex items-center mb-4">
        <span className="inline-flex items-center justify-center w-12 h-12 bg-green-400 rounded-full shadow-md mr-4">
          {/* Food Icon (SVG) */}
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m9-9H3" />
          </svg>
        </span>
        <h2 className="text-2xl font-extrabold text-green-800">Diet Tracker</h2>
      </div>
      <p className="text-green-900 mb-4">Log your meals, calories, and nutrition to stay on track with your goals.</p>
      <button className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition">Add Meal</button>
    </div>
  );
};

export default DietTracker; 