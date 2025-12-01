"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";

function SearchComponent({ search, setSearch, screen, toggle, handleSearch }) {
	const searchTxtRef = useRef(null);
	useEffect(() => {
		const searchTxt = document.querySelector("#search");
		// const searchBtn = document.querySelector("#search_btn");

		const handleEnterKeyPress = (e) => {
			// console.log(e.key);
			if (e.key === "Enter") {
				e.preventDefault();
				searchTxt.blur();
			}
		};

		searchTxt.addEventListener("keydown", handleEnterKeyPress);
		
	});


	return (
		<div className="mb-[40px] sm:mb-0 sm:mr-2.5 ">
			<div className="flex w-full">
				<div className="relative w-[300px] md:w-[300px] md:ml-3 overflow-hidden">
					<div className={`w-full `}>
						<input
							id="search"
							ref={searchTxtRef}
							type="text"
							// value={newValue}
							onChange={(e) => {
								setSearch(e.target.value);
							}}
							className={`w-full  font-[400] outline-none rounded-none px-2 py-[1px] border-b-[1px] border-b-[#aeaeae] text-neutral-50 bg-transparent duration-500  `}
							placeholder="Search..."
						/>
						{/* <input id="search" type="text" className="outline-none border-b-[1px] border-b-[#aeaeae] rounded-none" /> */}
					</div>
				</div>
				<button
					onClick={handleSearch}
					id="search_btn"
					className={` text-[#202020] sm:border-b-[1px] sm:border-[#aeaeae] -ml-7 sm:-ml-1  md:px-0 flex justify-center items-center relative z-10`}
				>
					<IoIosSearch className="text-[24px] md:mr-1" />
				</button>
				{/* <p className="block md:hidden text-[13px] text-[#606060]  pt-2 md:pt-1">Lorem ipsum dolor sit amet.</p> */}
			</div>
		</div>
	);
}

export default SearchComponent;
