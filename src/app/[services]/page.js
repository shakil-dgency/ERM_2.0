import FrequentlyAsk from "@/components/global/faq/FrequentlyAsk";
import Banner from "@/components/global/Banner";
import Hero from "@/components/pages/about/Hero";
import Mission from "@/components/pages/about/Mission";
import ComparisonBox from "@/components/pages/home/comparisonSection/ComparisonBox";
import Testimonials from "@/components/pages/home/comparisonSection/Testimonials";
import ServiceCarusel from "@/components/pages/home/ServiceCarusel";
import Features from "@/components/pages/services/Features";
import Container from "@/components/ui/Container";
import { buildMetadataFromSeo, getData } from "@/services/helper";
import React from "react";
import { notFound } from "next/navigation";
import StructureData from "@/components/global/StructureData";

export const revalidate = 60;

export async function generateMetadata({ params }) {
	const { services } = params;
	return buildMetadataFromSeo(`/api/services/${services}`);
}

async function page({ params }) {
	const { services } = params;
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/services/${services}`;

	const data = await getData(url, "Service Page");

	if (!data?.data) {
		notFound();
	}

	const seo = data?.data?.seo;

	return (
		<>
			{seo &&
				seo.structuredData?.map((item, i) => {
					return <StructureData data={item} key={i} />;
				})}
			<div>
				<Hero data={data?.data?.hero} video={true} />
				<div className="bg-tertiary-500 py-[100px] lg:py-[140px]">
					<Features data={data?.data?.key_components} />
					<Testimonials data={data?.data?.video_testimonial} />
					<Banner data={data?.data?.cta} />
				</div>

				<div className="bg-tertiary-500 pb-[100px] md:pb-[140px]">
					<Container>
						<div className="pb-[100px] md:pb-[140px]">
							<ComparisonBox data={data?.data?.comparison} />
						</div>
						<Mission data={data?.data?.mission_vision_1} rotate={true} />
						<div className="mt-[100px] md:mt-[140px]">
							<Mission data={data?.data?.mission_vision_2} />
						</div>
					</Container>
				</div>
				<div className="bg-secondary-900 py-[100px] lg:py-[140px]">
					<ServiceCarusel data={data?.data?.service_section} />
					<div className="pt-[80px] md:pt-[100px]">
						<FrequentlyAsk data={data?.data?.faq} />
					</div>
				</div>
			</div>
		</>
	);
}

export default page;
