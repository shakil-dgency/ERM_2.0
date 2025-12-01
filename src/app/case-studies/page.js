import Hero from "@/components/pages/about/Hero";
import React from "react";
import qs from "qs";
import { buildMetadataFromSeo, getData } from "@/services/helper";
import { notFound } from "next/navigation";
import CaseBody from "@/components/pages/caseStudies/CaseBody";
import StructureData from "@/components/global/StructureData";

export const revalidate = 60;

export async function generateMetadata() {
	return buildMetadataFromSeo("/api/all-case-study");
}

async function page() {
	const query = qs.stringify(
		{
			populate: {
				main_image: true,
				client_feedback: {
					fields: ["name", "designation", "feedback"],
				},
			},
			pagination: {
				page: 1,
				pageSize: 16, // show first 6 blogs
			},
		},
		{ encodeValuesOnly: true }
	);

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/case-studies?${query}`;

	const { data, meta } = await getData(url, "case study page");

	if (!data) {
		return notFound();
	}

	const caasequery = qs.stringify(
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

	const newUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/all-case-study?${caasequery}`;
	const { data: newData } = await getData(newUrl, "case home page");

	const seo = newData?.seo;


	return (
		<>
			{seo &&
				seo.structuredData?.map((item, i) => {
					return <StructureData data={item} key={i} />;
				})}
			<div>
				<Hero data={newData?.hero} />
				<CaseBody initialData={data} initialMeta={meta} />
			</div>
		</>
	);
}

export default page;
