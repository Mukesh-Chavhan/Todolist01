"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const [counter, setcounter] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
    if(title!="")
    setmainTask((prevlist) => [...prevlist, title]);
    settitle("");
  };

  return (
    <>
      <h1 className="h-10 text-2xl p-6 my-2 mx-8">
        {" "} 
        Add <span className="text-blue-500 ">Task</span>
      </h1>
      
        <input
          placeholder="Enter you task "
          type="text"
          className=" rounded mx-8  ml-12 bg-slate-100 mt-4 p-2 w-1/5 "
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <button type="button" onClick={submitHandler} className="bg-blue-400 w-14 rounded  p-2">+</button>
 
        {
          mainTask.map((item, i) => {
            console.log(item)
            return (<div className="w-3/4 h-12 bg-slate-200 text-black rounded-2xl flex items-center justify-start m-2 pl-2">
              <h1 className="pl-2"> {item} </h1>
            </div>)
          })
        }

    </>
  );
};

export default page;


