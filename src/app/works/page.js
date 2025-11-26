import Hero from "@/components/pages/about/Hero";
import React from "react";
import qs from "qs";
import { getData } from "@/services/helper";
import WorkHomeBody from "@/components/pages/works/WorkHomeBody";

export const revalidate = 60;

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
			},
		},
		{ encodeValuesOnly: true }
	);

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/all-work?${query}`;

	const { data } = await getData(url, "all work page");

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
				pageSize: 6,
			},
		},
		{ encodeValuesOnly: true }
	);

	const allWorkRes = `${process.env.NEXT_PUBLIC_API_URL}/api/works?${worksquery}`;

	const { data: worksData, meta } = await getData(allWorkRes, "works data");

	console.log(worksData, meta);

	return (
		<div>
			<Hero data={data?.hero} />
			<WorkHomeBody initialData={worksData} initialMeta={meta} />
		</div>
	);
}

export default page;
