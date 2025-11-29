import FreeMarketing from "@/components/pages/freeMarketing/FreeMarketing";
import React from "react";
import qs from "qs";
import { buildMetadataFromSeo, getData } from "@/services/helper";
import StructureData from "@/components/global/StructureData";

export const revalidate = 60;

export async function generateMetadata() {
	return buildMetadataFromSeo("/api/free-marketing-plan");
}

async function page() {
	const query = qs.stringify(
		{
			populate: {
				service_card: { populate: ["elements"] },
				goal_card: { populate: ["elements"] },
				seo: {
					fields: ["structuredData"],
				},
			},
		},
		{ encodeValuesOnly: true }
	);

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/free-marketing-plan?${query}`;

	const { data } = await getData(url, "FreeMarketing page");

	if (!data) {
		return notFound();
	}

	const seo = data?.seo;

	return (
		<>
			{seo &&
				seo.structuredData?.map((item, i) => {
					return <StructureData data={item} key={i} />;
				})}
			<div>
				<FreeMarketing data={data} />
			</div>
		</>
	);
}

export default page;
