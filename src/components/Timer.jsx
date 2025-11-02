import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CandleTimer from './CandleTimer';
import RingTimer from './RingTimer';

const Timer = () => {
  const query = new URLSearchParams(useLocation().search);
  const duration = parseInt(query.get('duration'), 10) || 60;
  const [isRunning, setIsRunning] = useState(false);
  const [resetSignal, setResetSignal] = useState(false);

  // Start ↔ Pause toggle
  const handleToggle = () => {
    setIsRunning(prev => !prev);
    setResetSignal(false);
  };

  // Fully reset timer to start
  const handleReset = () => {
    setIsRunning(false);
    setResetSignal(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10">
      <RingTimer duration={duration} isRunning={isRunning} resetSignal={resetSignal}>
        <CandleTimer />
      </RingTimer>

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