import Hero from "@/components/pages/about/Hero";
import React from "react";
import qs from "qs";
import { buildMetadataFromSeo, getData } from "@/services/helper";
import WorkHomeBody from "@/components/pages/works/WorkHomeBody";
import StructureData from "@/components/global/StructureData";

export const revalidate = 60;

export async function generateMetadata() {
	return buildMetadataFromSeo("/api/all-work");
}

async function page() {
	const query = qs.stringify(
		{
			populate: {
				hero: {
					populate: {
						background_image: true,
						hero_text: true,
					},
				},
				seo: {
					fields: ["structuredData"],
				},
			},
		},
		{ encodeValuesOnly: true }
	);

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/all-work?${query}`;

	const { data } = await getData(url, "all work page");

	const seo = data?.seo;

	const worksquery = qs.stringify(
		{
			populate: {
				hero: {
					populate: {
						background_image: true,
						hero_text: true,
					},
				},
			},
			sort: ["work_id:asc"],
			pagination: {
				page: 1,
				pageSize: 16,
			},
		},
		{ encodeValuesOnly: true }
	);

	const allWorkRes = `${process.env.NEXT_PUBLIC_API_URL}/api/works?${worksquery}`;

	const { data: worksData, meta } = await getData(allWorkRes, "works data");
	

	return (
		<>
			{seo &&
				seo.structuredData?.map((item, i) => {
					return <StructureData data={item} key={i} />;
				})}
			<div>
				<Hero data={data?.hero} />
				<WorkHomeBody initialData={worksData} initialMeta={meta} />
			</div>
		</>
	);
}

export default page;
