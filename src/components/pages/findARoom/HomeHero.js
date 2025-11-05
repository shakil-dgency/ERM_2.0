"use client";
import React, { useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useDispatch } from "react-redux";
import { setToggle } from "@/lib/features/toggleSlice";

function HomeHero({ location , cityName }) {
	const dispatch = useDispatch();
	const pathname = usePathname();

	const handleLocation = () => dispatch(setToggle(true));

	useEffect(() => {
		dispatch(setToggle(false));
	}, [pathname, dispatch]);

	return (
		<div className=" pb-4 bg-secondary-950">
			{/* <div className="break_line image bg-[url('/breakline_white.svg')] h-[80px] w-full bg-[length:2500px_90px] absolute z-10 -mt-1 bg-center rotate-180 "></div> */}
			<div className=" bg-[url('/destinations/destination_hero.png')]  text-center ">
				<div className="px-2.5 pt-14 md:pt-20 pb-20 md:pb-28">
					<div className="pt-10 md:pt-20 pb-2 ">
						<p className="highlighted_text">90% of our clients hit their Q1 goals</p>
						<h1 className="text-[24px] md:text-[54px] font-[700] text-[#fff_!important] max-w-[1127px] mx-auto">Top Escape Room Destinations Worldwide</h1>
						<p className="text-[16px] text-neutral-300 max-w-[840px] mx-auto pt-2.5">
							Explore thrilling escape rooms from around the globe! We’ve been connecting adventurers with the most exciting and immersive
							experiences, helping you unlock the fun and challenge of escape games.
						</p>
					</div>

					<div
						onClick={handleLocation}
						className="max-w-[420px] mx-auto mt-[40px] cursor-pointer border-[2px] border-[#FF492C] rounded-full bg-[#fff] py-2 px-5"
					>
						<div className="flex items-center justify-between w-full">
							<div className="flex items-center gap-2">
								<IoLocationSharp className="text-[18px]" />
								<span className="text-[16px] md:text-[20px] font-[700]">{cityName? cityName : "FIND YOUR LOCATION"}</span>
							</div>
							<FaChevronDown />
						</div>
					</div>
				</div>
			</div>

			{!location && (
				<div className="max-w-[1024px] mx-2.5 lg:mx-auto mt-8 bg-secondary-800 px-[14px] py-[16px] shadow-md rounded-md relative z-30 flex flex-row justify-around  -mb-[60px]">
					<div className="flex flex-col md:flex-row md:gap-4 items-center justify-center w-full border-r-[1px] border-secondary-500">
						<Image src={"/pages/findRooms/cities.svg"} height={50} width={50} alt="" className="h-[20px] md:h-[50px] w-auto" />
						<div>
							<p className="text-neutral-50 text-center text-[20px] md:text-[36px] font-[700]">100</p>
							<p className="text-[14px] md:text-[16px] text-center text-neutral-300">Cities</p>
						</div>
					</div>
					{/* <Image src={"/contactus/Line.svg"} height={50} width={50} alt="" className="w-[30px] rotate-90 lg:rotate-0 self-center" /> */}
					<div className="flex flex-col md:flex-row md:gap-4 items-center justify-center w-full border-r-[1px] border-secondary-500">
						<Image src={"/pages/findRooms/companies.svg"} height={50} width={50} alt="" className="h-[20px] md:h-[50px] w-auto" />
						<div>
							<p className="text-neutral-50 text-center text-[20px] md:text-[36px] font-[700]">500</p>
							<p className="text-[14px] md:text-[16px] text-center text-neutral-300">COMPANIES</p>
						</div>
					</div>
					{/* <Image src={"/contactus/Line.svg"} height={50} width={50} alt="" className=" w-[30px] rotate-90 lg:rotate-0 self-center" /> */}
					<div className="flex flex-col md:flex-row md:gap-4 items-center justify-center w-full ">
						<Image src={"/pages/findRooms/games.svg"} height={50} width={50} alt="" className="h-[20px] md:h-[50px] w-auto" />
						<div>
							<p className="text-neutral-50 text-center text-[20px] md:text-[36px] font-[700]">2000</p>
							<p className="text-[14px] md:text-[16px] text-center text-neutral-300">GAMES</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default HomeHero;
