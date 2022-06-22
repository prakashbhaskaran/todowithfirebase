import React, { useContext } from "react";
import { DateContext } from "../../store/DateProvider";
import { todoContext } from "../../store/TodoProvider";
import AddTodo from "../addtodo";

const List = () => {
  const { list, toggleComplete, title, handleDelete } = useContext(todoContext);
  const { today, tomorrow, yesterday, dayfinder } = useContext(DateContext);

  return (
    <div className="p-8 basis-9/12">
      <h1 className="font-bold text-2xl capitalize">{title}</h1>
      <AddTodo />

      <div className="list mt-6 flex flex-col gap-5">
        {list
          .filter((item) => {
            if (title.toLowerCase() === "completed") {
              return item.completed === true;
            } else if (title.toLowerCase() === "existing") {
              return item.completed === false;
            } else {
              return (
                (dayfinder(item.date) === title.toLowerCase() ||
                  item.category === title.toLowerCase()) &&
                item.completed === false
              );
            }
          })
          .map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-8 hover:bg-gray-100 rounded p-3"
            >
              <input
                type="checkbox"
                className="w-5 h-5 cursor-pointer basis-auto"
                id={`${item.id}`}
                defaultChecked={item.completed ? "checked" : ""}
                onClick={() => toggleComplete(item)}
              />
              <div className="basis-4/5">
                <label
                  htmlFor={`${item.id}`}
                  className={`d-block text-xl cursor-pointer ${
                    item.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {item.content}
                </label>
                <p
                  className={`capitalize ${
                    item.date === `${today.toLocaleDateString()}`
                      ? "text-violet-500"
                      : item.date === `${yesterday}`
                      ? "text-red-600"
                      : item.date === `${tomorrow.toLocaleDateString()}`
                      ? "text-blue-500"
                      : item.date > `${tomorrow.toLocaleDateString()}`
                      ? "text-yellow-700"
                      : ""
                  }`}
                >
                  {dayfinder(item.date)}({item.date})
                </p>
              </div>
              <div className="basis-1/5">
                <button
                  className="text-red-700"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        {list.filter((item) => {
          if (title.toLowerCase() === "completed") {
            return item.completed === true;
          } else if (title.toLowerCase() === "existing") {
            return item.completed === false;
          } else {
            return (
              dayfinder(item.date) === title.toLowerCase() ||
              item.category === title.toLowerCase()
            );
          }
        }).length === 0 && (
          <div className="p-3 text-2xl text-gray-400">No items exist</div>
        )}
      </div>
    </div>
  );
};

export default List;
