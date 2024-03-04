import React, { useEffect, useRef, useState } from 'react'



function Stopwatch() {
    let hour = useRef(0);
    let minutes = useRef(0);
    let seconds = useRef(0);
    const [startTime, setStartTime] = useState();
    const [currentTime, setCurrentTime] = useState();
    const [time, setTime] = useState();
    const intervalPause = useRef();

    const handlerStart = () => {
        clearInterval(intervalPause.current);
        setStartTime(Date.now());
        intervalPause.current = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000);

    }




    console.log("startTime", startTime);
    console.log("currentTime", currentTime);
    let secondPassed = 0;
    secondPassed = (currentTime - startTime) / 1000;


    const handlePause = () => {
        clearInterval(intervalPause.current);
    }

    const handleStop = () => {
        console.log("Date.now()");
    }
    return (
        <div className='container mx-auto w-full h-screen  bg-white flex items-center justify-center'>
            <div className='w-1/3 h-48 bg-gray-500 rounded-md flex  items-center justify-center'>
                <span className='text-white text-2xl font-bold flex-1 w-full text-center'>{secondPassed}</span>
                <div className='flex flex-col justify-evenly items-center w-1/3 h-full space-y-4'>
                    <button className='bg-green-500 px-6 rounded-md text-white py-2 cursor-pointer' onClick={handlerStart}>Start</button>
                    <button className='bg-gray-100 px-6 rounded-md text-gray-500 py-2 cursor-pointer' onClick={handlePause}>Pause</button>
                    <button className='bg-red-500 px-6 rounded-md text-white py-2 cursor-pointer' onClick={handleStop}>Stop</button>
                </div>

            </div>

        </div>
    )
}

export default Stopwatch