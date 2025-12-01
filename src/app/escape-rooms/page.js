import HomeHero from "@/components/pages/findARoom/HomeHero";
import Locations from "@/components/pages/findARoom/Locations";
import MainComponent from "@/components/pages/findARoom/MainComponent";
import Container from "@/components/ui/Container";
import React from "react";
import qs from "qs";
import { buildMetadataFromSeo, getData } from "@/services/helper";
import StructureData from "@/components/global/StructureData";

export const revalidate = 60;

export async function generateMetadata() {
	return buildMetadataFromSeo("/api/directory-home");
}

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

	// fetch heroData

	const queryHero = qs.stringify(
		{
			populate: {
				image: true,
				cta: {
					populate: ["icon"],
				},
				search_page: true,
				seo: {
					fields: ["structuredData"],
				},
			},
		},
		{ encodeValuesOnly: true }
	);

	const urlHome = `${process.env.NEXT_PUBLIC_API_URL}/api/directory-home?${queryHero}`;

	const newData = await getData(urlHome, "directory home hero");

	const seo = newData?.data?.seo;

	return (
		<>
			{seo &&
				seo.structuredData?.map((item, i) => {
					return <StructureData data={item} key={i} />;
				})}
			<MainComponent data={data} newData={newData?.data?.search_page}>
				<HomeHero data={newData?.data} image={newData?.data?.image} />
				<Locations data={data} />
			</MainComponent>
		</>
	);
}

export default page;
