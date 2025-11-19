import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CandleTimer from "./CandleTimer";
import RingTimer from "./RingTimer";
import lofiMusic from "../assets/lofi.mp3";


const Timer = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const duration = parseInt(query.get("duration"), 10) || 60;

  const [isRunning, setIsRunning] = useState(false);
  const [resetSignal, setResetSignal] = useState(false);
  const [showDonePopup, setShowDonePopup] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);


  const handleToggle = () => {
    setIsRunning((prev) => !prev);
    setResetSignal(false);
  };

  const handleFinish = () => {
    setIsRunning(false);
    setShowDonePopup(true);

    const duration = parseInt(query.get("duration"), 10);

    const prev = parseInt(localStorage.getItem("minutesDone")) || 0;
    const updated = prev + duration;

    localStorage.setItem("minutesDone", updated);
  };

  const handleReset = () => {
    setIsRunning(false);
    setResetSignal(true);
    setTimeout(() => setResetSignal(false), 200);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#f7e9d7] to-[#fdfcf9] relative overflow-hidden">

      {/* BACK BUTTON – Floating aesthetic */}
      <button
        onClick={() => navigate("/home")}
        className="absolute top-6 left-6 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md shadow-lg hover:shadow-xl transition-all text-gray-800 font-semibold"
      >
        ← Back
      </button>

      <button
        onClick={() => setPlayMusic(!playMusic)}
        className="absolute top-6 right-6 px-5 py-2 rounded-full bg-white/70 shadow-lg"
      >
        {playMusic ? "🔇 Stop Music" : "🎵 Relax"}
      </button>

      {playMusic && (
        <audio autoPlay loop>
          <source src={lofiMusic} type="audio/mpeg" />
        </audio>
      )}

      {/* Main Timer Container (glass effect) */}
      <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl rounded-3xl p-10 flex flex-col items-center mt-6 transition-all z-10">
        
        <RingTimer
          duration={duration}
          isRunning={isRunning}
          resetSignal={resetSignal}
          onFinish={handleFinish}
        >
          <CandleTimer />
        </RingTimer>

        {/* CONTROL BUTTONS */}
        <div className="flex gap-6 mt-10">

          {/* Start/Pause Button */}
          <button
            onClick={handleToggle}
            className={`px-8 py-3 text-white rounded-full text-lg shadow-lg transition-all duration-300 active:scale-95 ${
              isRunning
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isRunning ? "Pause" : "Start"}
          </button>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="px-8 py-3 bg-red-600 text-white rounded-full text-lg shadow-lg hover:bg-red-700 active:scale-95 transition-all"
          >
            Reset
          </button>
        </div>
      </div>

      {/* DONE POPUP MODAL */}
      {showDonePopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white animate-fadeIn p-8 rounded-2xl shadow-2xl text-center w-80">
            <h2 className="text-2xl font-bold mb-3">⏳ Time’s Up!</h2>
            <p className="text-gray-700 mb-5">
              Your candle session has finished.
            </p>

            <button
              onClick={() => {
                setShowDonePopup(false);
                handleReset();
              }}
              className="w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 shadow-md active:scale-95 transition-all"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-17">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/70 rounded-full animate-float"
          style={{
            width: `${50 + 0.1 * 50}px`,
            height: `${50 + 0.1 * 50}px`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${4 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 4}s`,
            top: `${Math.random() * 100}%`,
          }}
    ></div>
  ))}
</div>


    </div>
  );
};

export default Timer;