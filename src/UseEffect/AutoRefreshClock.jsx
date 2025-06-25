import { useState, useEffect } from "react";
import NavbarForUseEffect from './NavbarForUseEffect';
import { BsClockHistory } from "react-icons/bs";

const AutoRefreshClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "🌞 Good Morning!";
    if (hour < 18) return "🌤️ Good Afternoon!";
    return "🌙 Good Evening!";
  };

  return (
    <>
      <NavbarForUseEffect />
      <div className="min-h-screen flex flex-col justify-center items-center px-4 py-10 bg-gradient-to-br from-[#f5fce8] to-[#e9f6cb] text-[#2d3a1f] transition-all">
        <div className="bg-white border-4 border-[#2d3a1f] rounded-3xl p-8 w-full max-w-md shadow-2xl text-center">
          
          <BsClockHistory className="text-6xl text-[#2d3a1f] mb-5 animate-pulse mx-auto" />

          <h1 className="text-4xl font-extrabold mb-3">⏰ Live Clock</h1>

          <h2 className="text-lg italic font-semibold mb-4">{getGreeting()}</h2>

          <p className="text-3xl bg-[#f0f4dc] border-2 border-[#2d3a1f] text-[#2d3a1f] font-mono tracking-widest rounded-2xl px-6 py-4 shadow-inner">
            {time}
          </p>
        </div>
      </div>
    </>
  );
};

export default AutoRefreshClock;
