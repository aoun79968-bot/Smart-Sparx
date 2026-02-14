import { useState } from "react";

export default function Savings() {
  const [goal] = useState(150000);
  const [saved] = useState(45000);

  const progress = ((saved / goal) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Savings Goal</h1>

      <div className="bg-gray-800 p-6 rounded-xl">
        <p>Goal: Buy Laptop</p>
        <p>Target: PKR {goal}</p>
        <p>Saved: PKR {saved}</p>

        <div className="w-full bg-gray-700 rounded-full h-4 mt-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="mt-2">{progress}% Completed</p>
      </div>
    </div>
  );
}
