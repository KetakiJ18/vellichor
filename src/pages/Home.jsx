import React from 'react';
import {useNavigate} from 'react-router-dom';
import candle10 from '../assets/blue.png';
import candle25 from '../assets/blue.png';
import candle45 from '../assets/blue.png';
import candle60 from '../assets/blue.png';
import candle90 from '../assets/blue.png';
import candle120 from '../assets/blue.png';
import candle180 from '../assets/blue.png';

const candles = [
  { duration: 10, image: candle10 },
  { duration: 25, image: candle25 },
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
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center'>
                {candles.map(({duration, image})=>(
                    <div key={duration}
                        onClick={()=>handleClick(duration)}
                        className='curson-pointer hover:scale-105 transition-transform furation-300 text-center'
                    >
                        <img src={image} alt={`Candle ${duration}`} className='h-40 object-contain mb-2'/>
                        <p className='text-lg font-medium'>{duration}</p>
                    </div>   
                ))}
            </div>
        </div>
    )

}

export default Home