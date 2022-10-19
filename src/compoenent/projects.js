import React from "react";
import { ProjectsList } from "../utility/utils";

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
  return (
    <>
      <h1 className="text-center pt-14 text-3xl">All Projects</h1>
      <div className="flex items-center justify-center">
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
    </>
  );
};

export default Projects;
