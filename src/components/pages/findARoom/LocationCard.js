import Image from "next/image";
import React from "react";

function LocationCard({city}) {
	return (
		<div className=" aspect-[378/372] rounded-lg ">
			<Image src={`${city.image}`} height={300} width={392} alt="miami" className="h-full w-full object-cover rounded-t-lg" />
			<div className="bg-secondary-800 px-2.5 xs:px-[15px] pt-2.5 xs:pt-5 pb-4 rounded-b-lg">
				<p className="text-[16px] xs:text-[20px] md:text-[24px] text-neutral-50 font-[700]">{city.city_name}</p>
				<p className="text-[10px] xs:text-[13px] md:text-[16px] text-neutral-300 font-[400]">{city.company}|{city.games}</p>
			</div>
		</div>
	);
}

export default LocationCard;
