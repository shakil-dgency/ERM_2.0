import HomeHero from "@/components/pages/findARoom/HomeHero";
import Locations from "@/components/pages/findARoom/Locations";
import MainComponent from "@/components/pages/findARoom/MainComponent";
import Container from "@/components/ui/Container";
import React from "react";
import qs from "qs";
import { getData } from "@/services/helper";


async function page() {
	const query = qs.stringify(
		{
			populate: {
				city_names: {
					populate: {
						city_image: true,
						fields: ["city_name", "slug"],
						companies: {
							populate: {
								games: {
									populate: {
										fields: ["game_name"],
									},
								},
								fields: ["company_name"],
							},
						},
					},
				},
			},
		},
		{ encodeValuesOnly: true }
	);

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/countries?${query}`;

	const { data } = await getData(url, "directory home");
	console.log(data);

	return (
		<MainComponent data={data}>
			<HomeHero />
			<Locations data={data} />
		</MainComponent>
	);
}

export default page;
