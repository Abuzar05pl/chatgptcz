import React from "react";
import HamburgerMenu from "./HamburgerMenu";

const ChatHeader = () => {
  return (
    <div
      className="flex items-center bg-slate-700 p-4 h-[250px]"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/s2.jpg)`,
        backgroundSize: 'cover',  // Для растягивания изображения на весь элемент
        backgroundPosition: 'center', // Центрирование изображения
        width: '100%',  // Ширина блока
        height: '200px'  // Высота блока
      }}
    >
      {/* Компонент HamburgerMenu, поднятый выше на 30px */}
      <div className="w-[100px] h-[100px] mt-[-100px]">
        <HamburgerMenu />
      </div>

      {/* Иконка чата, поднятая выше на 30px */}
      <img
        
        src={`${process.env.PUBLIC_URL}/mail_envelope_icon_264237.png`} 
        alt="Chat icon"
        className="ml-[350px] w-[160px] h-[160px] mt-[-50px]"
      />

      {/* Заголовок, поднятый выше на 30px */}
      <h2 className="text-9xl text-center text-orange-950 font-semibold mt-[10px]">
        CHAT
      </h2>
    </div>
  );
};

export default ChatHeader;
