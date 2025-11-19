import Faq from "@/components/global/faq/Faq";
import FrequentlyAsk from "@/components/global/faq/FrequentlyAsk";
import BookingMax from "@/components/pages/home/BookingMax";
import ComparisonSection from "@/components/pages/home/comparisonSection/ComparisonSection";
import Hero from "@/components/pages/location/Hero";
import { getData } from "@/services/helper";
import React from "react";

export const revalidate = 60;

async function page({ params }) {
	const { singleLocation } = params;
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/locations/${singleLocation}`;

	const { data } = await getData(url, "Location Page");

	console.log(data);

	return (
		<div>
			<Hero data={data?.hero} />
			<BookingMax data={data?.bookingmax} serviceData={data?.services} />
			<ComparisonSection
				data={{
					comparison: data?.comparison,
					tools: data?.tools,
					testimonials: data?.video_testimonial,
					banner: data?.cta,
				}}
			/>
			<FrequentlyAsk data={data?.faq} />
		</div>
	);
}

export default page;
