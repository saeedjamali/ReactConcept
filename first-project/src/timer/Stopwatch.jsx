import React, { useEffect, useRef, useState } from 'react'



function Stopwatch() {
    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isPause, setIsPause] = useState(false);
    let intervalPause = useRef(null);

    const handlerStart = () => {
        setIsPause(false);
        clearInterval(intervalPause.current);
        intervalPause.current = setInterval(() => {
            setSeconds(s => s + 1);
        }, 10);

    }

    if (seconds == 59) {
        setSeconds(0);
        setMinutes(m => m + 1);
        if (minutes == 59) {
            setMinutes(0);
            setHour(h => h + 1);
        }
    }


    const handlePause = () => {

        if (seconds == 0 & minutes == 0 & hour == 0) return
        setIsPause((p) => !p);
        clearInterval(intervalPause.current);
        if (isPause) {
            handlerStart();
        }

    }

    const handleStop = () => {
        setIsPause(false);
        setSeconds(0);
        setMinutes(0);
        setHour(0);
        clearInterval(intervalPause.current);
    }
    return (
        <div className='container mx-auto w-full h-screen  bg-white flex items-center justify-center'>
            <div className='w-1/2 h-48 bg-gray-500 rounded-md flex  items-center justify-center'>
                <span className='text-white text-2xl font-bold flex-1 w-full text-center'>{`${String(hour).padStart(2, "0")}: ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`}</span>
                <div className='flex flex-col justify-evenly items-center w-1/3 h-full space-y-4'>
                    <button className='bg-green-500 px-6 rounded-md text-white py-2 cursor-pointer' onClick={handlerStart}>Start</button>
                    <button className={`bg-gray-100 px-6 rounded-md text-gray-500 py-2 cursor-pointer ring-2 ${isPause ? " ring-green-400 " : "ring-red-500"}`} onClick={handlePause}>Pause</button>
                    <button className='bg-red-500 px-6 rounded-md text-white py-2 cursor-pointer' onClick={handleStop}>Stop</button>
                </div>

            </div>

        </div>
    )
}

export default Stopwatch