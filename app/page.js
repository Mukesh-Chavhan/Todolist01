/*
"use client";
import React, { useState } from "react";

const page = () => {
	const [title, settitle] = useState("");
	const [mainTask, setmainTask] = useState([]);
	const [counter, setcounter] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		if (title != "") setmainTask((prevlist) => [...prevlist, title]);
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

			<button
				type="button"
				onClick={submitHandler}
				className="bg-blue-400 w-14 rounded  p-2"
			>
				+
			</button>

			{mainTask.map((item, i) => {
				console.log(item);
				return (
					<div className=" ml-11 w-3/4 h-12 bg-slate-100 text-black rounded-2xl flex items-center justify-start m-2 pl-2  hover:bg-slate-200">
						<h1 className="pl-4"> {item} </h1>
					</div>
				);
			})}
		</>
	);
};

export default page;
*/

"use client";
// Import the necessary modules and components
import React, { useState } from "react";

const Page = () => {
	const [title, setTitle] = useState("");
	const [mainTask, setMainTask] = useState([]);
	const [editIndex, setEditIndex] = useState(null);

	const submitHandler = (e) => {
		e.preventDefault();
		if (title !== "") {
			if (editIndex !== null) {
				// Edit existing task
				const updatedTasks = [...mainTask];
				updatedTasks[editIndex] = title;
				setMainTask(updatedTasks);
				setEditIndex(null);
			} else {
				// Add new task
				setMainTask((prevList) => [...prevList, title]);
			}

			setTitle("");
		}
	};

	const handleEdit = (index) => {
		// Set the title for editing
		setTitle(mainTask[index]);
		setEditIndex(index);
	};

	const handleDelete = (index) => {
		// Delete task at the specified index
		const updatedTasks = [...mainTask];
		updatedTasks.splice(index, 1);
		setMainTask(updatedTasks);
		setEditIndex(null);
	};

	return (
		<>
			<h1 className="h-10 text-2xl p-6 my-2 mx-8">
				Add <span className="text-blue-500">Task</span>
			</h1>

			<input
				placeholder="Enter your task"
				type="text"
				className="rounded mx-8 ml-12 bg-slate-100 mt-4 p-2 w-1/5"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>

			<button
				type="button"
				onClick={submitHandler}
				className="bg-blue-400 w-20 rounded p-2"
			>
				{editIndex !== null ? "Update" : "+"}
			</button>

			{mainTask.map((item, i) => (
				<div
					key={i}
					className="ml-11 w-3/4 h-12 bg-slate-100 text-black rounded-2xl flex items-center justify-start m-2 pl-2 hover:bg-slate-200"
				>
					<h1 className="pl-4">{item}</h1>
					<button className="ml-auto p-2" onClick={() => handleEdit(i)}>
						Edit
					</button>
					<button className="ml-2 p-2" onClick={() => handleDelete(i)}>
						Delete
					</button>
				</div>
			))}
		</>
	);
};

export default Page;
