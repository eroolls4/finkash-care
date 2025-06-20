import React from 'react';

const HealthyHabits: React.FC = () => {
  return (
    <div style={{ padding: 20, margin: 20, backgroundColor: 'white', borderRadius: 8 }}>
      <h2 style={{ color: 'blue' }}>Healthy Lifestyle Tips</h2>
      <ul>
        <li>🏃 Stay Active: Move your body for at least 60 minutes daily.</li>
        <li>🍎 Eat Balanced Meals: Fruits, veggies, whole foods.</li>
        <li>😴 Get Enough Sleep: 8–10 hours each night.</li>
        <li>📱 Limit Screen Time: Take breaks from screens.</li>
      </ul>
    </div>
  );
};

export default HealthyHabits;
