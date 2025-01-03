import React from "react";
import Chat from "./components/chat";
import { Link } from "react-router-dom";
import BotpressChat from "./components/BotpressChat";

const MessageList = () => {
  return (
    <div className="bg-slate-500 min-h-screen">
      <div className="h-[100px] w-full">
        <img src="/s1.jpg" alt="Chat icon" className="full" />
      </div>

      <Chat />
      <BotpressChat/>

      {/* Ссылка на About страницу */}
      <div className="text-center mt-2 bg-white">
        <Link
          to="/about"
          className="ml-[500px] mt-[200px] flex items-center underline space-x-2 text-red-950 text-[40px]"
        >
          <span>Go to About Page</span>
          <img
            src="/iconfinder-smart-watch-help-about-4011296_113045.png"
            alt="Chat icon"
            className="w-[60px] h-[60px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default MessageList;
