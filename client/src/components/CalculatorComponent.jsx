import React, { useState } from "react";

const CalculatorComponent = () => {
  const [input, setInput] = useState("");

  const handleInput = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        const result = eval(input);
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "DEL") {
      setInput((prev) => prev.slice(0, -1));
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleKeyDown = (event) => {
    const { key } = event;

    if (key === "Enter") {
      handleInput("=");
    } else if (key === "Escape") {
      handleInput("C");
    } else if (key === "Backspace") {
      handleInput("DEL");
    } else if (/[0-9+\-*/.%]/.test(key)) {
      handleInput(key);
    }
  };

  return (
    <div
      className="bg-gray-400 rounded-lg shadow-lg p-4 w-[300px] h-[700px] flex flex-col"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Поле ввода */}
      <div className="bg-white border-2 border-black rounded-lg mb-6 p-6 text-right text-4xl font-semibold overflow-hidden h-[150px]">
        {input || "0"}
      </div>

      {/* Контейнер для кнопок */}
      <div className="flex-grow flex items-end">
        <div className="grid grid-cols-4 gap-[5px] pt-[20px]">
          {["7", "8", "9", "/"].map((item) => (
            <button
              key={item}
              className="bg-gray-300 border border-black rounded-lg p-6 text-4xl hover:bg-gray-500 hover:text-white"
              onClick={() => handleInput(item)}
            >
              {item}
            </button>
          ))}
          {["4", "5", "6", "*"].map((item) => (
            <button
              key={item}
              className="bg-gray-300 border border-black rounded-lg p-6 text-4xl hover:bg-gray-500 hover:text-white"
              onClick={() => handleInput(item)}
            >
              {item}
            </button>
          ))}
          {["1", "2", "3", "-"].map((item) => (
            <button
              key={item}
              className="bg-gray-300 border border-black rounded-lg p-6 text-4xl hover:bg-gray-500 hover:text-white"
              onClick={() => handleInput(item)}
            >
              {item}
            </button>
          ))}
          {["C", "0", "=", "+"].map((item) => (
            <button
              key={item}
              className="bg-gray-300 border border-black rounded-lg p-6 text-4xl hover:bg-gray-500 hover:text-white"
              onClick={() => handleInput(item)}
            >
              {item}
            </button>
          ))}
          <button
            className="bg-gray-300 border border-black rounded-lg p-6 text-4xl hover:bg-gray-500 hover:text-white"
            onClick={() => handleInput("DEL")}
          >
            DEL
          </button>
          <button
            className="bg-gray-300 border border-black rounded-lg p-6 text-4xl hover:bg-gray-500 hover:text-white"
            onClick={() => handleInput("%")}
          >
            %
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorComponent;
