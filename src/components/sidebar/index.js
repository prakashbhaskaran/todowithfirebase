import React, { useContext } from "react";
import { DateContext } from "../../store/DateProvider";
import { todoContext } from "../../store/TodoProvider";

const Sidebar = () => {
  const { list, setTitle } = useContext(todoContext);
  const { today, tomorrow, yesterday, convertDate } = useContext(DateContext);

  let options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.addEventListener("click", (e) => {
      options.forEach((item) => {
        item.classList.remove("bg-indigo-50");
        item.childNodes.forEach((children) => (children.className = ""));
      });
      setTitle(`${e.currentTarget.firstChild.innerText}`);
      e.currentTarget.classList.add("bg-indigo-50");
      e.currentTarget.childNodes.forEach(
        (children) => (children.className = "text-indigo-700 font-bold")
      );
    });
  });

  return (
    <div className="p-8 xl:basis-3/12 basis-2/5 border-r-2 border-indigo-500">
      <div
        className="option flex justify-between p-3  bg-indigo-50 rounded cursor-pointer
        "
      >
        <p className="text-indigo-700 font-bold">All</p>
        <p className="text-indigo-700 font-bold">
          {list.filter((item) => item.completed === false).length}
        </p>
      </div>
      <div
        className="option flex justify-between p-3 rounded cursor-pointer
        "
      >
        <p>Completed</p>
        <p>{list.filter((item) => item.completed === true).length}</p>
      </div>
      <div
        className="option flex justify-between p-3 rounded cursor-pointer
        "
      >
        <p>Future</p>
        <p>
          {
            list.filter(
              (item) =>
                convertDate(item.date) >
                  `${convertDate(tomorrow.toLocaleDateString())}` &&
                item.completed === false
            ).length
          }
        </p>
      </div>

      {/*horizontal line*/}
      <div className="py-6">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="days flex flex-col gap-1.5">
        <div className="option flex justify-between p-3 rounded cursor-pointer">
          <p>Today</p>
          <p>
            {
              list.filter(
                (item) =>
                  convertDate(item.date) ===
                    `${convertDate(today.toLocaleDateString())}` &&
                  item.completed === false
              ).length
            }
          </p>
        </div>
        <div className="option flex justify-between p-3 rounded cursor-pointer">
          <p>Tomorrow</p>
          <p>
            {" "}
            {
              list.filter(
                (item) =>
                  convertDate(item.date) ===
                    `${convertDate(tomorrow.toLocaleDateString())}` &&
                  item.completed === false
              ).length
            }
          </p>
        </div>
        <div className="option flex justify-between p-3 rounded cursor-pointer">
          <p>Yesterday</p>
          <p>
            {" "}
            {
              list.filter(
                (item) =>
                  convertDate(item.date) === `${convertDate(yesterday)}` &&
                  item.completed === false
              ).length
            }
          </p>
        </div>
        <div
          className="option flex justify-between p-3 rounded cursor-pointer
        "
        >
          <p>Overdue</p>
          <p>
            {
              list.filter(
                (item) =>
                  convertDate(item.date) < `${convertDate(yesterday)}` &&
                  item.completed === false
              ).length
            }
          </p>
        </div>
      </div>
      {/*horizontal line*/}
      <div className="py-6">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="categories flex flex-col gap-1.5">
        <div className="option flex justify-between p-3 rounded cursor-pointer">
          <p>Personal</p>
          <p>
            {
              list.filter(
                (item) =>
                  item.category === "personal" && item.completed === false
              ).length
            }
          </p>
        </div>
        <div className="option flex justify-between p-3 rounded cursor-pointer">
          <p>Home</p>
          <p>
            {
              list.filter(
                (item) => item.category === "home" && item.completed === false
              ).length
            }
          </p>
        </div>
        <div className="option flex justify-between p-3 rounded cursor-pointer">
          <p>Office</p>
          <p>
            {
              list.filter(
                (item) => item.category === "office" && item.completed === false
              ).length
            }
          </p>
        </div>
        <div className="option flex justify-between p-3 rounded cursor-pointer">
          <p>Travel</p>
          <p>
            {
              list.filter(
                (item) => item.category === "travel" && item.completed === false
              ).length
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
