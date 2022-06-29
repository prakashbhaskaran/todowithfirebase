import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TodoProvider from "./store/TodoProvider";
import DateProvider from "./store/DateProvider";
import SessionProvider from "./store/SessionProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SessionProvider>
    <TodoProvider>
      <DateProvider>
        <App />
      </DateProvider>
    </TodoProvider>
  </SessionProvider>
);
