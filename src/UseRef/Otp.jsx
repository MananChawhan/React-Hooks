import React, { useRef, useState, useEffect } from 'react';
import Navbar from './Navbarforref';

function OTPInput() {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [savedOtp, setSavedOtp] = useState('');
  const inputRefs = useRef([]);

  useEffect(() => {
    const stored = localStorage.getItem('savedOtp');
    if (stored) setSavedOtp(stored);
  }, []);

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
      alert('OTP Submitted ✅');
    } else {
      alert('Please fill all 6 digits ❌');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5fce8] flex flex-col items-center justify-center p-6 text-[#2d3a1f]">
        <h2 className="text-3xl font-bold mb-6">🔢 Enter OTP</h2>

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
              className="w-12 h-12 text-xl text-center border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="bg-[#e9f6cb] hover:bg-[#d8efb0] text-[#2d3a1f] font-semibold px-6 py-2 rounded-xl shadow-md transition-all"
        >
          Submit OTP
        </button>

        {savedOtp && (
          <p className="mt-6 text-lg">
            ✅ Saved OTP: <span className="font-bold">{savedOtp}</span>
          </p>
        )}
      </div>
    </>
  );
}

export default OTPInput;
