import React from "react";
import Tools from "./Tools";
import Testimonials from "./Testimonials";
import CaseStudies from "./CaseStudies";
import ComparisonBox from "./ComparisonBox";
import Banner from "@/components/global/Banner";


export default function ComparisonSection({ data }) {
	return (
		<div className={`${data?.caseStudies ? "py-[100px] lg:py-[140px]" : "pt-[100px] lg:pt-[140px]"}bg-white  bg-[url('/pages/home/papertexture.png')] bg-[length:240px_240px] bg-repeat`}>
			<Testimonials data={data?.testimonials} />
			<Banner data={data?.banner} />
			<div className="pt-[100px] lg:pt-[140px]">
				<ComparisonBox data={data?.comparison} />
			</div>
			<Tools data={data?.tools} />
			
			{data?.caseStudies && <CaseStudies data={data?.caseStudies} />}
		</div>
	);
}
