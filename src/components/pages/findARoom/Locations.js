import React from "react";
import LocationCard from "./LocationCard";
import Container from "@/components/ui/Container";
import LocationSection from "./LocationSection";

function Locations({ data }) {
	
	return (
		<div className="bg-tertiary-500 py-[100px] lg:py-[200px]  space-y-[80px]">
			{data?.map((item, i) => (
				<LocationSection key={i} item={item} />
			))}
		</div>
	);
}

export default Locations;
