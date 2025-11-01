import HomeHero from "@/components/pages/findARoom/HomeHero";
import Locations from "@/components/pages/findARoom/Locations";
import MainComponent from "@/components/pages/findARoom/MainComponent";
import Container from "@/components/ui/Container";
import React from "react";

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

function page() {

	return (
		<MainComponent>

			<HomeHero />
			<Locations data={data} />
	
		</MainComponent>
	)
}

export default page;
