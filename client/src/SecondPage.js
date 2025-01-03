import React from "react";
import { Link } from "react-router-dom";
import CalendarComponent from "./components/CalendarComponent";
import CalculatorComponent from "./components/CalculatorComponent";

const SecondPage = () => {
  return (
    <div className="bg-gray-500 min-h-screen flex flex-col items-center justify-center">
      <div className="h-[100px] w-full">
        <img
    src={`${process.env.PUBLIC_URL}/04.jpg`}  alt="Chat icon" className="full" />
      </div>
      <h1 className="text-4xl font-bold text-white mb-4">Welcome!</h1>

      <div className="mt-[100px] mb-[100px] flex w-full">
        {/* Калькулятор */}
        <div className="mr-auto ml-[20px] w-[300px] h-[450px] pb-[20px] bg-orange-600 rounded-lg">
          <CalculatorComponent />
        </div>

        {/* Используем ml-auto для смещения календаря вправо */}
        <div className="ml-auto w-[300px] h-[450px] pb-[20px] bg-gray-400 rounded-lg">
          <CalendarComponent />
        </div>
      </div>

      <Link
        to="/"
        className="ml-[50px] mt-[300px] flex items-center underline space-x-2 text-red-950 text-[40px]"
      >
        <img
          
          src={`${process.env.PUBLIC_URL}/bluehousehousehome_azulcasa_cas_6791.png`}
          alt="Chat icon"
          className="w-[60px] h-[60px]"
        />
        <span>Back to Home</span>
      </Link>
    </div>
  );
};

export default SecondPage;
