/* eslint-disable jsx-a11y/alt-text */
import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./navbar";

function App() {
  const [checked, setChecked] = useState([]);
  const checkList = ["Apple", "Banana", "Tea", "Coffee"];

  const handleCheck = useCallback(
    (event) => {
      var updatedList = [...checked];
      if (event.target.checked) {
        updatedList = [event.target.value];
      } else {
        updatedList.splice(checked.indexOf(event.target.value), 1);
      }
      setChecked(updatedList);
    },
    [checked]
  );
  useEffect(() => {
    const selectedData = checkList.filter((items) => items === "Apple");
    setChecked(selectedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      {checkList.map((item, index) => (
        <div key={index}>
          <input
            value={item}
            checked={item === checked[0] ? true : false}
            type="checkbox"
            onChange={handleCheck}
          />
          <span>{item}</span>
        </div>
      ))}
      <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3 animate-bounce m-6 sm:flex sm:mx-auto rounded-md">
        button
      </button>
      <div className="p-6 max-w-sm md:mx-auto bg-white rounded-xl shadow-lg flex items-center justify-center space-x-8 m-6">
        <div className="shrink-0">
          {/* <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" /> */}
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm m-6 sm:mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 px-8 max-w-sm m-6 sm:mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 border-2 border-slate-900 hover:scale-125 hover:rotate-[360deg] duration-150"
          src="/profile.png"
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Erin Lindford</p>
            <p className="text-slate-500 font-medium">Product Engineer</p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
      <a
        href="#"
        className="group mt-4 block max-w-xs md:mx-auto m-6 rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
      >
        <div className="flex items-center space-x-3">
          <svg
            className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
            fill="none"
            viewBox="0 0 24 24"
          ></svg>
          <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
            New project
          </h3>
        </div>
        <p className="text-slate-500 group-hover:text-white text-sm">
          Create a new project from a variety of starting templates.
        </p>
        <label>
          <input type="checkbox" class="accent-pink-500" checked /> Customized
        </label>
        <br />
        <select class="appearance-none p-2 w-20 text-center outline-none rounded-sm">
          <option>Yes</option>
          <option>No</option>
          <option>Maybe</option>
        </select>
      </a>
      <div className="md:columns-2 columns-1 m-6 bg-[#7FB4D3]  text-teal-900 rounded-md p-5 text-center">
        <p>Well, let me tell you something, ...</p>
        <p className="md:break-after-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>
      <blockquote className="text-xl font-semibold italic text-center text-slate-900 mt-10 p-2">
        When you look
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-pink-500 relative inline-block ml-2 mr-2">
          <span className="relative text-white">annoyed</span>
        </span>
        all the time, people think that you're busy.
      </blockquote>
      <button className="py-8 px-8 m-6 sm:max-w-xs sm:mx-auto outline-none rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
        Save Changes
      </button>
      <button
        type="button"
        class="bg-indigo-500 px-4 py-2 text-white sm:px-8 sm:py-3 m-6 sm:flex sm:mx-auto rounded-md"
        disabled
      >
        <svg
          className="animate-spin h-5 w-5 mr-3 color-whtie"
          viewBox="0 0 24 24"
        ></svg>
        Processing...
      </button>
      {/* <table className="border-collapse border border-slate-400 w-6/12 ml-80 text-center my-4">
        <thead>
          <tr>
            <th className="border border-slate-300 ...">State</th>
            <th className="border border-slate-300 ...">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 ...">Indiana</td>
            <td className="border border-slate-300 ...">Indianapolis</td>
          </tr>
          <tr>
            <td className="border border-slate-300 ...">Ohio</td>
            <td className="border border-slate-300 ...">Columbus</td>
          </tr>
          <tr>
            <td className="border border-slate-300 ...">Michigan</td>
            <td className="border border-slate-300 ...">Detroit</td>
          </tr>
        </tbody>
      </table> */}
      <div className="lg:columns-3 md:columns-2 columns-1">
        <img
          className="w-full rounded-3xl p-3 gap-lg border-1 overflow-hidden aspect-video brightness-50 contrast-50 hover:scale-105 duration-500 "
          src="https://images.unsplash.com/photo-1665492194981-83fea5352b20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
        <img
          className="w-full rounded-3xl p-3 gap-lg border-1 overflow-hidden hover:skew-y-3  duration-500 aspect-square"
          src="https://images.unsplash.com/photo-1665516533754-d98825ae07e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80"
        />
        <img
          className="w-full rounded-3xl p-3 gap-lg border-1  hover:skew-x-3 duration-500 aspect-square"
          src="https://images.unsplash.com/photo-1665548460518-f92c43544ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
        />
        <img
          className="w-full rounded-3xl p-3 gap-lg border-1 duration-500 aspect-square hover:scale-105 hover:origin-top-left"
          src="https://images.unsplash.com/photo-1665516533754-d98825ae07e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80"
        />
        <img
          className="w-full rounded-3xl p-3 gap-lg border-1 duration-500 aspect-square hover:scale-105 hover:origin-top-right"
          src="https://images.unsplash.com/photo-1665548460518-f92c43544ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
        />
        <img
          className="w-full rounded-3xl p-3 gap-lg border-1 hover:origin-bottom-left hover:scale-105 duration-500 aspect-video"
          src="https://images.unsplash.com/photo-1665492194981-83fea5352b20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
        <img
          className="w-full rounded-3xl p-3 gap-lg border-1 hover:origin-bottom-right hover:scale-105 duration-500 aspect-square"
          src="https://images.unsplash.com/photo-1665548460518-f92c43544ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
        />
        <img
          className="w-full rounded-3xl p-3 gap-lg border-1 hover:origin-right hover:scale-105 duration-500 aspect-video"
          src="https://images.unsplash.com/photo-1665492194981-83fea5352b20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
        <img
          className="w-full rounded-3xl p-2 gap-lg border-1 hover:origin-top hover:scale-50 duration-500 aspect-square"
          src="https://images.unsplash.com/photo-1665516533754-d98825ae07e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80"
        />
      </div>
    </>
  );
}

export default App;
