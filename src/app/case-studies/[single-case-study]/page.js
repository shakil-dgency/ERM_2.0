import StructureData from "@/components/global/StructureData";
import CaseTestimonialBody from "@/components/pages/caseStudies/CaseTestimonialBody";
import CaseStudies from "@/components/pages/home/comparisonSection/CaseStudies";
import CaseStudiesHero from "@/components/pages/singleCaseStudies/CaseStudiesHero";
import CaseStudyBody from "@/components/pages/singleCaseStudies/CaseStudyBody";
import Testimonial from "@/components/pages/singleCaseStudies/Testimonial";
import { buildMetadataFromSeo, getData } from "@/services/helper";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export const revalidate = 60;

export async function generateMetadata({ params }) {
	const { "single-case-study": singleCaseStudy } = params;
	return buildMetadataFromSeo(`/api/case-studies/${singleCaseStudy}`);
}

async function page({ params }) {
	// const { single-case-study } = params;
	const { "single-case-study": singleCaseStudy } = params;

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/case-studies/${singleCaseStudy}`;

	const { data } = await getData(url, "Single Case Study Page");

	const newData = data && data[0];

	if (!newData) {
		notFound();
	}

	const seo = newData?.seo;

	return (
		<>
			{seo &&
				seo.structuredData?.map((item, i) => {
					return <StructureData data={item} key={i} />;
				})}
			<div>
				<CaseStudiesHero data={newData} />
				<div className="bg-tertiary-500 py-[100px] xl:py-[140px]">
					{/* <Container> */}
					<div className="max-w-[1300px] mx-auto px-2.5">
						<div className="grid grid-cols-1 xl:grid-cols-4 gap-y-5 gap-x-[40px]">
							<div className="col-span-full xl:col-start-1 xl:col-end-2">
								<div className="sticky top-8 ">
									<div className="bg-secondary-900 rounded-[10px] px-[28px] py-[36px] xl:max-w-[400px] mb-[15px]">
										<div className="mb-8">
											<h5 className=" text-[16px] lg:text-[18px] font-[600] text-neutral-50 mb-1">ABOUT THE CLIENT</h5>
											<p className=" text-[15px] leading-[1.7] text-neutral-300">{newData?.about_client}</p>
										</div>
										<div className="mb-8">
											<h5 className=" text-[16px] lg:text-[18px] font-[600] text-neutral-50 mb-1">LOCATION</h5>
											<p className=" text-[15px] leading-[1.7] text-neutral-300">{newData?.location}</p>
										</div>
										<div className="mb-8">
											<h5 className="text-[16px] lg:text-[18px] font-[600] text-neutral-50 mb-1">BUSINESS TYPE</h5>
											<p className=" text-[15px] leading-[1.7] text-neutral-300">{newData?.business_type}</p>
										</div>
										<div className="">
											<h5 className="text-[16px] lg:text-[18px] font-[600] text-neutral-50 mb-1 uppercase">Services Rendered</h5>
											<div className=" text-[15px] leading-[1.7] text-neutral-300">
												<ul className="list-disc list-inside leading-[1.7]">
													{newData?.service_rendered?.map((service, index) => {
														return <li key={index}>{service?.title}</li>;
													})}
												</ul>
											</div>
										</div>
									</div>
									<div>
										<p className="text-neutral-900 text-[16px] lg:text-[18px] font-[600]">Share this Case Study:</p>
										<div className="flex gap-5 mt-2.5">
											{newData?.social_share?.map((social, i) => (
												<Link key={i} href={`${social.url}`} target="_blank">
													<Image
														src={process.env.NEXT_PUBLIC_API_URL + social?.icon.url}
														alt="Social Icon"
														width={30}
														height={30}
														className="h-[22px] w-auto object-cover"
													/>
												</Link>
											))}
										</div>
									</div>
								</div>
							</div>
							<div className="xl:col-start-2 xl:col-end-5 xl:max-w-[900px] ml-auto">
								<CaseStudyBody data={newData?.case_body} />
								<CaseTestimonialBody data={newData?.client_feedback} />
							</div>
						</div>
					</div>
					{/* </Container> */}
				</div>
				<div className="py-[100px] lg:py-[150px] bg-secondary-900">
					<CaseStudies light={true} data={newData?.other_casestudy} />
				</div>
			</div>
		</>
	);
}

export default page;
