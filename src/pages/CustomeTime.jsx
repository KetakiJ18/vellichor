import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomTimeInput = () => {
    const [minutes, setMinutes] = useState("");
    const navigate = useNavigate();

    const startTimer = () => {
        if (!minutes || minutes <= 0) return;
        navigate(`/timer?custom=${minutes}`);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9f5f0] px-6">
            <h1 className="text-3xl font-serif mb-6">Set Custom Timer</h1>

            <input
                type="number"
                placeholder="Minutes"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                className="border border-gray-400 px-4 py-2 rounded-lg w-40 mb-4 text-center"
            />

            <button
                onClick={startTimer}
                className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            >
                Start
            </button>
        </div>
    );
};

export default CustomTimeInput;
