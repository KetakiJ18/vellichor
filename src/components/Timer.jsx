import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CandleTimer from './CandleTimer';
import RingTimer from './RingTimer';

const Timer = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const duration = parseInt(query.get('duration'), 10) || 60;

  const [isRunning, setIsRunning] = useState(false);
  const [resetSignal, setResetSignal] = useState(false);
  const [showDonePopup, setShowDonePopup] = useState(false);

  const handleToggle = () => {
    setIsRunning(prev => !prev);
    setResetSignal(false);
  };

  const handleFinish = () => {
    setIsRunning(false);
    setShowDonePopup(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setResetSignal(true);
    setTimeout(() => setResetSignal(false), 100);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10">
      
      <button
      onClick={() => navigate('/home')}
      className="absolute top-6 left-6 px-4 py-2 bg-brown text-black rounded hover:bg-black-800">
      Back
      </button>

      <RingTimer
        duration={duration}
        isRunning={isRunning}
        resetSignal={resetSignal}
        onFinish={handleFinish}
      >
        <CandleTimer />
      </RingTimer>

      {/* ⏳ POPUP WHEN TIMER ENDS */}
      {showDonePopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
            <h2 className="text-xl font-bold mb-2">⏳ Time's Up!</h2>
            <p className="mb-4">Your candle session is complete.</p>

            <button
              onClick={() => {
                setShowDonePopup(false);
                handleReset();
              }}
              className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* CONTROLS */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleToggle}
          className={`px-6 py-2 text-white rounded transition-colors duration-300 ${
            isRunning
              ? 'bg-yellow-600 hover:bg-yellow-700'
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>

        <button
          onClick={handleReset}
          className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;