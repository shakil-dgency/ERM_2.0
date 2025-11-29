import Hero from "@/components/pages/about/Hero";
import TeamBody from "@/components/pages/team/TeamBody";
import React from "react";
import qs from "qs";
import { buildMetadataFromSeo, getData } from "@/services/helper";
import StructureData from "@/components/global/StructureData";

export const revalidate = 60;

export async function generateMetadata() {
	return buildMetadataFromSeo("/api/team");
}

async function page() {
	const query = qs.stringify(
		{
			populate: {
				hero: { populate: ["background_image", "hero_text"] },
				cards: {
					populate: ["strengths", "weaknesses", "profile_image", "experience"],
				},
				seo: {
					fields: ["structuredData"],
				},
			},
		},
		{ encodeValuesOnly: true }
	);

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/team?${query}`;

	const { data } = await getData(url, "team page");

	const seo = data?.seo;

	return (
		<>
			{seo &&
				seo.structuredData?.map((item, i) => {
					return <StructureData data={item} key={i} />;
				})}
			<div>
				<Hero data={data?.hero} />
				<TeamBody data={data?.cards} />
			</div>
		</>
	);
}

export default page;
