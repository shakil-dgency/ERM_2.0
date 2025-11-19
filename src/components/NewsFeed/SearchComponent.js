"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";

function SearchComponent({ search, setSearch, screen, setWantToSearch, toggle, wantToSearch, handleSearch }) {
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
		// searchBtn.addEventListener("click", handleClick);

		// Navbar OnScroll functionality

		var lastScrollTop = 0;

		window.addEventListener("scroll", function (e) {
			let scrollTop = window.scrollY || document.documentElement.scrollTop;

			if (scrollTop > lastScrollTop) {
				if (toggle === true) {
					console.log("working");
				} else {
					searchTxt.blur();
					setWantToSearch(false);
				}
			} else {
				console.log("up");
			}

			lastScrollTop = scrollTop;
		});
	});

	const handleClick = () => {
		if (wantToSearch === true) {
			searchTxtRef.current.blur();
		} else {
			searchTxtRef.current.focus();
		}
	};

	return (
		<div>
			<div className="flex w-full">
				<div className="relative w-full sm:w-[270px] md:w-[300px] md:ml-3 overflow-hidden">
					<div className={`${screen < 640 && wantToSearch ? "w-full md:w-auto" : "w-full"} `}>
						<input
							id="search"
							ref={searchTxtRef}
							type="text"
							// value={newValue}
							onChange={(e) => {
								setSearch(e.target.value);
							}}
							className={`w-full  font-[400] outline-none rounded-none px-2 py-[1px] ml-6 md:ml-0 border-b-[1px] border-b-[#aeaeae] bg-transparent duration-500 ${
								wantToSearch ? "translate-x-0" : " translate-x-[150%] sm:translate-x-0"
							}  `}
							placeholder="Search..."
						/>
						{/* <input id="search" type="text" className="outline-none border-b-[1px] border-b-[#aeaeae] rounded-none" /> */}
					</div>
				</div>
				<button
					onClick={handleSearch}
					id="search_btn"
					className={`${
						wantToSearch ? "" : ""
					} text-[#202020] sm:border-b-[1px] sm:border-[#aeaeae] -ml-7 sm:-ml-1  md:px-0 flex justify-center items-center relative z-10`}
				>
					<IoIosSearch onClick={handleClick} className="text-[24px] md:mr-1" />
				</button>
				{/* <p className="block md:hidden text-[13px] text-[#606060]  pt-2 md:pt-1">Lorem ipsum dolor sit amet.</p> */}
			</div>
		</div>
	);
}

export default SearchComponent;
