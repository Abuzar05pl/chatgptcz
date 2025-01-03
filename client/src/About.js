import React from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from './components/LanguageSwitcher';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-[100px] w-full">
        <img src="/06.jpg" alt="Chat icon" className="full" />
      </div>
      <h1 className="text-4xl font-bold text-orange-950 mb-4">Welcome! </h1>
      <h1>
        <LanguageSwitcher/>
        </h1>

     
      <Link
        to="/"
        className="ml-[50px] mt-[570px] flex items-center underline space-x-2 text-red-950 text-[40px]"
      >
        <img
          src="/bluehousehousehome_azulcasa_cas_6791.png"
          alt="Chat icon"
          className="w-[60px] h-[60px]"
        />
        <span>Back to Home</span>
      </Link>
     
    </div>
  );
};



export default About;
