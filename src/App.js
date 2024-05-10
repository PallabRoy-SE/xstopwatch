import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [second, setSecond] = useState(0);
    const [time, setTime] = useState('0:00');
    const [timerId, setTimerId] = useState(null);

    const generateTime = () => {
        const min = Math.floor(second / 60);
        const sec = second % 60;
        setTime(`${min}:${sec < 10 ? `0${sec}` : sec}`);
    };

    const toggle = () => {
        if (timerId) {
            clearInterval(timerId);
            setTimerId(null);
        } else {
            const tId = setInterval(() => {
                setSecond((prevSec) => prevSec + 1);
            }, 1000);
            setTimerId(tId);
        }
    };

    const reset = () => {
        if (timerId) {
            clearInterval(timerId);
            setTimerId(null);
        }
        setSecond(0);
    };

    useEffect(() => {
        generateTime();
    }, [second]);
    return (
        <section style={{ marginLeft: '1rem' }}>
            <h1>Stopwatch</h1>
            <section style={{ marginTop: '1rem', fontWeight: '500' }}>
                <div>Time: {time}</div>
                <div style={{ marginTop: '0.5rem' }}>
                    <button onClick={toggle}>{timerId ? 'Stop' : 'Start'}</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </section>
        </section>
    );
}

export default App;
