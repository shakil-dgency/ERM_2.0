/* eslint-disable react/no-unescaped-entities */
import HomeHero from "@/components/pages/findARoom/HomeHero";
import CompanyProfileCard from "@/components/pages/findARoom/Location/CompanyProfileCard";
import OtherCities from "@/components/pages/findARoom/Location/OtherCities";
import LocationCard from "@/components/pages/findARoom/LocationCard";
import MainComponent from "@/components/pages/findARoom/MainComponent";
import PopupLocationForm from "@/components/pages/findARoom/PopupLocationForm";
import Container from "@/components/ui/Container";
import { buildMetadataFromSeo, getData } from "@/services/helper";
import { notFound } from "next/navigation";
import React from "react";
import qs from "qs";
import StructureData from "@/components/global/StructureData";

export const revalidate = 60;

export async function generateMetadata({ params }) {
	const { location } = params;
	return buildMetadataFromSeo(`/api/city-names/${location}`);
}

async function page({ params }) {
	const { location } = params;
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/city-names/${location}`;

	const { data } = await getData(url, "Directory location page");

	if (!data) {
		return notFound();
	}

	const seo = data?.seo;

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

	const homeUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/countries?${query}`;

	const response = await getData(homeUrl, "directory home");

	// fetch heroData

	const queryHero = qs.stringify(
		{
			populate: {
				search_page: true,
			},
		},
		{ encodeValuesOnly: true }
	);

	const urlHome = `${process.env.NEXT_PUBLIC_API_URL}/api/directory-home?${queryHero}`;

	const newData = await getData(urlHome, "directory home hero");

	return (
		<>
			{seo &&
				seo.structuredData?.map((item, i) => {
					return <StructureData data={item} key={i} />;
				})}
			<MainComponent data={response?.data} newData={newData?.data?.search_page}>
				<HomeHero location={true} cityName={data?.city_name} data={data?.hero} image={data?.city_image} />
				<div className="bg-tertiary-500 pt-[80px] pb-[150px]">
					<Container>
						<div className="max-w-[970px] mb-[60px]">
							<div className="text-[16px] text-neutral-700 italic" dangerouslySetInnerHTML={{ __html: data ? data?.disclaimer : "" }} />
						</div>
						<div className="space-y-[30px] lg:space-y-[60px]">
							{data?.companies.map((company, i) => (
								<CompanyProfileCard key={i} data={company} />
							))}
						</div>

						<div className="max-w-[970px] mt-[100px] lg:mt-[140px] " dangerouslySetInnerHTML={{ __html: data ? data.about_location : "" }} />

						<OtherCities data={data} />
					</Container>
				</div>
			</MainComponent>
		</>
	);
}

export default page;
