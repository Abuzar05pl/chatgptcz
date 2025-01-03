// CalendarComponent.jsx
import React, { useState } from "react";
import { Calendar } from "antd";
import "antd/dist/antd.css";

const CalendarComponent = () => {
  const [value, setValue] = useState(null);

  const onDateChange = (date) => {
    console.log("Выбранный день:", date.format("YYYY-MM-DD"));
    setValue(date);
  };

  return (
    <div className="m-4 p-4 bg-slate-200 rounded-lg shadow">
      <h2 className="text-center text-2xl font-bold mb-4">Календарь</h2>
      <Calendar
        value={value}
        onChange={onDateChange}
        fullscreen={false}
      />
    </div>
  );
};

export default CalendarComponent;
