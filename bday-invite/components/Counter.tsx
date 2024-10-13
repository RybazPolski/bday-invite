'use client'

import { Card } from "@/components/ui/card";
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
            <Card className="text-center text-3xl bg-[#FFCC00]">{timeLeft?.days}d {("0"+timeLeft?.hrs).slice(-2)}h {("0"+timeLeft?.mins).slice(-2)}m {("0"+timeLeft?.secs).slice(-2)}s</Card>
            <Card className="text-center w-3/4 m-auto text-2xl bg-[#FFFFDD]">{date.toLocaleDateString('pl-PL', {year: 'numeric',month: 'long',day: 'numeric',})}</Card>
       </>
    )
}