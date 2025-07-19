import React, {useState, useEffect} from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const RingTimer = ({ duration }) => {
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
        <div style={{ width: 500, height: 500 }}>
        <CircularProgressbar
            value={percentage}
            text={formatTime(remainingSeconds)}
            styles={buildStyles({
            textColor: '#333',
            pathColor: '#f59e0b', // amber-500
            trailColor: '#fde68a', // amber-200
            })}
        />
        </div>
    );
};

export default RingTimer;
