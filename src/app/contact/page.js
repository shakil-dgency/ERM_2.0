import ContactUs from "@/components/pages/contact/ContactUs";
import React from "react";
import qs from "qs";
import { buildMetadataFromSeo, getData } from "@/services/helper";
import { notFound } from "next/navigation";
import StructureData from "@/components/global/StructureData";

export const revalidate = 60;

export async function generateMetadata() {
	return buildMetadataFromSeo("/api/contact");
}

async function page() {
	const query = qs.stringify(
		{
			populate: {
				lists: true,
				seo: {
					fields: ["structuredData"],
				},
			},
		},
		{ encodeValuesOnly: true }
	);

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/contact?${query}`;

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
				<ContactUs data={data} />
			</div>
		</>
	);
}

export default page;
