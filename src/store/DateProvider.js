import React, { createContext } from "react";

export const DateContext = createContext();

const DateProvider = ({ children }) => {
  //dates
  const today = new Date();

  const yesterday = new Date(
    new Date().valueOf() - 1000 * 60 * 60 * 24
  ).toLocaleDateString();

  const tomorrow = new Date(today);

  tomorrow.setDate(tomorrow.getDate() + 1);
  function convertDate(value) {
    let date = `${value}`;
    let datearray = date.split("/");

    return datearray[1] + "/" + datearray[0] + "/" + datearray[2];
  }
  function dayfinder(value) {
    value = convertDate(value);

    if (value === `${convertDate(today.toLocaleDateString())}`) return "today";
    else if (value === `${convertDate(tomorrow.toLocaleDateString())}`)
      return "tomorrow";
    else if (value === `${convertDate(yesterday)}`) return "yesterday";
    else if (value > `${convertDate(tomorrow.toLocaleDateString())}`)
      return "future";
    else return "overdue";
  }

  const value = { today, yesterday, tomorrow, dayfinder, convertDate };
  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

export default DateProvider;
