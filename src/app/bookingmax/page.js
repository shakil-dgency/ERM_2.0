import Hero from "@/components/pages/bookingMax/Hero";
import Letter from "@/components/pages/bookingMax/Letter";
import VideoSection from "@/components/pages/bookingMax/VideoSection";
import CaseStudies from "@/components/pages/home/comparisonSection/CaseStudies";
import React from "react";

function page() {
	return (
		<div>
			<Hero />
			<VideoSection />
			<Letter />
			<div className="py-[100px] lg:py-[150px] bg-secondary-900">
				<CaseStudies light={true} />
			</div>
		</div>
	);
}

export default page;
