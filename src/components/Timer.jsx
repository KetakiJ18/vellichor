import React from 'react'
import {useLocation} from 'react-router-dom'
import CandleTimer from './CandleTimer';
import RingTimer from './RingTimer';

const Timer = () => {
    const query = new URLSearchParams(useLocation().search)
    const duration=parseInt(query.get('duration'),10)||60

    return(
        <div className='min-h-screen flex flex-col items-center justify-center gap-6 bg-[#f9f5f0]'>
            <RingTimer duration={duration}/>
            <CandleTimer duration={duration}/>
        </div>
    )
}

export default Timer