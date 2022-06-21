import React, { useContext } from "react";
import { todoContext } from "../../store/TodoProvider";

const AddTodo = () => {
  const { text, setText, addToList, title } = useContext(todoContext);
  return (
    <form
      className={`mt-4 ${title.toLowerCase() !== "today" ? "hidden" : ""}`}
      onSubmit={addToList}
    >
      <input
        type="text"
        className="block p-4 xl:w-6/12 w-3/4 text-gray-900 bg-gray-50 outline-none rounded-lg  sm:text-sm"
        placeholder="Add new task"
        value={text}
        onChange={(e) => {
          e.preventDefault();
          setText(e.target.value);
        }}
      />
    </form>
  );
};

export default AddTodo;
