import React from "react";
import "../styles/Dates.css";

const Dates = ({
  year,
  month,
  day,
  originalDay,
  originalMonth,
  originalYear,
  selectedDate,
  setSelectedDate,
  eventList,
  selectedEvent,
  setSelectedEvent,
  setButtonClicked
}) => {
  const selectedDayClick = e => {
    const { innerHTML, className } = e.target;
    if (className.includes("event-day") && selectedEvent === null) {
      if (selectedDate !== null) {
        setSelectedDate(null);
        setButtonClicked(false);
      }
      eventList.map(item => {
        if (
          item.year === year &&
          item.month === month &&
          item.day === parseInt(innerHTML, 10)
        ) {
          setSelectedEvent(item);
        }
        return item;
      });
    } else if (className.includes("event-day") && selectedEvent !== null) {
      setSelectedEvent(null);
    } else if (
      className.includes("date-current-month") &&
      selectedDate === null
    ) {
      if (selectedEvent !== null) {
        setSelectedEvent(null);
      }
      setSelectedDate({
        year: year,
        month: month,
        day: parseInt(innerHTML, 10)
      });
    } else if (
      className.includes("date-current-month") &&
      selectedDate !== null
    ) {
      if (selectedEvent !== null) {
        setSelectedEvent(null);
      }
      setSelectedDate(null);
      setButtonClicked(false);
    }
  };

  const dateCalculator = () => {
    const array = [];
    const tempYear = year;
    const tempMonth = month;
    const numOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (tempYear % 4 === 0 && tempYear % 100 !== 0 && tempYear % 400 !== 0) {
      numOfDays[1] = 29;
    }
    let tempDate = new Date(`${tempYear}-${tempMonth + 1}-1`);

    if (tempDate.getDay() !== 1) {
      tempDate.setMonth(tempDate.getMonth() - 1);
      tempDate.setDate(numOfDays[tempDate.getMonth()]);
      while (tempDate.getDay() !== 1) {
        tempDate.setDate(tempDate.getDate() - 1);
      }
    }
    array.push(
      <span
        key={tempDate}
        className={`date-cell ${
          tempMonth !== tempDate.getMonth()
            ? "date-other-month"
            : "date-current-month"
        } ${
          tempDate.getFullYear() === originalYear &&
          tempDate.getMonth() === originalMonth &&
          tempDate.getDate() === originalDay
            ? "today"
            : ""
        } ${
          selectedDate !== null
            ? tempDate.getDate() === selectedDate.day &&
              tempDate.getMonth() === selectedDate.month &&
              tempDate.getFullYear() === selectedDate.year
              ? "selected-day"
              : ""
            : ""
        } ${
          eventList.filter(item => {
            return (
              tempDate.getDate() === item.day &&
              tempDate.getMonth() === item.month &&
              tempDate.getFullYear() === item.year
            );
          }).length > 0
            ? "event-day"
            : ""
        }`}
        onClick={selectedDayClick}
      >
        {tempDate.getDate() < 10
          ? "0" + tempDate.getDate()
          : tempDate.getDate()}
      </span>
    );
    for (let i = 2; i <= 42; i++) {
      if (tempDate.getDate() === numOfDays[tempDate.getMonth()]) {
        tempDate.setDate(1);
        tempDate.setMonth(tempDate.getMonth() + 1);
        array.push(
          <span
            key={tempDate}
            className={`date-cell ${
              tempMonth !== tempDate.getMonth()
                ? "date-other-month"
                : "date-current-month"
            } ${
              tempDate.getFullYear() === originalYear &&
              tempDate.getMonth() === originalMonth &&
              tempDate.getDate() === originalDay
                ? "today"
                : ""
            } ${
              selectedDate !== null
                ? tempDate.getDate() === selectedDate.day &&
                  tempDate.getMonth() === selectedDate.month &&
                  tempDate.getFullYear() === selectedDate.year
                  ? "selected-day"
                  : ""
                : ""
            } ${
              eventList.filter(item => {
                return (
                  tempDate.getDate() === item.day &&
                  tempDate.getMonth() === item.month &&
                  tempDate.getFullYear() === item.year
                );
              }).length > 0
                ? "event-day"
                : ""
            }`}
            onClick={selectedDayClick}
          >
            {tempDate.getDate() < 10
              ? "0" + tempDate.getDate()
              : tempDate.getDate()}
          </span>
        );
      } else {
        tempDate.setDate(tempDate.getDate() + 1);
        array.push(
          <span
            key={tempDate}
            className={`date-cell ${
              tempMonth !== tempDate.getMonth()
                ? "date-other-month"
                : "date-current-month"
            } ${
              tempDate.getFullYear() === originalYear &&
              tempDate.getMonth() === originalMonth &&
              tempDate.getDate() === originalDay
                ? "today"
                : ""
            } ${
              selectedDate !== null
                ? tempDate.getDate() === selectedDate.day &&
                  tempDate.getMonth() === selectedDate.month &&
                  tempDate.getFullYear() === selectedDate.year
                  ? "selected-day"
                  : ""
                : ""
            } ${
              eventList.filter(item => {
                return (
                  tempDate.getDate() === item.day &&
                  tempDate.getMonth() === item.month &&
                  tempDate.getFullYear() === item.year
                );
              }).length > 0
                ? "event-day"
                : ""
            }`}
            onClick={selectedDayClick}
          >
            {tempDate.getDate() < 10
              ? "0" + tempDate.getDate()
              : tempDate.getDate()}
          </span>
        );
      }
    }

    return array;
  };

  return (
    <div>
      <div className="date-name-container">
        <span className="day-name">Monday</span>
        <span className="day-name">Tuesday</span>
        <span className="day-name">Wednesday</span>
        <span className="day-name">Thursday</span>
        <span className="day-name">Friday</span>
        <span className="day-name">Saturday</span>
        <span className="day-name">Sunday</span>
      </div>
      <div className="date-container">{dateCalculator()}</div>
    </div>
  );
};

export default Dates;
