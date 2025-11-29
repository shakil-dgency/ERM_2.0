import Hero from "@/components/pages/about/Hero";
import FaqBody from "@/components/pages/others/FaqBody";
import React from "react";
import qs from "qs";
import { buildMetadataFromSeo, getData } from "@/services/helper";
import { notFound } from "next/navigation";
import StructureData from "@/components/global/StructureData";

export const revalidate = 60;

export async function generateMetadata() {
	return buildMetadataFromSeo("/api/faq");
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
				faq_section: {
					populate: {
						faq: true,
					},
				},
				seo: {
					fields: ["structuredData"],
				},
			},
		},
		{ encodeValuesOnly: true }
	);

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/faq?${query}`;

	const { data } = await getData(url, "faqs page");

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
				<Hero data={data?.hero} lightShadow={true} />
				<FaqBody data={data?.faq_section} />
			</div>
		</>
	);
}

export default page;
