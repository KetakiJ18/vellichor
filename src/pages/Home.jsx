import React from "react";
import { useNavigate } from "react-router-dom";

import candle10 from "../assets/blue.png";
import candle20 from "../assets/bubblegum.png";
import candle30 from "../assets/yellow.png";
import candle45 from "../assets/green.png";
import candle60 from "../assets/green_orange.png";
import candle90 from "../assets/orange_mix.png";
import candle120 from "../assets/pink.png";
import candle180 from "../assets/purple.png";

const candles = [
  { duration: "custom", image: candle10 },
  { duration: 20, image: candle20 },
  { duration: 30, image: candle30 },
  { duration: 45, image: candle45 },
  { duration: 60, image: candle60 },
  { duration: 90, image: candle90 },
  { duration: 120, image: candle120 },
  { duration: 180, image: candle180 },
];

const Home = () => {
  const [dailyGoal, setDailyGoal] = React.useState(
    () => parseInt(localStorage.getItem("dailyGoal")) || 0
  );
  const [minutesDone, setMinutesDone] = React.useState(
    () => parseInt(localStorage.getItem("minutesDone")) || 0
  );

  const [goalInput, setGoalInput] = React.useState("");
  const [editing, setEditing] = React.useState(false);

  const [showModal, setShowModal] = React.useState(false);
  const [customMinutes, setCustomMinutes] = React.useState("");

  const navigate = useNavigate();

  const percent = dailyGoal ? Math.min((minutesDone / dailyGoal) * 100, 100) : 0;

  const circumference = 2 * Math.PI * 45; 
  const offset = circumference - (percent / 100) * circumference;

  const handleClick = (duration) => {
    if (duration === "custom") {
      setShowModal(true);
      return;
    }
    navigate(`/timer?duration=${duration}`);
  };

  return (
    <>
      <div className="min-h-screen bg-[#f9f5f0] py-10 px-6">
        <h1 className="text-4xl font-['Parisienne'] text-center mb-2">🕯️Vellichor🕯️</h1>
        
        <h5 className="text-2xl font-bold text-center mb-5">Choose Your Candle</h5>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center px-4">
              {candles.map(({ duration, image }) => (
                <div
                  key={duration}
                  onClick={() => handleClick(duration)}
                  className="cursor-pointer p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105 text-center"
                >
                  <img src={image} alt="" className="h-32 object-contain mb-2" />
                  <p className="text-lg font-semibold text-gray-800">
                    {duration === "custom" ? "Custom Timer" : `${duration} min`}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/4 bg-white p-6 rounded-2xl shadow-md h-fit">

            {!dailyGoal ? (
              <>
                <h2 className="text-xl font-bold mb-4 text-center">Set Daily Goal (hours)</h2>

                <input
                  type="number"
                  value={goalInput}
                  onChange={(e) => setGoalInput(e.target.value)}
                  placeholder="e.g. 3"
                  className="border border-gray-300 rounded px-4 py-2 w-full mb-4"
                />

                <button
                  className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                  onClick={() => {
                    if (goalInput > 0) {
                      const minutes = goalInput * 60;
                      localStorage.setItem("dailyGoal", minutes);
                      setDailyGoal(minutes);
                    }
                  }}
                >
                  Add Goal
                </button>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center">
                  <svg width="150" height="150" className="mb-4">
                    <circle
                      cx="75"
                      cy="75"
                      r="45"
                      stroke="#e5e7eb"
                      strokeWidth="10"
                      fill="none"
                    />
                    <circle
                      cx="75"
                      cy="75"
                      r="45"
                      stroke="#4ade80"
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                  </svg>

                  <p className="text-lg font-bold">
                    {(minutesDone / 60).toFixed(1)} / {(dailyGoal / 60).toFixed(1)} hrs
                  </p>

                  <p className="text-sm text-gray-500 mb-2">{percent.toFixed(0)}% done</p>

                  <button
                    className="px-3 py-1 mt-3 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    onClick={() => {
                      setEditing(true);
                      setGoalInput(dailyGoal / 60);
                    }}
                  >
                    Edit Goal
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {editing && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-80">
            <h2 className="text-xl font-bold mb-4 text-center">Edit Daily Goal</h2>

            <input
              type="number"
              value={goalInput}
              onChange={(e) => setGoalInput(e.target.value)}
              className="w-full border px-4 py-2 rounded mb-4 text-center"
            />

            <div className="flex gap-3">
              <button
                onClick={() => setEditing(false)}
                className="flex-1 bg-gray-300 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  if (goalInput > 0) {
                    const minutes = goalInput * 60;
                    localStorage.setItem("dailyGoal", minutes);
                    setDailyGoal(minutes);
                    setEditing(false);
                  }
                }}
                className="flex-1 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-80">
            <h2 className="text-xl font-bold mb-4 text-center">Set Custom Time</h2>

            <input
              type="number"
              value={customMinutes}
              onChange={(e) => setCustomMinutes(e.target.value)}
              placeholder="Minutes"
              className="w-full border px-4 py-2 rounded mb-4 text-center"
            />

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-300 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (customMinutes > 0) navigate(`/timer?duration=${customMinutes}`);
                }}
                className="flex-1 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
              >
                Start
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;