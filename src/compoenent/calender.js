import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import { useModeStore } from "../store/mode/store";
import { items } from "../utility/utils";

const Calender = () => {
  const toggleMode = useModeStore((state) => state.toggleMode);
  const [value, onChange] = useState(new Date());
  const groups = [
    { id: 1, title: "group 1" },
    { id: 2, title: "group 2" },
  ];

  return (
    <div
      className={`${
        !toggleMode ? "bg-white text-black" : "bg-black "
      }`}
    >
      <div className="flex items-center justify-center pt-10">
        <Calendar
          onChange={onChange}
          value={value}
          className="shadow-lg rounded w-19"
        />
      </div>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-12, "hour")}
        defaultTimeEnd={moment().add(12, "hour")}
        className="m-2 rounded"
      />
    </div>
  );
};

export default Calender;
