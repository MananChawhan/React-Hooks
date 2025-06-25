import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";   
import NavbarForUseState from "./NavbarForUseState";

const emojis = ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','🥰','😗','😙','🥲'];

function Emoji() {
  const [Text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const addEmoji = (emoji) => {
    setText(Text + emoji);
  };

  const handleSend = () => {
    if (Text.trim() !== "") {
      setMessages([...messages, Text]);
      setText("");
    }
  };

  return (
    <>
      <NavbarForUseState />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5fce8] px-4 text-[#2d3a1f] py-10">
        <div className="bg-white border-2 border-[#2d3a1f] rounded-3xl p-6 w-full max-w-md shadow-lg space-y-5">
          <h2 className="text-2xl font-bold text-center">Emoji Chat Box 💬</h2>

          <div className="relative">
            <input
              type="text"
              value={Text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type your message..."
              className="w-full p-3 pr-12 border border-[#2d3a1f] rounded-2xl font-medium text-base"
            />
            <button
              onClick={handleSend}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#e9f6cb] hover:bg-[#d8efb0] text-[#2d3a1f] p-2 border border-[#2d3a1f] rounded-full transition"
            >
              <IoSend size={20} />
            </button>
          </div>

          <div className="grid grid-cols-6 gap-3 bg-[#fefee6] p-3 rounded-2xl border border-[#2d3a1f] max-h-48 overflow-y-auto">
            {emojis.map((emoji, index) => (
              <button
                key={index}
                onClick={() => addEmoji(emoji)}
                className="text-xl hover:scale-110 transition-transform duration-150"
              >
                {emoji}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className="bg-[#e9f6cb] px-4 py-2 rounded-2xl border border-[#2d3a1f] shadow-sm text-[#2d3a1f] font-medium"
              >
                {msg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Emoji;
