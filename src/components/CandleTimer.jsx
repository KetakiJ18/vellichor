import React from 'react';

import {useLocation} from 'react-router-dom'

import candle10 from '../assets/blue.png';
import candle25 from '../assets/blue.png';
import candle45 from '../assets/blue.png';
import candle60 from '../assets/blue.png';
import candle90 from '../assets/blue.png';
import candle120 from '../assets/blue.png';
import candle180 from '../assets/blue.png';

const candleMap = {
  10: candle10,
  25: candle25,
  45: candle45,
  60: candle60,
  90: candle90,
  120: candle120,
  180: candle180,
};

const CandleTimer = () => {
    const {search} = useLocation()
    const params = new URLSearchParams(search)
    const duration = parseInt(params.get('duration')) || 60

    const candleImg = candleMap[duration]||candle10;

    return (
        <div className='min-h-screen bg-[#f9f5f0] flex flex-col items-center justify-center p-6'>
            <h2 className='text-2xl font-semibold mb-6'>Focused for {duration} minutes</h2>
            <img src={candleImg} alt={`Candle for ${duration} min`} className='h-64 object-contain mb-'/>
        </div>
    );
};

export default CandleTimer;
