import Hero from "@/components/pages/bookingMax/Hero";
import Letter from "@/components/pages/bookingMax/Letter";
import VideoSection from "@/components/pages/bookingMax/VideoSection";
import CaseStudies from "@/components/pages/home/comparisonSection/CaseStudies";
import React from "react";
import qs from "qs";
import { buildMetadataFromSeo, getData } from "@/services/helper";
import { notFound } from "next/navigation";
import BookingMaxVideo from "@/components/pages/bookingMax/BookingMaxVideo";
import Testimonials from "@/components/pages/home/comparisonSection/Testimonials";
import Banner from "@/components/global/Banner";
import StructureData from "@/components/global/StructureData";

export async function generateMetadata() {
	return buildMetadataFromSeo("/api/booking-max");
}

async function page() {
	const query = qs.stringify(
		{
			populate: {
				hero: { populate: ["statistics"] },
				growth_engine: true,
				marketing_strategy: {
					populate: {
						strategy_card: true,
					},
				},
				video_testimonial: { populate: ["testimonial_card"] },
				cta: { populate: ["background_image"] },
				letter: true,

				casestudy_section: {
					populate: {
						case_studies: {
							populate: {
								main_image: true,
								client_feedback: {
									fields: ["name", "designation", "feedback"],
								},
							},
							fields: ["headline", "slug", "state_1", "state_description1", "video_url"],
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

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/booking-max?${query}`;

	const { data } = await getData(url, "BookingMax page", {
		next: { revalidate: 60 },
	});

	if (!data) {
		return notFound();
	}

	const seo = data?.seo;

	console.log(seo);
	

	return (
		<>
			{seo &&
				seo.structuredData?.map((item, i) => {
					return <StructureData data={item} key={i} />;
				})}
			<div>
				<Hero data={data?.hero} />
				<BookingMaxVideo data={data?.growth_engine} />
				<VideoSection data={data?.marketing_strategy} />
				<div className="bg-tertiary-500 pt-[100px] lg:pt-[140px]">
					<Testimonials data={data?.video_testimonial} />
					<Banner data={data?.cta} />
					<Letter data={data?.letter} />
				</div>
				<div className="py-[100px] lg:py-[150px] bg-secondary-900">
					<CaseStudies light={true} data={data?.casestudy_section} />
				</div>
			</div>
		</>
	);
}

export default page;
