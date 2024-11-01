'use client'

import { useEffect, useState } from "react";

interface TimeLeft {
    days?: number;
    hrs?: number;
    mins?: number;
    secs?: number;
}

const INITIAL_TIME_LEFT = { days: 0, hr: 0, mins: 0, secs: 0 }

export default function Counter({date}:{date:Date}){
    
    const [timeLeft,setTimeLeft] = useState<TimeLeft>(INITIAL_TIME_LEFT)
    
    useEffect(() => {

        function calculateTimeLeft() : TimeLeft {
            let timeLeft = {};
            const currentDate = new Date();
            const difference = date.getTime() - currentDate.getTime();
    
            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    mins: Math.floor((difference / 1000 / 60) % 60),
                    secs: Math.floor((difference / 1000) % 60)
                }
            }
    
            return timeLeft;
        }

        setTimeLeft(calculateTimeLeft())
        
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer);
    }, [date])

    
    return (
        <>
            <div className="block mx-auto text-center text-3xl text-fuchsia-300 border-b-[9.5vh] border-b-stone-950 border-x-[25px] border-x-transparent h-0 w-11/12 rotate-180">
                <span className="absolute rotate-180 w-full text-center left-1/2 -translate-x-1/2 ">
                    {(timeLeft?.days+"").replace('undefined','0')}d {("0"+timeLeft?.hrs).slice(-2).replace('ed','00')}h {("0"+timeLeft?.mins).slice(-2).replace('ed','00')}m {("0"+timeLeft?.secs).slice(-2).replace('ed','00')}s
                </span>
            </div>
            <div className="block mx-auto text-center text-xl text-cyan-200 border-b-[8vh] border-b-stone-800 border-x-[25px] border-x-transparent h-0 w-8/12 rotate-180">
                <span className="absolute rotate-180 w-full text-center left-1/2 -translate-x-1/2 ">
                    {date.toLocaleDateString('pl-PL', {year: 'numeric',month: 'long',day: 'numeric',})}
                </span>
            </div>
       </>
    )
}