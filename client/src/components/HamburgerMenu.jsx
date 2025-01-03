// src/components/HamburgerMenu.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Закрываем меню после перехода
  };

  return (
    <div className="relative">
      {/* Кнопка для открытия меню */}
      <button
        onClick={toggleMenu}
        className="p-2 bg-orange-600 text-white rounded-md focus:outline-none"
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>

      {/* Выпадающее меню */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-400 border-2 border-red-600 rounded-lg shadow-lg overflow-hidden"
        style={{ border: "5px solid #1E40AF" }}>
          <nav className="flex flex-col">
            {["/", "/about", "/services", "/contact"].map((item, index) => {
              const titles = ["Home", "About", "Services", "Contact"];
              return (
                <button
                  key={index}
                  onClick={() => handleNavigation(item)}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition"
                >
                  {titles[index]}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
