import React from "react";
import { CiShop } from "react-icons/ci";
import { PiInstagramLogoDuotone } from "react-icons/pi";

const Card = ({ imageurl, StudentName, StudentAge, hostelName, spendings }) => {
  const isPremium = spendings >= 20000;

  return (
    <div className="bg-[#f5fce8] border-2 border-[#2d3a1f] rounded-3xl shadow-md hover:shadow-lg transition-transform hover:scale-105 w-[300px] p-5 text-[#2d3a1f] font-semibold">
      
      
      <div className="h-48 mb-4 rounded-xl overflow-hidden">
        <img
          src={imageurl}
          alt={StudentName}
          className="w-full h-full object-cover rounded-xl transition-transform hover:scale-105"
        />
      </div>

      <div className="text-center space-y-1">
        <h2 className="text-xl font-bold">{StudentName}</h2>
        <p className="text-sm">🎂 Age: {StudentAge}</p>
        <p className="text-sm flex items-center justify-center gap-1">
          <CiShop className="text-lg" />
          Hostel: {hostelName}
        </p>
        <p className="text-sm">
          💰 Spendings: <span className="font-bold">₹{spendings.toLocaleString()}</span>
        </p>
        <p className={`text-sm font-bold ${isPremium ? 'text-green-600' : 'text-red-500'}`}>
          {isPremium ? 'Top Spender 🎉' : 'Budget Friendly 💸'}
        </p>
      </div>

      <button className="mt-4 w-full flex items-center justify-center gap-2 bg-[#e9f6cb] hover:bg-[#d8efb0] border border-[#2d3a1f] text-[#2d3a1f] font-bold py-2 rounded-xl shadow-sm transition">
        <PiInstagramLogoDuotone className="text-xl" />
        Follow Them
      </button>
    </div>
  );
};

export default Card;
