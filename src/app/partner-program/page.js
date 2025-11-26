import FrequentlyAsk from "@/components/global/faq/FrequentlyAsk";
import Mission from "@/components/pages/about/Mission";
import OurPartner from "@/components/pages/partnerProgram/OurPartner";
import PartnerContact from "@/components/pages/partnerProgram/PartnerContact";
import PartnerHero from "@/components/pages/partnerProgram/PartnerHero";
import StepsToStart from "@/components/pages/partnerProgram/StepsToStart";
import ToolsAlreadyUse from "@/components/pages/partnerProgram/ToolsAlreadyUse";
import Container from "@/components/ui/Container";
import React from "react";
import qs from "qs";
import { getData } from "@/services/helper";

export const revalidate = 60;

async function page() {
	const query = qs.stringify(
		{
			populate: {
				hero: { populate: ["background_image", "hero_text"] },
				statistics: true,
				steps: {
					populate: {
						cards: {
							populate: {
								icon: true,
							},
						},
					},
				},
				mission_vision: { populate: ["image"] },
				eligibility_criteria: {
					populate: {
						eligibility_card: true,
					},
				},
				tools: {
					populate: {
						cards :{
							populate:{
								icon:true,
							},
						},
					},
				},
				faq: {
					populate: {
						question_answer: true,
					},
				},
			},
		},
		{ encodeValuesOnly: true }
	);

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/partner-program?${query}`;

	const { data } = await getData(url, "partner program page");

	console.log(data);

	return (
		<div>
			<PartnerHero data={data?.hero} stat={data?.statistics} />
			<StepsToStart data={data?.steps} />
			<div className="bg-tertiary-500 py-[100px] lg:py-[140px]">
				<Container>
					<Mission data={data?.mission_vision} />
					<OurPartner data={data?.eligibility_criteria} />
					<ToolsAlreadyUse data={data?.tools} />
				</Container>
			</div>

			<FrequentlyAsk data={data?.faq} />
			<PartnerContact />
		</div>
	);
}

export default page;
