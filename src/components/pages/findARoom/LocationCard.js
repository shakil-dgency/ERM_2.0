import Image from "next/image";
import Link from "next/link";
import React from "react";

function LocationCard({ city }) {
	const handleGamesCount = (companies) => {
		let count = 0;
		companies?.forEach((company) => {
			count += company.games.length;
		});
		return count;
	};
	return (
		<Link href={`/find-a-room/${city?.slug}`} className=" h-full w-full flex flex-col rounded-lg ">
			<Image
				src={`${city ? process.env.NEXT_PUBLIC_API_URL + city?.city_image?.url : "/pages/findRooms/miami.png"}`}
				height={300}
				width={392}
				alt="miami"
				className=" h-[200px] sm:h-[300px] w-full object-cover rounded-t-lg"
			/>
			<div className="bg-secondary-800 flex-1 flex flex-col justify-start px-2.5 xs:px-[15px] pt-2.5 xs:pt-5 pb-4 rounded-b-lg">
				<p className="text-[16px] xs:text-[20px] md:text-[24px] text-neutral-50 font-[700]">{city?.city_name}</p>
				<p className="text-[13px] md:text-[16px] text-neutral-300 font-[400] pt-1">
					{city?.companies.length} Companies | {handleGamesCount(city?.companies)} Games
				</p>
			</div>
		</Link>
	);
}

export default LocationCard;
