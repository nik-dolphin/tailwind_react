import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { ImageConfig } from "../config/imageConfig";

const DropFileInput = (props) => {
  const wrapperRef = useRef(null);
  const [dragInOut, setDragInOut] = useState(false);
  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => setDragInOut(true);

  const onDragLeave = () => setDragInOut(false);

  const onDrop = () => setDragInOut(false);

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        <div
          ref={wrapperRef}
          className={`${dragInOut && "opacity-60"} hover:opacity-60 relative sm:w-[400px] h-[200px] border-2 border-dashed border-[#4267b2] rounded-[20px] flex items-center justify-center bg-slate-200`}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className="text-center text-[#ccc] font-semibold p-3 flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
              />
            </svg>
            <p>Drag & Drop your files here</p>
          </div>
          <input
            type="file"
            value=""
            onChange={onFileDrop}
            className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
          />
        </div>
      </div>
      {fileList.length > 0 ? (
        <div className="mt-7">
          <p className="mb-[20px] font-medium text-center">
            Ready to upload
          </p>
          {fileList.map((item, index) => (
            <div
              key={index}
              className="relative flex mb-[10px] bg-slate-200 p-4 rounded-[20px] group"
            >
              <img className="w-[50px] mr-[20px]" src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
              <div className="flex flex-col justify-between">
                <p className="font-medium text-black">{item.name}</p>
                <p className="font-medium text-black">{item.size}B</p>
              </div>
              <span
                className="bg-slate-300 w-10 h-10 text-black rounded-full flex items-center justify-center absolute right-[10px] top-1/2 translate-y-[-50%] shadow-[rgba(149,157,165,0.2)_0px_8px_24px] cursor-pointer transition-opacity duration-[0.3s] ease-in-out opacity-0 group-hover:opacity-100"
                onClick={() => fileRemove(item)}
              >
                x
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
