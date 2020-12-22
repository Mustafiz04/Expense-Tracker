import React, { useState } from 'react'

export const DigitalClock = () => {

    let time = new Date().toLocaleTimeString();

    const [cTime, setCTime] = useState(time);

    const setTime = () =>{
        time = new Date().toLocaleTimeString();
        setCTime(time);
    }

    setInterval(setTime, 1000);

    return (
        <div>
            {cTime}
        </div>
    )
}
