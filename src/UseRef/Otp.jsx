import React, { useRef, useState, useEffect } from 'react';
import Navbar from './Navbarforref';
import { FaEye, FaEyeSlash, FaLock, FaKey, FaCheckCircle, FaTimesCircle, FaPaperPlane } from 'react-icons/fa';

function OTPInput() {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [savedOtp, setSavedOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [message, setMessage] = useState('');
  const [timer, setTimer] = useState(0);

  const inputRefs = useRef([]);

  useEffect(() => {
    const stored = localStorage.getItem('savedOtp');
    if (stored) setSavedOtp(stored);
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    if (otp.every((digit) => digit !== '')) {
      const finalOtp = otp.join('');
      localStorage.setItem('savedOtp', finalOtp);
      setSavedOtp(finalOtp);
      setOtp(Array(6).fill(''));
      inputRefs.current[0].focus();
      setMessage(
        <span className="flex items-center gap-2">
          <FaCheckCircle className="text-green-600" /> OTP Submitted Successfully!
        </span>
      );
      setTimeout(() => setMessage(''), 3000);
    } else {
      setMessage(
        <span className="flex items-center gap-2">
          <FaTimesCircle className="text-red-600" /> Please fill all 6 digits!
        </span>
      );
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const generateRandomOTP = () => {
    return Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join('');
  };

  const handleResend = () => {
    const newOtp = generateRandomOTP();
    localStorage.setItem('savedOtp', newOtp);
    setSavedOtp(newOtp);
    setOtp(Array(6).fill(''));
    inputRefs.current[0].focus();
    setTimer(30);
    setMessage(
      <span className="flex items-center gap-2">
        <FaPaperPlane className="text-blue-600" /> New OTP Sent!
      </span>
    );
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <>
      <Navbar />
        <div className="min-h-screen bg-[#f5fce8] flex flex-col items-center justify-center p-6 text-[#2d3a1f]">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FaLock className="text-[#2d3a1f]" /> Enter OTP
        </h2>


        <div className="flex gap-3 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-xl text-center border-2 border-[#9db579] rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          ))}
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={handleSubmit}
            className="bg-[#e9f6cb] hover:bg-[#d8efb0] text-[#2d3a1f] font-semibold px-6 py-2 rounded-xl shadow-md transition-all"
          >
            Submit OTP
          </button>

          <button
            onClick={handleResend}
            disabled={timer > 0}
            className={`px-6 py-2 rounded-xl font-semibold transition-all ${
              timer > 0
                ? 'bg-gray-300 text-white cursor-not-allowed'
                : 'bg-[#fefee6] hover:bg-[#d8efb0] text-[#2d3a1f] border border-[#2d3a1f] shadow'
            }`}
          >
            {timer > 0 ? `Resend in ${timer}s` : 'Resend OTP'}
          </button>
        </div>

        {savedOtp && (
          <div className="mt-4 flex items-center gap-2 bg-[#fefee6] border border-[#d0e4aa] rounded-full px-4 py-2 shadow-sm">
            <FaKey className="text-[#2d3a1f]" />
            <span className="text-sm font-semibold">
              Saved OTP:{" "}
              <span className="font-bold">
                {showOtp ? savedOtp : "*".repeat(6)}
              </span>
            </span>
            <button
              onClick={() => setShowOtp(!showOtp)}
              className="text-[#2d3a1f] hover:text-green-600 transition"
            >
              {showOtp ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        )}

        {message && (
          <div className="mt-4 px-6 py-2 bg-green-100 border border-green-400 rounded-xl text-green-800 font-medium shadow-md animate-bounce">
            {message}
          </div>
        )}
      </div>
    </>
  );
}

export default OTPInput;
