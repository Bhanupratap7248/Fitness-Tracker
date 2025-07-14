import React from "react";

const SocialSharing = () => {
  return (
    <div className="max-w-md mx-auto my-8 p-6 rounded-2xl shadow-xl bg-gradient-to-tr from-pink-200 via-pink-100 to-white border border-pink-300">
      <div className="flex items-center mb-4">
        <span className="inline-flex items-center justify-center w-12 h-12 bg-pink-400 rounded-full shadow-md mr-4">
          {/* Share Icon (SVG) */}
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 8a3 3 0 11-6 0 3 3 0 016 0zm6 8a3 3 0 11-6 0 3 3 0 016 0zm-6 0a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </span>
        <h2 className="text-2xl font-extrabold text-pink-800">Social Sharing</h2>
      </div>
      <p className="text-pink-900 mb-4">Share your progress and plans with friends on social media.</p>
      <button className="w-full py-2 px-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition">Share Now</button>
    </div>
  );
};

export default SocialSharing; 