import { useEffect, useState } from "react";
import NavbarForUseEffect from './NavbarForUseEffect';
import { BsWifi, BsWifiOff } from "react-icons/bs";

const Online = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      <NavbarForUseEffect />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5fce8] to-[#e9f6cb] px-4 text-[#2d3a1f]">
        <div className="bg-white border-2 border-black rounded-3xl p-8 w-full max-w-md shadow-2xl text-center space-y-6">
          <h1 className="text-4xl font-extrabold drop-shadow-md">📶 Internet Status</h1>

          <div className="text-2xl font-semibold flex justify-center items-center gap-4">
            {online ? (
              <>
                <BsWifi className="text-green-600 text-4xl animate-pulse" />
                <span className="text-green-700">You are Online ✅</span>
              </>
            ) : (
              <>
                <BsWifiOff className="text-red-600 text-4xl animate-pulse" />
                <span className="text-red-700">You are Offline ❌</span>
              </>
            )}
          </div>

          <p className="text-sm italic text-gray-600">
            This updates in real-time when your connection changes.
          </p>
        </div>
      </div>
    </>
  );
};

export default Online;
