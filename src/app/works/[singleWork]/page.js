import Hero from "@/components/pages/about/Hero";
import WorksDisplay from "@/components/pages/works/WorksDisplay";
import { getData } from "@/services/helper";
import React from "react";

export const revalidate = 60;

async function page({ params }) {
	const { singleWork } = params;
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/works/${singleWork}`;

	const { data } = await getData(url, "singleWork Page");

	console.log(data);

	return (
		<div>
			<Hero data={data?.hero} />
			<div className="pb-[140px] bg-secondary-900">
				{data?.portfolio_section?.map((item, i) => (
					<WorksDisplay key={i} data={item} />
				))}
			</div>
		</div>
	);
}

export default page;
