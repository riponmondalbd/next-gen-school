"use client";
import { calendarEvents } from "@/lib/data";
import moment from "moment";
import { useState } from "react";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectView: View) => {
    setView(selectView);
  };
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
    />
  );
};

export default BigCalendar;
