import React from "react";
import "../styles/Month.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Month = ({
  month,
  setMonth,
  year,
  setYear,
  setButtonClicked,
  setSelectedDate
}) => {
  const getMonthsName = number => {
    let name = null;
    switch (number) {
      case 0:
        name = "January";
        break;
      case 1:
        name = "February";
        break;
      case 2:
        name = "March";
        break;
      case 3:
        name = "April";
        break;
      case 4:
        name = "May";
        break;
      case 5:
        name = "June";
        break;
      case 6:
        name = "July";
        break;
      case 7:
        name = "August";
        break;
      case 8:
        name = "September";
        break;
      case 9:
        name = "October";
        break;
      case 10:
        name = "November";
        break;
      case 11:
        name = "December";
        break;
      default:
        break;
    }
    return name;
  };

  const arrowLeftOnClick = () => {
    setButtonClicked(false);
    setSelectedDate(null);
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };
  const arrowRightOnClick = () => {
    setButtonClicked(false);
    setSelectedDate(null);
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className="month-container">
      <FontAwesomeIcon
        onClick={arrowLeftOnClick}
        className="arrows"
        icon={faArrowLeft}
      />
      <span className="month-text">{getMonthsName(month)}</span>
      <FontAwesomeIcon
        onClick={arrowRightOnClick}
        className="arrows"
        icon={faArrowRight}
      />
    </div>
  );
};

export default Month;
