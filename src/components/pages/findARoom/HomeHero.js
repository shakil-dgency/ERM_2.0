"use client";
import React, { useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useDispatch } from "react-redux";
import { setToggle } from "@/lib/features/toggleSlice";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";
import { MdOutlineArrowDropDown } from "react-icons/md";

function HomeHero({ location, cityName, data, image }) {
	const dispatch = useDispatch();
	const pathname = usePathname();

	const handleLocation = () => dispatch(setToggle(true));

	useEffect(() => {
		dispatch(setToggle(false));
	}, [pathname, dispatch]);

	return (
		<div className="bg-secondary-950">
			{/* <div className="break_line image bg-[url('/breakline_white.svg')] h-[80px] w-full bg-[length:2500px_90px] absolute z-10 -mt-1 bg-center rotate-180 "></div> */}
			<div
				style={{
					backgroundImage: image
						? `linear-gradient(0deg, rgba(8, 11, 15, 0.80) 0%, rgba(8, 11, 15, 0.80) 100%), url(${process.env.NEXT_PUBLIC_API_URL + image.url})`
						: "linear-gradient(0deg, rgba(8, 11, 15, 0.80) 0%, rgba(8, 11, 15, 0.80) 100%)",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
				className="text-center"
			>
				<Container>
					<div className=" pt-14 md:pt-20 pb-20 md:pb-28">
						{location && (
							<div className=" flex">
								<Link
									// onClick={backToPreviousPage}
									href="/find-a-room"
									className="group text-neutral-500 hover:text-primary-500 text-center  font-semibold text-[12px] md:text-[14px] flex items-center underline underline-offset-4 "
								>
									<MdOutlineArrowDropDown className="text-xl rotate-90 group-hover:translate-x-[-2px] duration-300" /> BACK TO ALL LOCATION
								</Link>
							</div>
						)}
						<div className="pt-10 md:pt-24 pb-2 ">
							<p className="highlighted_text">{data?.eyebrow_headline}</p>
							<h1 className="text-[24px] md:text-[54px] font-[700] text-[#fff_!important] max-w-[1127px] mx-auto">{data?.headline}</h1>
							<p className="text-[16px] md:text-[20px] text-neutral-300 max-w-[840px] mx-auto pt-2.5">{data?.description}</p>
						</div>

						<div
							onClick={handleLocation}
							className="max-w-[420px] mx-auto mt-[40px] cursor-pointer border-[2px] border-[#FF492C] rounded-full bg-[#fff] py-2 px-5"
						>
							<div className="flex items-center justify-between w-full">
								<div className="flex items-center gap-2">
									<IoLocationSharp className="text-[18px]" />
									<span className="text-[16px] md:text-[20px] font-[700]">{cityName ? cityName : "FIND YOUR LOCATION"}</span>
								</div>
								<FaChevronDown />
							</div>
						</div>
					</div>
				</Container>
			</div>

			{!location && (
				<div className="max-w-[1024px] mx-2.5 lg:mx-auto mt-8 bg-secondary-800 px-[14px] py-[16px] shadow-md rounded-md relative z-30 flex flex-row justify-around  -mb-[60px]">
					{data?.cta.map((item, i) => (
						<div key={i} className={`${i === data?.cta?.length-1 ? "":"border-r-[1px] border-secondary-500"} flex flex-col md:flex-row md:gap-4 items-center justify-center w-full `}>
							<Image
								src={item?.icon ? process.env.NEXT_PUBLIC_API_URL + item.icon.url : "/"}
								height={50}
								width={50}
								alt=""
								className="h-[30px] md:h-[50px] w-auto mb-1.5"
							/>
							<div>
								<p className="text-neutral-50 text-center text-[16px] md:text-[36px] font-[700]">{item?.stat}</p>
								<p className="text-[14px] md:text-[16px] text-center text-neutral-300">{item?.short_description}</p>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default HomeHero;
