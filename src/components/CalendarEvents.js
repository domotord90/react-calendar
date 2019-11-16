import React from "react";
import "../styles/CalendarEvents.css";

const CalendarEvents = ({
  selectedDate,
  setSelectedDate,
  eventList,
  setEventList,
  selectedEvent,
  setSelectedEvent,
  buttonClicked,
  setButtonClicked,
  eventValue,
  setEventValue,
  timeValue,
  setTimeValue
}) => {
  const calendarEventDeleteHandler = () => {
    const tempArray = eventList.filter(item => {
      // if (
      //   item.year !== selectedEvent.year ||
      //   item.month !== selectedEvent.month ||
      //   item.day !== selectedEvent.day
      // ) {
      //   return item;
      // }
      return (
        item.year !== selectedEvent.year ||
        item.month !== selectedEvent.month ||
        item.day !== selectedEvent.day
      );
    });
    setSelectedEvent(null);
    setEventList(tempArray);
  };

  const calendarEventClickHandler = () => {
    if (!buttonClicked) {
      setButtonClicked(true);
    } else if (
      buttonClicked &&
      selectedDate !== null &&
      eventValue !== "" &&
      eventList.filter(item => {
        return (
          selectedDate.year === item.year &&
          selectedDate.month === item.month &&
          selectedDate.day === item.day
        );
      }).length === 0
    ) {
      const tempArray = [...eventList];
      tempArray.push({
        year: selectedDate.year,
        month: selectedDate.month,
        day: selectedDate.day,
        eventName: eventValue,
        eventTime: timeValue
      });
      setEventList(tempArray);
      setEventValue("");
      setTimeValue("12:00pm");
      setSelectedDate(null);
      setButtonClicked(false);
    }
  };

  const eventTextChangeHandler = e => {
    const { value } = e.target;

    setEventValue(value);
  };

  const timeEventHandler = e => {
    const { value } = e.target;

    setTimeValue(value);
  };

  return (
    <div>
      {selectedDate !== null && (
        <div className="button-container">
          <button onClick={calendarEventClickHandler} className="event-button">
            Add event
          </button>
        </div>
      )}
      {buttonClicked && (
        <div className="event-input-container">
          <div className="event-inputs">
            <label className="event-input-label">
              Please enter the event name
              <input
                className="event-text-input"
                onChange={eventTextChangeHandler}
                value={eventValue}
                type="text"
              />
            </label>
          </div>
          <div className="event-inputs">
            <label className="event-input-label">
              Enter the time
              <select
                className="event-time-input"
                onChange={timeEventHandler}
                value={timeValue}
              >
                <option value="12:00am">12:00am</option>
                <option value="01:00am">01:00am</option>
                <option value="02:00am">02:00am</option>
                <option value="03:00am">03:00am</option>
                <option value="04:00am">04:00am</option>
                <option value="05:00am">05:00am</option>
                <option value="06:00am">06:00am</option>
                <option value="07:00am">07:00am</option>
                <option value="08:00am">08:00am</option>
                <option value="09:00am">09:00am</option>
                <option value="10:00am">10:00am</option>
                <option value="11:00am">11:00am</option>
                <option value="12:00pm">12:00pm</option>
                <option value="01:00pm">01:00pm</option>
                <option value="02:00pm">02:00pm</option>
                <option value="03:00pm">03:00pm</option>
                <option value="04:00pm">04:00pm</option>
                <option value="05:00pm">05:00pm</option>
                <option value="06:00pm">06:00pm</option>
                <option value="07:00pm">07:00pm</option>
                <option value="08:00pm">08:00pm</option>
                <option value="09:00pm">09:00pm</option>
                <option value="10:00pm">10:00pm</option>
                <option value="11:00pm">11:00pm</option>
              </select>
            </label>
          </div>
          <div className="event-inputs">
            <label className="event-input-label important-message">
              Please select the day!
            </label>
          </div>
        </div>
      )}
      {selectedEvent !== null && (
        <div className="selected-event-container">
          <div className="button-container">
            <button
              onClick={calendarEventDeleteHandler}
              className="event-button event-delete-button"
            >
              Delete event
            </button>
          </div>
          <div className="event-describer-container">
            <div className="event-describer-item">
              <label>Event name: </label>
              <span>{selectedEvent.eventName}</span>
            </div>
            <div className="event-describer-item">
              <label>Event time: </label>
              <span>{selectedEvent.eventTime}</span>
            </div>
            <div className="event-describer-item">
              <label>Event date: </label>
              <span>{`${selectedEvent.year}-${selectedEvent.month + 1}-${
                selectedEvent.day
              }`}</span>
            </div>
          </div>
        </div>
      )}
      {selectedEvent === null && selectedDate === null && eventList.length > 0 && (
        <div className="event-list-container">
          <p className="event-list-header">Event list:</p>
          {eventList.map(item => {
            return (
              <div className="event-describer-container">
                <div className="event-describer-item">
                  <label>Event name: </label>
                  <span>{item.eventName}</span>
                </div>
                <div className="event-describer-item">
                  <label>Event time: </label>
                  <span>{item.eventTime}</span>
                </div>
                <div className="event-describer-item">
                  <label>Event date: </label>
                  <span>{`${item.year}-${item.month + 1}-${item.day}`}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CalendarEvents;
