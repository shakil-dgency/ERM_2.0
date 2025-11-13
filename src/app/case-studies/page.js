import Hero from "@/components/pages/about/Hero";
import CaseCard from "@/components/pages/caseStudies/CaseCard";
import Container from "@/components/ui/Container";
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
				client_feedback:{
					fields:["designation","name"]
				}
			},
			pagination: {
				page: 1,
				pageSize: 3, // show first 6 blogs
			},
		},
		{ encodeValuesOnly: true }
	);

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/case-studies?${query}`;

	const { data, meta } = await getData(url, "contact page");

	if (!data) {
		return notFound();
	}

	console.log(data, meta);
	return (
		<div>
			<Hero />
			<CaseBody initialData={data} initialMeta={meta} />
		</div>
	);
}

export default page;
