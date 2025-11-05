import React from "react";
import LocationCard from "./LocationCard";
import Container from "@/components/ui/Container";

function Locations({ data }) {
	return (
		<div className="bg-tertiary-500 pt-[100px] lg:pt-[200px]">
			{data?.map((item, i) => (
				<Container key={i}>
					<div className="max-w-[793px] pb-[30px] md:pb-[50px]">
						<p className="highlighted_text">Escape rooms</p>
						<p className="text-[24px] md:text-[36px] text-neutral-950 font-[700]">{item?.country_name}</p>
						<p className="text-[16px] md:text-[18px] text-neutral-700 font-[400]">{item?.description}</p>
					</div>

					<div>
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-5 relative">
							{item?.city_names?.map((city, i) => (
								<LocationCard key={i} city={city} />
							))}
							{/* <div className="absolute z-10 bottom-0 w-full h-[250px] bg-[linear-gradient(180deg,rgba(255,247,225,0)_0.07%,rgba(255,247,225,0.9)_46.64%,#FFF7E1_99.93%)]"></div> */}
						</div>
						<div className="flex justify-center items-center mt-10 pb-20">
							<button className="text-[16px] text-[#FF492C] font-[700] px-5 py-1 border-[1px] border-[#FF492C] rounded-md">Load More</button>
						</div>
					</div>
				</Container>
			))}
		</div>
	);
}

export default Locations;
