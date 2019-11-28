import React, { useState } from "react";
import Year from "./Year";
import Month from "./Month";
import Dates from "./Dates";
import CalendarEvents from "./CalendarEvents";

import "../styles/App.css";

const App = () => {
  const convertUTCDateToLocalDate = date => {
    const newDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60 * 1000
    );
    return newDate;
  };

  const day = convertUTCDateToLocalDate(new Date()).getDate();

  const [month, setMonth] = useState(
    convertUTCDateToLocalDate(new Date()).getMonth()
  );
  const [year, setYear] = useState(
    convertUTCDateToLocalDate(new Date()).getFullYear()
  );
  const originalDay = convertUTCDateToLocalDate(new Date()).getDate();
  const originalMonth = convertUTCDateToLocalDate(new Date()).getMonth();
  const originalYear = convertUTCDateToLocalDate(new Date()).getFullYear();
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventList, setEventList] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [buttonClicked, setButtonClicked] = useState(false);
  const [eventValue, setEventValue] = useState("");
  const [timeValue, setTimeValue] = useState("12:00pm");

  return (
    <div className="app-main-container">
      <Year year={year} />
      <Month
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        setButtonClicked={setButtonClicked}
        setSelectedDate={setSelectedDate}
      />
      <Dates
        year={year}
        month={month}
        day={day}
        originalYear={originalYear}
        originalMonth={originalMonth}
        originalDay={originalDay}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        eventList={eventList}
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
        setButtonClicked={setButtonClicked}
      />
      <CalendarEvents
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        eventList={eventList}
        setEventList={setEventList}
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
        eventValue={eventValue}
        setEventValue={setEventValue}
        timeValue={timeValue}
        setTimeValue={setTimeValue}
      />
    </div>
  );
};

export default App;
