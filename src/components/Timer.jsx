import React from 'react'
import {useLocation} from 'react-router-dom'
import CandleTimer from './CandleTimer';
import RingTimer from './RingTimer';

const Timer = () => {
    const query = new URLSearchParams(useLocation().search)
    const duration=parseInt(query.get('duration'),10)||60

    return(
        <div className="relative w-100 h-100 flex items-center justify-center">
            <RingTimer duration={duration} />
            <div className="absolute w-10 h-10 z-10 flex items-center justify-center">
                <CandleTimer duration={duration} />
            </div>
        </div>

    )
}
/*comment */
export default Timer