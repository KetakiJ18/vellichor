import React, {useState, useEffect} from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const RingTimer = ({duration, children}) => {
    const totalSeconds = duration*60
    const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);

    useEffect(() => {
        const timer = setInterval(() => {
        setRemainingSeconds(prev => {
            if (prev <= 1) {
            clearInterval(timer);
            return 0;
            }
            return prev - 1;
        });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const percentage = (remainingSeconds / totalSeconds) * 100;

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='relative w-[30vw] h-[30vw] max-w-[400px] max-h-[400px]'>
                <CircularProgressbar
                    value={percentage}
                    styles={buildStyles({
                    textColor: '#333',
                    pathColor: '#f59e0b', 
                    trailColor: '#fde68a', 
                    })}
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                    {children}
                </div>
            </div><br/>
            <p className='text-4xl md:text-6xl font-semibold mb-2'>{formatTime(remainingSeconds)}</p>
        </div>
    );
};

export default RingTimer;
