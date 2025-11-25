/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

function GameCard({ data }) {
	
	return (
		<div className="group rounded-[10px] bg-secondary-900 overflow-hidden h-full pb-7">
			<div className="relative overflow-hidden">
				<Image
					src={data?.image ? process.env.NEXT_PUBLIC_API_URL + data.image.url : "/pages/findRooms/miami.png"}
					height={300}
					width={392}
					alt=""
					className="h-[300px] w-full object-cover object-center group-hover:scale-105 duration-500"
				/>
				<div className="w-full h-[100px] absolute bottom-0 bg-gradient-to-b to-secondary-900 from-transparent"></div>
			</div>
			<div className="px-2.5 xs:px-6 mt-4 flex justify-between">
				<div className="flex items-center gap-1.5">
					<Image src="/pages/findRooms/location/age_icon.svg" height={15} width={15} alt="" />
					<p className="text-[12px] text-neutral-500 font-[600]">Age: {data?.age}</p>
				</div>
				<div className="flex items-center gap-1.5">
					<Image src="/pages/findRooms/location/time_icon.svg" height={15} width={15} alt="" />
					<p className="text-[12px] text-neutral-500 font-[600]">Time: {data?.time}</p>
				</div>
				<div className="flex items-center gap-1.5">
					<Image src="/pages/findRooms/location/team_icon.svg" height={15} width={15} alt="" />
					<p className="text-[12px] text-neutral-500 font-[600]">Team: {data?.team}</p>
				</div>
			</div>
			<div className="px-[15px] mt-4 flex-grow">
				<p className="text-[20px] text-neutral-50 font-[600] text-center uppercase">{data?.game_name}</p>
				<p className="text-[14px] text-neutral-300 font-[400] text-center pt-1.5">
					{data?.game_description.slice(0, 150)}
					{data?.game_description.length > 150 ? "..." : ""}
				</p>
			</div>
		</div>
	);
}

export default GameCard;
