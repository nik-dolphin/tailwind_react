import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import { useModeStore } from "../store/mode/store";

const Calender = () => {
  const toggleMode = useModeStore((state) => state.toggleMode);
  const [value, onChange] = useState(new Date());
  const groups = [
    { id: 1, title: "group 1" },
    { id: 2, title: "group 2" },
  ];

  const items = [
    {
      id: 1,
      group: 1,
      title: "item 1",
      start_time: moment(),
      end_time: moment().add(1, "hour"),
    },
    {
      id: 2,
      group: 2,
      title: "item 2",
      start_time: moment().add(-0.5, "hour"),
      end_time: moment().add(0.5, "hour"),
    },
    {
      id: 3,
      group: 1,
      title: "item 3",
      start_time: moment().add(2, "hour"),
      end_time: moment().add(3, "hour"),
    },
  ];
  return (
    <div className={`${!toggleMode ? "bg-white text-black" : "bg-black "} h-[93.5vh]`}>
      <div className="flex items-center justify-center p-20"> 
        <Calendar
          onChange={onChange}
          value={value}
          className="shadow-lg rounded"
        />
      </div>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-12, "hour")}
        defaultTimeEnd={moment().add(12, "hour")}
      />
    </div>
  );
};

export default Calender;
