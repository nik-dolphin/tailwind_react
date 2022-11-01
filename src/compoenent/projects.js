import React, { useEffect, useState } from "react";
import { useModeStore } from "../store/mode/store";
import { ProjectsList } from "../utility/utils";
import { useDropzone } from "react-dropzone";

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
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} alt={file.name} />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div
      className={`${
        !toggleMode ? "bg-white" : "bg-black text-white"
      }`}
    >
      <div className="flex items-center justify-center p-12">
        <section>
          <div
            {...getRootProps({ className: "dropzone" })}
            className={`${
              toggleMode ? "border-white" : "border-black"
            } border-2  border-dashed w-full`}
          >
            <input {...getInputProps()} />
            <p className="p-3">
              Drag 'n' drop some files here, or click to select files
            </p>
          </div>
          <aside>{thumbs}</aside>
        </section>
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
