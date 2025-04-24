import React , {useState, useEffect}from 'react'

const TimerHandling = () => {

    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const [laps, setLaps] = useState([]);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const recordLap = () => {
        setLaps([...laps, seconds]);
    };

    return (
        <div>
            <div>Seconds: {seconds}</div>
            <button onClick={() => setIsRunning(true)}>Start</button>
            <button onClick={() => setIsRunning(false)}>Pause</button>
            <button onClick={recordLap}>Lap</button>
            <button onClick={() => {
                setSeconds(0);
                setLaps([]); // Reset laps to empty array
            }}>
                Reset
            </button>
            <ul>
                {laps.map((lap, i) => <li key={i}>Lap {i + 1}: {lap}s</li>)}
            </ul>
        </div>
    );
}
export default TimerHandling
