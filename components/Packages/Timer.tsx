"use client";

import React, { useState, useEffect } from "react";

interface ITimer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Timer = () => {
  const [isServer, setIsServer] = useState(false);
  const currentDate = new Date();
  const [targetDate, setTargetDate] = useState(new Date("2024-05-25"));

  const calculateTimeLeft = (): ITimer => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<ITimer>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    setIsServer(true);
  }, []);

  if(!isServer) return;

  return (
    <div className="flex flex-col items-center xl:gap-[50px] gap-[30px]">
      <p className="text-[#A7A7A7] xl:text-sm text-xs text-center leading-4 uppercase">
        до окончания акции
      </p>

      <div className="xl:leading-[48px] leading-[27px] text-[#4328EB]">
        <div className="flex xl:gap-5 gap-3 xl:text-[72px] text-[40px]">
          <div className="flex flex-col xl:gap-3 gap-1.5 items-center">
            <span>{timeLeft.days}</span>
            <span className="xl:text-[28px] text-base">дней</span>
          </div>
          <span>:</span>
          <div className="flex flex-col xl:gap-3 gap-1.5 items-center">
            <span>{timeLeft.hours}</span>
            <span className="xl:text-[28px] text-base">часов</span>
          </div>
          <span>:</span>
          <div className="flex flex-col xl:gap-3 gap-1.5 items-center">
            <span>{timeLeft.minutes}</span>
            <span className="xl:text-[28px] text-base">минут</span>
          </div>
          <span>:</span>
          <div className="flex flex-col xl:gap-3 gap-1.5 items-center">
            <span>{timeLeft.seconds}</span>
            <span className="xl:text-[28px] text-base">секунд</span>
          </div>
        </div>
      </div>
    </div>
  );
};
