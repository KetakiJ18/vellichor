import React from 'react';
import {useNavigate} from 'react-router-dom';
import candle10 from '../assets/blue.png';
import candle20 from '../assets/bubblegum.png';
import candle30 from '../assets/yellow.png';
import candle45 from '../assets/green.png';
import candle60 from '../assets/green_orange.png';
import candle90 from '../assets/orange_mix.png';
import candle120 from '../assets/pink.png';
import candle180 from '../assets/purple.png';

const candles = [
  { duration: 10, image: candle10 },
  { duration: 20, image: candle20 },
  { duration: 30, image: candle30 },
  { duration: 45, image: candle45 },
  { duration: 60, image: candle60 },
  { duration: 90, image: candle90 },
  { duration: 120, image: candle120 },
  { duration: 180, image: candle180 },
];

const Home = () => {
    const navigate = useNavigate()

    const handleClick = (duration) => {
        navigate(`/timer?duration=${duration}`)
    }

    return(
        <div className='min-h-screen bg-[#f9f5f0] py-10 px-6'>
            <h1 className='text-3xl font-bold text-center mb-10'>Choose Your Candle</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center px-4">
                {candles.map(({ duration, image }) => (
                    <div
                        key={duration}
                        onClick={() => handleClick(duration)}
                        className="cursor-pointer p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 text-center"
                    >
                        <img src={image} alt={`Candle ${duration}`} className="h-32 object-contain mb-2" />
                        <p className="text-lg font-semibold text-gray-800">{duration} min</p>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Home