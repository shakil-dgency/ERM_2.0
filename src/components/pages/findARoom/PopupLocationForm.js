"use client";
import Container from "@/components/ui/Container";
import React, { useState } from "react";

const data = [
	{
		country_name: "United States",
		description:
			"Discover the ultimate escape room experiences in the top cities across the United States! Each city offers unique themes and challenges that will test your problem-solving skills and teamwork.",
		cities: [
			{ city_name: "Los Angeles", image: "/pages/findRooms/miami.png", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "/pages/findRooms/miami.png", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "/pages/findRooms/miami.png", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "/pages/findRooms/miami.png", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
		],
	},
	{
		country_name: "United Kingdom",
		description:
			"Discover the ultimate escape room experiences in the top cities across the United States! Each city offers unique themes and challenges that will test your problem-solving skills and teamwork.",
		cities: [
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
		],
	},
	{
		country_name: "Australia",
		description:
			"Discover the ultimate escape room experiences in the top cities across the United States! Each city offers unique themes and challenges that will test your problem-solving skills and teamwork.",
		cities: [
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
			{ city_name: "Los Angeles", image: "", company: "103 companies", games: "335 games" },
		],
	},
];

function PopupLocationForm() {
	const [countryId, setCountryId] = useState(0);

	const handleOpen = (index) => {
		setCountryId((prev) => (prev === index ? null : index));
	};

	return (
		<div className="w-full bg-secondary-900 pt-[100px] md:pt-[140px] pb-[150px]">
			<Container>
				<div className="">
					<p className="highlighted_text text-center">1,000+ cities</p>
					<h1 className="text-neutral-50 text-[24px] md:text-[54px] font-[700] text-center mb-[60px] md:mb-[80px]">Find your next adventure</h1>

					{data.map((item, i) => (
						<div key={i} className="pb-[30px] lg:pb-[80px]">
							<div onClick={() => handleOpen(i)} className="flex items-center gap-3">
								<p  className="text-neutral-50 text-[18px] md:text-[26px] font-[700] underline underline-offset-8">
									{item.country_name}
								</p>
								<svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none" className={`${countryId === i ?"":"rotate-180"} duration-300 mt-1 lg:hidden`}>
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
								{item.cities.map((city, j) => (
									<p className="hover:text-primary-500 text-[18px] text-neutral-200 cursor-pointer" key={j}>
										{city.city_name}
									</p>
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
