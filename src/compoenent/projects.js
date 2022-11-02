import React from "react";
import { useModeStore } from "../store/mode/store";
import { ProjectsList } from "../utility/utils";
import DropFileInput from "./dragdrop/dropFileInput";

const ProjectComponent = ({ items }) => {
  return (
    <a
      href={items?.url}
      target="_blank"
      className="group h-[86%] block m-3 rounded-lg p-6 bg-gradient-to-r from-cyan-500 to-blue-500 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
      rel="noreferrer"
    >
      <div className=" space-x-3">
        <h1 className="text-slate-900 text-lg font-semibold">{items?.title}</h1>
      </div>
      <p className="text-slate-900 text-sm">{items?.description}</p>
    </a>
  );
};

const Projects = () => {
  const toggleMode = useModeStore((state) => state.toggleMode);

  // const onFileChange = (files) => {
  //   console.log(files);
  // };

  return (
    <div className={`${!toggleMode ? "bg-white" : "bg-black text-white"}`}>
      <div className="bg-white p-[30px] rounded-[20px] shadow-[rgba(149,157,165,0.2)_0px_8px_24px]">
        <h2 className="mb-[30px] text-center">Drag and Drop Here OR Click to upload files</h2>
        <DropFileInput />
      </div>
      <h1 className="text-center pt-10 text-3xl pb-12">All Projects</h1>
      <div className="flex items-center justify-center pb-12">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-90% md:w-4/5">
          {ProjectsList.map((items, index) => {
            return (
              <div key={index}>
                <ProjectComponent items={items} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
