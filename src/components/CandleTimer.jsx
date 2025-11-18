import React from 'react';

import {useLocation} from 'react-router-dom'

import candle10 from '../assets/blue.png';
import candle20 from '../assets/bubblegum.png';
import candle30 from '../assets/green.png';
import candle60 from '../assets/green_orange.png';
import candle90 from '../assets/orange_mix.png';
import candle120 from '../assets/pink.png';
import candle180 from '../assets/purple.png';

const candleMap = {
  10: candle10,
  20: candle20,
  30: candle30,
  60: candle60,
  90: candle90,
  120: candle120,
  180: candle180,
};

const CandleTimer = () => {
    const {search} = useLocation()
    const params = new URLSearchParams(search)
    const duration = parseInt(params.get('duration')) || 60
    const customTime = parseInt(params.get('custom'))

    const finalDuration = customTime || duration || 60
    const candleImg = candleMap[finalDuration] || candle10

    return (
        <div className='absoule inset-0 flex items-center justify-center'>
            <img 
                src={candleImg} 
                alt={`Candle for ${finalDuration} min`} 
                className='max-w-[20vw] max-h-[20vw] md:max-w-[250px] md:max-h-[250px] object-contain'/>
        </div>
    );
};

export default CandleTimer;
