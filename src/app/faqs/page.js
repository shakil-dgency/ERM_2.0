import Hero from "@/components/pages/about/Hero";
import FaqBody from "@/components/pages/others/FaqBody";
import React from "react";
import qs from "qs";
import { getData } from "@/services/helper";
import { notFound } from "next/navigation";

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
                faq_section:{
                    populate:{
                        faq : true,
                    },
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
	console.log(data);
	return (
		<div>
			<Hero data={data?.hero} lightShadow={true} />
			<FaqBody data={data?.faq_section} />
		</div>
	);
}

export default page;
