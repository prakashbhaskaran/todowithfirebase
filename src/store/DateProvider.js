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

  function dayfinder(value) {
    if (value === `${today.toLocaleDateString()}`) return "today";
    else if (value === `${tomorrow.toLocaleDateString()}`) return "tomorrow";
    else if (value === `${yesterday}`) return "yesterday";
    else if (value > `${tomorrow.toLocaleDateString()}`) return "future";
    else return "overdue";
  }

  const value = { today, yesterday, tomorrow, dayfinder };
  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

export default DateProvider;
