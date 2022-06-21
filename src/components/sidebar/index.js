import React, { useContext } from "react";
import { todoContext } from "../../store/TodoProvider";

const Sidebar = () => {
  const { list, today, tomorrow, yesterday, setTitle } =
    useContext(todoContext);

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
    <div className="p-8 basis-3/12">
      <div
        className="option flex justify-between p-3  bg-indigo-50 rounded cursor-pointer
        "
      >
        <p className="text-indigo-700 font-bold">Existing</p>
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
                (item) => item.date === `${today.toLocaleDateString()}`
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
                (item) => item.date === `${tomorrow.toLocaleDateString()}`
              ).length
            }
          </p>
        </div>
        <div className="option flex justify-between p-3 rounded cursor-pointer">
          <p>Yesterday</p>
          <p> {list.filter((item) => item.date === `${yesterday}`).length}</p>
        </div>
        <div
          className="option flex justify-between p-3 rounded cursor-pointer
        "
        >
          <p>Overdue</p>
          <p>
            {
              list.filter(
                (item) => item.date < `${yesterday}` && item.completed === false
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
          <p>{list.filter((item) => item.category === "personal").length}</p>
        </div>
        <div className="option flex justify-between p-3 rounded cursor-pointer">
          <p>Home</p>
          <p>{list.filter((item) => item.category === "home").length}</p>
        </div>
        <div className="option flex justify-between p-3 rounded cursor-pointer">
          <p>Office</p>
          <p>{list.filter((item) => item.category === "office").length}</p>
        </div>
        <div className="option flex justify-between p-3 rounded cursor-pointer">
          <p>Travel</p>
          <p>{list.filter((item) => item.category === "travel").length}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
