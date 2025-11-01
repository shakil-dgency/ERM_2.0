import FrequentlyAsk from "@/components/global/faq/FrequentlyAsk";
import Banner from "@/components/pages/about/Banner";
import Hero from "@/components/pages/about/Hero";
import Mission from "@/components/pages/about/Mission";
import ComparisonBox from "@/components/pages/home/comparisonSection/ComparisonBox";
import Testimonials from "@/components/pages/home/comparisonSection/Testimonials";
import ServiceCarusel from "@/components/pages/home/ServiceCarusel";
import Features from "@/components/pages/services/Features";
import Container from "@/components/ui/Container";
import { getData } from "@/services/helper";
import React from "react";

export const revalidate = 60;

async function page({ params }) {
	const { services } = params;
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/services/${services}`;

	const data = await getData(url, "Service Page");
	console.log(data);

	return (
		<div>
			<Hero data={data?.data.hero} />
			<div className="bg-tertiary-500 py-[100px] lg:py-[140px]">
				<Features data={data?.data.key_components} />
				<Testimonials data={data?.data.video_testimonial} />
				<Banner data={data?.data.cta} />
			</div>

			<div className="bg-tertiary-500 pb-[100px] md:pb-[140px]">
				<Container>
					<div className="pb-[100px] md:pb-[140px]">
						<ComparisonBox data={data?.data.comparison} />
					</div>
					<Mission data={data?.data.mission_vision_1} rotate={true} />
					<div className="mt-[80px] md:mt-[120px]">
						<Mission data={data?.data.mission_vision_2} />
					</div>
				</Container>
			</div>
			<div className="bg-secondary-900 py-[100px] lg:py-[140px]">
				<ServiceCarusel data={data?.data.service_section} />
				<div>
					<FrequentlyAsk data={data?.data.faq} />
				</div>
			</div>
		</div>
	);
}

export default page;
