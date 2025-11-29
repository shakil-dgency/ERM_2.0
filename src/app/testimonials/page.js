import Hero from "@/components/pages/about/Hero";
import Testimonials from "@/components/pages/home/comparisonSection/Testimonials";
import TestimonialsBody from "@/components/pages/testimonials/TestimonialsBody";
import React from "react";
import qs from "qs";
import { buildMetadataFromSeo, getData } from "@/services/helper";
import StructureData from "@/components/global/StructureData";

export const revalidate = 60;

export async function generateMetadata() {
	return buildMetadataFromSeo("/api/all-testimonial");
}

async function page() {
	const query = qs.stringify(
		{
			populate: {
				hero: { populate: ["background_image", "hero_text"] },
				video_testimonial: { populate: ["testimonial_card"] },
				testimonials: {
					populate: {
						image: true,
					},
				},
				seo: {
					fields: ["structuredData"],
				},
			},
		},
		{ encodeValuesOnly: true }
	);

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/all-testimonial?${query}`;

	const { data } = await getData(url, "testimonial page");

	const seo = data?.seo;

	return (
		<>
			{seo &&
				seo.structuredData?.map((item, i) => {
					return <StructureData data={item} key={i} />;
				})}
			<div>
				<Hero data={data?.hero} />
				<div className=" bg-[url('/pages/home/papertexture.png')] bg-[length:240px_240px] bg-repeat pt-[100px] lg:pt-[120px]">
					<Testimonials data={data?.video_testimonial} />
				</div>
				<TestimonialsBody data={data?.testimonials} />
			</div>
		</>
	);
}

export default page;
