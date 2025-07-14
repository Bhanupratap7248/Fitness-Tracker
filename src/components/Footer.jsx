import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-3 flex items-center justify-center md:justify-start">
              <span className="mr-2">🏋️</span>
              Fitness Tracker
            </h3>
            <p className="text-gray-300 text-sm">
              Your personal fitness companion for tracking workouts and achieving your goals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Add Workout Plan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">View Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Progress</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📧 support@fitnesstracker.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 Fitness Street, Gym City</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Fitness Tracker. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Made with ❤️ for fitness enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 