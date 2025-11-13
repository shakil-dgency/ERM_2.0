"use client";
import Container from "@/components/ui/Container";
import React, { useState } from "react";
import LocationCard from "./LocationCard";
import { TiArrowSortedDown } from "react-icons/ti";

function LocationSection({ item }) {
	const [visibleCount, setVisibleCount] = useState(8);
	const [loading, setLoading] = useState(false);

	const handleLoadMore = () => {
		setLoading(true);
		setTimeout(() => {
			setVisibleCount((prev) => prev + 4);
			setLoading(false);
		}, 700);
	};

	const handleLoadLess = () => {
		setVisibleCount(8);
	};

	const citiesToShow = item?.city_names?.slice(0, visibleCount);
	const hasMore = visibleCount < item?.city_names?.length;
    const hasLess = item?.city_names?.length > 8 && visibleCount >= item?.city_names?.length;

	return (
		<Container>
			<div className="max-w-[793px] pb-[30px] md:pb-[50px]">
				<p className="highlighted_text">Escape rooms</p>
				<p className="text-[24px] md:text-[36px] text-neutral-950 font-[700]">{item?.country_name}</p>
				<p className="text-[16px] md:text-[18px] text-neutral-700 font-[400]">{item?.description}</p>
			</div>

			<div>
				<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-5 items-stretch relative">
					{citiesToShow.map((city, i) => (
						<LocationCard key={i} city={city} />
					))}
					{/* <div className="absolute z-10 bottom-0 w-full h-[250px] bg-[linear-gradient(180deg,rgba(255,247,225,0)_0.07%,rgba(255,247,225,0.9)_46.64%,#FFF7E1_99.93%)]"></div> */}
				</div>
				{item?.city_names?.length > 8 && (
					<div className="mt-[40px] flex justify-center">
						{hasMore ? (
							<button
								onClick={handleLoadMore}
								className="flex items-center gap-1.5 px-[20px] py-[12px] font-[600] rounded-[6px] border-[1px] border-primary-600 text-primary-500 hover:text-neutral-50 hover:bg-primary-600 duration-300"
							>
								{loading ? "Loading..." : "See More"}
								<TiArrowSortedDown className="mt-[2px]" />
							</button>
						) : hasLess ? (
							<button
								onClick={handleLoadLess}
								className="flex items-center gap-1.5 px-[20px] py-[12px] font-[600] rounded-[6px] border-[1px] border-primary-600 text-primary-500 hover:text-neutral-50 hover:bg-primary-600 duration-300"
							>
								See Less
								<TiArrowSortedDown className="mt-[2px] rotate-180" />
							</button>
						) : null}
					</div>
				)}
				
			</div>
		</Container>
	);
}

export default LocationSection;
