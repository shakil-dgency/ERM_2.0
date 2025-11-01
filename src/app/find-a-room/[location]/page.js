/* eslint-disable react/no-unescaped-entities */
import HomeHero from "@/components/pages/findARoom/HomeHero";
import CompanyProfileCard from "@/components/pages/findARoom/Location/CompanyProfileCard";
import LocationCard from "@/components/pages/findARoom/LocationCard";
import MainComponent from "@/components/pages/findARoom/MainComponent";
import PopupLocationForm from "@/components/pages/findARoom/PopupLocationForm";
import Container from "@/components/ui/Container";
import React from "react";

const cities = [
	{ city_name: "Los Angeles", image: "/pages/findRooms/miami.png", company: "103 companies", games: "335 games" },
	{ city_name: "Los Angeles", image: "/pages/findRooms/miami.png", company: "103 companies", games: "335 games" },

	{ city_name: "Los Angeles", image: "/pages/findRooms/miami.png", company: "103 companies", games: "335 games" },

	{ city_name: "Los Angeles", image: "/pages/findRooms/miami.png", company: "103 companies", games: "335 games" },
];

function page() {

	return (
		<MainComponent>
			<HomeHero location={true} />
			<div className="bg-tertiary-500 pt-[80px] pb-[150px]">
				<Container>
					<div className="max-w-[970px] mb-[60px]">
						<p className="text-[16px] text-neutral-700 italic">
							Most of our facilities offer 8 - 10 different types of escape room themes. The game themes range from Black Ops and Zombie Apocalypse to
							Escape from Alcatraz and Super Hero. Pick the room of your choice or try your best to break out of them all.
						</p>
						<p className="text-[16px] text-neutral-700 italic mt-5">Last Updated: 15July, 20</p>
					</div>
					<div className="space-y-[30px] lg:space-y-[60px]">
						{[...Array(3)].map((_, i) => (
							<CompanyProfileCard key={i} />
						))}
					</div>

					<div className="max-w-[970px] mt-[100px] lg:mt-[140px] ">
						<h2>Explore More Cities</h2>
						<p className="text-[16px] sm:text-[18px] text-neutral-700 mt-4">
							Most of our facilities offer 8 - 10 different types of escape room themes. The game themes range from Black Ops and Zombie Apocalypse to
							Escape from Alcatraz and Super Hero. Pick the room of your choice or try your best to break out of them all.
						</p>
						<p className="text-[16px] sm:text-[18px] text-neutral-700  mt-5">
							Escape rooms have become super popular over the last couple of years. We've built all our facilities perfect for all ages and skill
							levels. People from all different ages and backgrounds have found themselves enjoying the thrill and challenge of trying to escape one
							or more of our rooms.Most of our facilities offer 8 - 10 different types of escape room themes. The game themes range from Black Ops and
							Zombie Apocalypse to Escape from Alcatraz and Super Hero. Pick the room of your choice or try your best to break out of them all.
						</p>
					</div>
					<div className="max-w-[970px] mt-[100px] lg:mt-[140px] ">
						<h2>Explore More Cities</h2>
						<p className="text-[16px] sm:text-[18px] text-neutral-700 mt-4">
							We know you’re in the industry of Internet Software & Services,have around 11-50 employees, and who your competitors are.
						</p>
					</div>
					<div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5 xs:gap-2.5 md:gap-[24px] mt-10">
						{cities.map((item, i) => (
							<LocationCard key={i} city={item} />
						))}
					</div>
				</Container>
			</div>
		</MainComponent>
	);
}

export default page;
