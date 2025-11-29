import DemoCall from "@/components/pages/demoCall/DemoCall";
import React from "react";
import qs from "qs";
import { buildMetadataFromSeo, getData } from "@/services/helper";
import { notFound } from "next/navigation";
import StructureData from "@/components/global/StructureData";

export const revalidate = 60;

export async function generateMetadata() {
	return buildMetadataFromSeo("/api/demo-call");
}

async function page() {
	const query = qs.stringify(
		{
			populate: {
				advices: {
					populate: {
						cards: {
							populate: {
								icon: true,
							},
						},
					},
				},
				seo: {
					fields: ["structuredData"],
				},
			},
		},
		{ encodeValuesOnly: true }
	);

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/demo-call?${query}`;

	const { data } = await getData(url, "contact page");

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
				<DemoCall data={data} />
			</div>
		</>
	);
}

export default page;
