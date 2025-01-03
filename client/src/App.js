// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import MessageList from "./MessageList";
import SecondPage from "./SecondPage";
import ChatHeader from "./components/ChatHeader";
import About from "./About";
import Kontakt from "./Kontakt";

const App = () => {
  return (
    <div>
      <ChatHeader />
      <Routes>
        <Route path="/" element={<MessageList />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<SecondPage />} />
        <Route path="/contact" element={<Kontakt />} />
      </Routes>
    </div>
  );
};

export default App;
