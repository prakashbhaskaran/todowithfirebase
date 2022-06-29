import React, { useContext } from "react";
import { SessionContext } from "../../store/SessionProvider";
import { todoContext } from "../../store/TodoProvider";

const Navbar = () => {
  const { setCategory, setText, setDate, addToList, showModal, setShowModal } =
    useContext(todoContext);
  const { logout } = useContext(SessionContext);
  let tags = document.querySelectorAll(".tag");

  tags.forEach((tag) => {
    tag.addEventListener("click", (e) => {
      tags.forEach((item) => {
        item.classList.remove("bg-violet-700", "text-white");
        item.classList.add("text-gray-700");
      });
      e.currentTarget.classList.remove("text-gray-700");
      e.currentTarget.classList.add("bg-violet-700", "text-white");
    });
  });
  return (
    <header className="flex items-center py-4 px-8 justify-between border-b-2 border-indigo-500">
      <div className="flex items-center gap-4">
        <h1 className="leading-none text-xl text-grey-darkest font-bold ">
          TASKS
        </h1>
        <div
          className="w-7 h-7 cursor-pointer "
          title="Logout"
          onClick={() => logout()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 512 511.99"
            className="fill-red-700 hover:fill-red-400"
          >
            <path
              fillRule="nonzero"
              d="M256 0c70.68 0 134.7 28.66 181.02 74.98C483.34 121.3 512 185.32 512 256s-28.66 134.69-74.98 181.01C390.7 483.33 326.68 511.99 256 511.99s-134.7-28.66-181.02-74.98C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.7 74.98-181.02C121.3 28.66 185.32 0 256 0zm-19.16 136.45c0-10.57 8.59-19.16 19.16-19.16s19.16 8.59 19.16 19.16V199c0 10.57-8.59 19.16-19.16 19.16s-19.16-8.59-19.16-19.16v-62.55zm72.94 52.45c-8.17-6.65-9.42-18.69-2.78-26.87 6.65-8.17 18.7-9.42 26.87-2.77 14.26 11.56 25.88 26.2 33.8 42.84 7.67 16.11 11.97 34.14 11.97 53.12 0 34.14-13.85 65.06-36.21 87.42l-1.17 1.08c-22.31 21.74-52.77 35.13-86.26 35.13-34.06 0-64.99-13.86-87.38-36.26-22.41-22.31-36.26-53.23-36.26-87.37 0-18.89 4.29-36.86 11.94-52.97 7.93-16.69 19.53-31.36 33.71-42.9 8.17-6.65 20.22-5.4 26.86 2.77 6.65 8.18 5.4 20.22-2.77 26.87-9.76 7.95-17.76 18.06-23.22 29.57-5.25 11.04-8.2 23.49-8.2 36.66 0 23.56 9.57 44.89 24.99 60.32 15.38 15.47 36.72 24.99 60.33 24.99 23.16 0 44.13-9.18 59.44-24.05l.89-.94c15.42-15.43 24.99-36.76 24.99-60.32 0-13.15-2.96-25.59-8.23-36.66a85.591 85.591 0 0 0-23.31-29.66zm102.97-89.65C372.64 59.15 317.21 34.33 256 34.33c-61.21 0-116.64 24.82-156.75 64.92-40.1 40.11-64.92 95.54-64.92 156.75 0 61.21 24.82 116.63 64.92 156.74 40.11 40.1 95.54 64.92 156.75 64.92 61.21 0 116.64-24.82 156.75-64.92 40.1-40.11 64.92-95.53 64.92-156.74 0-61.21-24.82-116.64-64.92-156.75z"
            />
          </svg>
        </div>
      </div>

      <div className="flex pl-3">
        <div className="flex justify-center">
          <button
            className="block text-white bg-violet-500 focus:outline-none hover:outline-violet-200 outline font-medium rounded-lg text-sm flex items-center px-5 py-3 "
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
