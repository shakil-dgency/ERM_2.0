import HomeHero from "@/components/pages/findARoom/HomeHero";
import Locations from "@/components/pages/findARoom/Locations";
import MainComponent from "@/components/pages/findARoom/MainComponent";
import Container from "@/components/ui/Container";
import React from "react";
import qs from "qs";
import { getData } from "@/services/helper";

export const revalidate = 60;

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
	

	// fetch heroData

	const queryHero = qs.stringify(
		{
			populate: {
				cta:{
					populate: ["icon"],
				},
				search_page: true,
			},
		},
		{ encodeValuesOnly: true }
	);

	const urlHome = `${process.env.NEXT_PUBLIC_API_URL}/api/directory-home?${queryHero}`;

	const newData = await getData(urlHome, "directory home hero")
	

	return (
		<MainComponent data={data} newData={newData?.data?.search_page} >
			<HomeHero data={newData?.data} />
			<Locations data={data} />
		</MainComponent>
	);
}

export default page;
