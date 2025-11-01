/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

function GameCard() {
	return (
		<div className="max-w-auto rounded-[10px] bg-secondary-900 overflow-hidden">
			<div className="relative">
				<Image src={"/pages/findRooms/location/game_img.png"} height={300} width={392} alt="miami" className="h-[300px] w-full object-cover" />
				<div className="w-full h-full absolute top-0 bg-gradient-to-b to-secondary-900 from-transparent"></div>
			</div>
			<div className=" pb-7">
				<div className="flex justify-between px-1.5">
					<div className="flex items-center gap-1.5">
						<Image src={"/pages/findRooms/location/age_icon.svg"} height={15} width={15} alt="miami" className="h-[13px] xs:h-[15px] w-auto" />
						<p className="text-[12px] xs:text-[14px] text-primary-200 font-[600]">Age: 16+</p>
					</div>
					<div className="flex items-center gap-1.5">
						<Image src={"/pages/findRooms/location/time_icon.svg"} height={15} width={15} alt="miami" className="h-[13px] xs:h-[15px] w-auto" />
						<p className="text-[12px] xs:text-[14px] text-primary-200 font-[600]">Time: 60 Min</p>
					</div>
					<div className="flex items-center gap-1.5">
						<Image src={"/pages/findRooms/location/team_icon.svg"} height={15} width={15} alt="miami" className="h-[13px] xs:h-[15px] w-auto" />
						<p className="text-[12px] xs:text-[14px] text-primary-200 font-[600]">Team: 2-10</p>
					</div>
				</div>
				<div className="px-[15px] mt-4">
					<p className="text-[20px] text-neutral-50 font-[600] text-center">Escape From Alcatraz</p>
					<p className="text-[14px] text-neutral-300 font-[400] text-center pt-1.5">
						You've been captured by a notorious gang of pirates. Prove that you're worthy of becoming part of the crew or prepare to walk the plank!
					</p>
				</div>
			</div>
		</div>
	);
}

export default GameCard;
