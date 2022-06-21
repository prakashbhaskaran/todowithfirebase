import React, { useContext } from "react";
import { todoContext } from "../../store/TodoProvider";

const Navbar = () => {
  const { setCategory, setText, setDate, addToList, showModal, setShowModal } =
    useContext(todoContext);
  let tags = document.querySelectorAll(".tag");

  tags.forEach((tag) => {
    tag.addEventListener("click", (e) => {
      tags.forEach((item) => {
        item.classList.remove("bg-violet-700");
        item.classList.add("text-gray-700");
      });
      e.currentTarget.classList.remove("text-gray-700");
      e.currentTarget.classList.add("bg-violet-700", "text-white");
    });
  });
  return (
    <header className="flex items-center py-4 px-8 border-b justify-between">
      <div>
        <h1 className="leading-none text-xl text-grey-darkest font-bold ">
          TASKS
        </h1>
      </div>
      <div className="flex pl-3">
        <div className="flex justify-center">
          <button
            className="block text-white bg-violet-500 focus:outline-none  font-medium rounded-lg text-sm flex items-center px-5 py-2 "
            type="button"
            onClick={() => setShowModal(true)}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 50 50"
                height="20px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 50 50"
                width="20px"
              >
                <rect fill="none" height="50" width="50" />
                <line
                  fill="none"
                  stroke="#ffffff"
                  strokeMiterlimit="10"
                  strokeWidth="4"
                  x1="9"
                  x2="41"
                  y1="25"
                  y2="25"
                />
                <line
                  fill="none"
                  stroke="#ffffff"
                  strokeMiterlimit="10"
                  strokeWidth="4"
                  x1="25"
                  x2="25"
                  y1="9"
                  y2="41"
                />
              </svg>
            </div>{" "}
            <p className="pl-2">New task</p>
          </button>

          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full max-w-screen-sm  my-6 mx-auto">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-2xl">Add task</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      ></button>
                    </div>
                    {/*body*/}
                    <form onSubmit={addToList}>
                      <div className="p-6">
                        <div>
                          <label>What are you upto?</label>
                          <input
                            type="text"
                            className="block p-2 mt-2 w-full text-gray-900 rounded-lg border border-gray-300 sm:text-sm"
                            placeholder="Brief text for what you want to accomplish."
                            onChange={(e) => {
                              setText(e.target.value);
                            }}
                            required
                          />
                        </div>
                        <div className="mt-4">
                          <label>When do you want to complete it?</label>
                          <input
                            type="text"
                            className="block p-2 mt-2 w-full text-gray-900 rounded-lg border border-gray-300 sm:text-sm"
                            placeholder="Date in DD/MM/YYYY"
                            onChange={(e) => {
                              setDate(e.target.value);
                            }}
                            required
                          />
                        </div>

                        <div className="mt-4">
                          <p>Tags</p>
                          <div className="mt-4 flex">
                            <button
                              type="button"
                              className="tag rounded-l-lg border-gray-300 border bg-violet-700 text-white py-2 px-4"
                              onClick={() => setCategory("personal")}
                            >
                              Personal
                            </button>
                            <button
                              type="button"
                              className="tag text-gray-700 border-gray-300 border py-2 px-4"
                              onClick={() => setCategory("home")}
                            >
                              Home
                            </button>
                            <button
                              type="button"
                              className="tag border-gray-300 border text-gray-700 py-2 px-4"
                              onClick={() => setCategory("office")}
                            >
                              Office
                            </button>
                            <button
                              type="button"
                              className="tag rounded-r-lg border-gray-300 border text-gray-700 py-2 px-4"
                              onClick={() => setCategory("travel")}
                            >
                              Travel
                            </button>
                          </div>
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-evenly p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-gray-500 border-gray-300 w-full border rounded font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                        <button
                          className="bg-violet-700 text-white font-bold uppercase text-sm px-6 py-2 w-full rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
