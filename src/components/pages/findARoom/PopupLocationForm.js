"use client";
import Container from "@/components/ui/Container";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToggle } from "@/lib/features/toggleSlice";
import { usePathname } from "next/navigation";

function PopupLocationForm({ data, newData }) {
	const [countryId, setCountryId] = useState(0);
	const dispatch = useDispatch();
	const pathname = usePathname();
	const toggle = useSelector((state) => state.toggle.toggle);

	const handleOpen = (index) => {
		setCountryId((prev) => (prev === index ? null : index));
	};

	useEffect(() => {
		if (toggle) {
			window.scrollTo({ top: 0 });
		}
	}, [toggle]);

	return (
		<div className="w-full bg-secondary-900 bg-[url('/pages/findRooms/locationFormBg.png')] bg-repeat bg-[length:1040px_1040px] pt-[140px] pb-[150px] ">
			<div
				onClick={() => dispatch(setToggle(false))}
				className="text-[26px] text-white absolute top-28 lg:top-32 right-2.5 lg:right-10 rounded-full border-[1px] border-white h-[30px] w-[30px] flex justify-center items-center rotate-45 hover:animate-spin hover:scale-110 duration-300 cursor-pointer"
			>
				+
			</div>
			<Container>
				<div className="">
					<p className="highlighted_text text-center">{newData?.eyebrow_headline}</p>
					<h1 className="text-neutral-50 text-[24px] md:text-[54px] font-[700] text-center mb-[60px] md:mb-[80px]">{newData?.headline}</h1>

					{data?.map((item, i) => (
						<div key={i} className="pb-[30px] lg:pb-[80px]">
							<div onClick={() => handleOpen(i)} className="flex items-center gap-3 cursor-pointer lg:cursor-auto">
								<p className="text-neutral-50 text-[18px] md:text-[26px] font-[700] underline underline-offset-8">{item.country_name}</p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="9"
									height="5"
									viewBox="0 0 9 5"
									fill="none"
									className={`${countryId === i ? "" : "rotate-180"} duration-300 mt-1 lg:hidden`}
								>
									<path
										d="M1.19509 4.29468L4.53699 4.29468L7.54632 4.29468C8.06129 4.29468 8.31877 3.67243 7.954 3.30766L5.17533 0.529001C4.7301 0.0837714 4.00593 0.0837713 3.5607 0.529L2.50396 1.58575L0.782045 3.30766C0.422644 3.67243 0.680126 4.29468 1.19509 4.29468Z"
										fill="white"
									/>
								</svg>
							</div>
							<div
								className={`${
									countryId === i ? "h-full pt-[20px]" : "h-0 lg:h-full"
								} overflow-hidden lg:pt-[20px] grid grid-cols-1 lg:grid-cols-5 gap-y-[15px] gap-x-5 lg:gap-x-[100px]`}
							>
								{item?.city_names?.map((city, j) => (
									<Link
										href={`/find-a-room/${city?.slug}`}
										onClick={() => dispatch(setToggle(false))}
										className={`${
											city?.slug === pathname.split("/").pop() ? "text-primary-500" : "text-neutral-200"
										} hover:text-primary-500 text-[18px] text-neutral-200 cursor-pointer`}
										key={j}
									>
										{city.city_name}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
}

export default PopupLocationForm;
