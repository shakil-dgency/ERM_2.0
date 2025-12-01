"use client";
import Container from "@/components/ui/Container";
import React, { useState } from "react";
import LocationCard from "./LocationCard";
import { TiArrowSortedDown } from "react-icons/ti";
import { InfinitySpin } from "react-loader-spinner";
import StrokeButton from "@/components/ui/buttons/StrokeButton";

function LocationSection({ item }) {
	const [visibleCount, setVisibleCount] = useState(8);
	const [loading, setLoading] = useState(false);

	const handleLoadMore = () => {
		setLoading(true);
		setTimeout(() => {
			setVisibleCount((prev) => prev + 8);
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
				<p className="highlighted_text mb-3">Escape rooms</p>
				<p className="text-[24px] md:text-[36px] text-neutral-950 font-[700] mb-1">{item?.country_name}</p>
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
							<>
								{loading ? (
									<div className="flex justify-center ">
										<InfinitySpin width="200" color="#FF492C" />
									</div>
								) : (
									<div className="flex justify-center mt-4">
										<StrokeButton medium={true} text="Load More" handleClick={handleLoadMore} text_light={false} />
									</div>
								)}
							</>
						) : hasLess ? (
							<div className="flex justify-center mt-4">
								<StrokeButton medium={true} text="See Less" handleClick={handleLoadLess} text_light={false} />
							</div>
						) : null}
					</div>
				)}
			</div>
		</Container>
	);
}

export default LocationSection;
