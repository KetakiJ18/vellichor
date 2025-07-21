import React from 'react';

import {useLocation} from 'react-router-dom'

import candle10 from '../assets/blue.png';
import candle25 from '../assets/bubblegum.png';
import candle45 from '../assets/green.png';
import candle60 from '../assets/green_orange.png';
import candle90 from '../assets/orange_mix.png';
import candle120 from '../assets/pink.png';
import candle180 from '../assets/purple.png';

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

    const candleImg = candleMap[duration];

    return (
        <div className='w-full h-full flex items-center justify-center '>
            <img src={candleImg} alt={`Candle for ${duration} min`} className='w-full h-full object-contain'/>
        </div>
    );
};

export default CandleTimer;
