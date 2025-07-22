import React from 'react'
import {useLocation} from 'react-router-dom'
import CandleTimer from './CandleTimer';
import RingTimer from './RingTimer';

const Timer = () => {
    const query = new URLSearchParams(useLocation().search)
    const duration=parseInt(query.get('duration'),10)||60

    return(
        <div>
            <div className="relative w-full min-h-screen flex items-center justify-center">
            <RingTimer duration={duration}>
                <CandleTimer/>
            </RingTimer>
        </div>
        <div>
            <button>Start</button>
            <button>Reset</button>
        </div>
        </div>

    )
}
/*comment */
export default Timer