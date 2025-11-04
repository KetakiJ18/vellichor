import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Volume2, VolumeX } from "lucide-react";
import candleHero from "../assets/bubblegum.png";
import ambientMusic from "../assets/lofi.mp3";

const Landing = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(true); 
  const audioRef = useRef(new Audio(ambientMusic));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const startAudio = () => {
          audio.play();
          window.removeEventListener("click", startAudio);
        };
        window.addEventListener("click", startAudio);
      });
    }

    let vol = 0;
    const fadeIn = setInterval(() => {
      if (vol < 0.4) {
        vol += 0.02;
        audio.volume = vol;
      } else {
        clearInterval(fadeIn);
      }
    }, 200);

    return () => {
        audio.pause();
        clearInterval(fadeIn);
      };
    }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleStart = () => {
    audioRef.current.pause();
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#fdf8f3] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20"
        animate={{
          opacity: [0.2, 0.35, 0.2],
          scale: [2, 2.2, 5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10 z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3 }}
          className="flex-1"
        >
          <h1 className="text-6xl md:text-7xl font-serif text-gray-800 mb-6 tracking-wide">
            Vellichor
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Light your candle, set your intention, and study with calm.
          </p>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleStart}
            className="px-8 py-3 bg-amber-500 text-white rounded-full text-lg shadow-md hover:bg-amber-600 transition-all"
          >
            Start Focusing
          </motion.button>
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.02, 1],
            rotate: [0, 0.6, -0.6, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="flex-1 flex justify-center"
        >
          <img
            src={candleHero}
            alt="Candle"
            className="w-72 md:w-96 drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>

      <motion.button
        onClick={toggleMusic}
        className="absolute top-6 right-6 bg-white/70 backdrop-blur-md p-3 rounded-full shadow-md hover:bg-white transition"
        whileHover={{ scale: 1.1 }}
      >
        {isPlaying ? (
          <Volume2 className="text-amber-700" />
        ) : (
          <VolumeX className="text-gray-500" />
        )}
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
        className="text-sm text-gray-500 mt-16"
      >
        ✨ Get busy hustling ✨<br/>~Ketaki Joshi
      </motion.p>
    </div>
  );
};

export default Landing;