import React, { useState } from "react";
import Navbars from "./components/Navbars";
import Home from './pages/Home';
import DietTracker from "./components/DietTracker";
import ProgressCharts from "./components/ProgressCharts";
import SocialSharing from "./components/SocialSharing";
import AddWorkoutPlan from "./components/AddWorkoutPlan";
import WorkoutPlansList from "./components/WorkoutPlansList";
import Footer from "./components/Footer";

function App() {
  const [plans, setPlans] = useState([]);

  const addPlan = (plan) => {
    setPlans([...plans, { ...plan, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <Navbars />
      <main className="flex flex-col items-center flex-1 w-full px-2 max-w-3xl mx-auto">
        <div id="home"><Home /></div>
        <div id="add-workout"><AddWorkoutPlan onAdd={addPlan} /></div>
        <div id="diet-tracker"><DietTracker /></div>
        <div id="progress-charts"><ProgressCharts /></div>
        <div id="social-sharing"><SocialSharing /></div>
        <WorkoutPlansList plans={plans} />
      </main>
      <Footer />
    </div>
  );
}

export default App;    