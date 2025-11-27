import Hero from "@/components/pages/about/Hero";
import React from "react";
import qs from "qs";
import { getData } from "@/services/helper";
import { notFound } from "next/navigation";
import CaseBody from "@/components/pages/caseStudies/CaseBody";

export const revalidate = 60;

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
				pageSize: 3, // show first 6 blogs
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
			},
		},
		{ encodeValuesOnly: true }
	);

	const newUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/all-case-study?${caasequery}`;
	const { data: newData } = await getData(newUrl, "case home page");

	console.log(newData);

	return (
		<div>
			<Hero data={newData?.hero} />
			<CaseBody initialData={data} initialMeta={meta} />
		</div>
	);
}

export default page;
