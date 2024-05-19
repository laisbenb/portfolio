import React, { useEffect, useState } from 'react'

function liveClock() {

    // live clock data
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();

    // empty variable for storing correct time
    let setHour;
    let setMinute;

    // Add '0' before single number
    if (hour < 10) {
        setHour = '0' + hour;
    } else {
        setHour = hour;
    }
    if (minute < 10) {
        setMinute = '0' + minute;
    } else {
        setMinute = minute;
    }

    return `${setHour}:${setMinute}`;
};

export default function Clock() {
    const [time, setTime] = useState(liveClock());

    // update clock every 1s
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(liveClock());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
  return (
    <div className='nav__clock'>
        {time}
    </div>
  )
}