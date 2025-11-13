import FreeMarketing from "@/components/pages/freeMarketing/FreeMarketing";
import React from "react";
import qs from "qs";
import { getData } from "@/services/helper";

export const revalidate = 60;

async function page() {
	const query = qs.stringify(
		{
			populate: {
				service_card: { populate: ["elements"] },
				goal_card: { populate: ["elements"] },
			},
		},
		{ encodeValuesOnly: true }
	);

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/free-marketing-plan?${query}`;

	const { data } = await getData(url, "FreeMarketing page");

	if (!data) {
		return notFound();
	}
	
	return (
		<div>
			<FreeMarketing data={data} />
		</div>
	);
}

export default page;
