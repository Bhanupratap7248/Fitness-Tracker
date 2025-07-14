import React from "react";

const ProgressCharts = () => {
  return (
    <div className="max-w-md mx-auto my-8 p-6 rounded-2xl shadow-xl bg-gradient-to-tr from-blue-200 via-blue-100 to-white border border-blue-300">
      <div className="flex items-center mb-4">
        <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-400 rounded-full shadow-md mr-4">
          {/* Chart Icon (SVG) */}
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17v-2a4 4 0 014-4h10a4 4 0 014 4v2M7 13V7a4 4 0 018 0v6" />
          </svg>
        </span>
        <h2 className="text-2xl font-extrabold text-blue-800">Progress Charts</h2>
      </div>
      <p className="text-blue-900 mb-4">Visualize your fitness journey with beautiful charts and graphs.</p>
      <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition">View Charts</button>
    </div>
  );
};

export default ProgressCharts; 