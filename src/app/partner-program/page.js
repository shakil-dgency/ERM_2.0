import FrequentlyAsk from "@/components/global/faq/FrequentlyAsk";
import Mission from "@/components/pages/about/Mission";
import OurPartner from "@/components/pages/partnerProgram/OurPartner";
import PartnerHero from "@/components/pages/partnerProgram/PartnerHero";
import StepsToStart from "@/components/pages/partnerProgram/StepsToStart";
import ToolsAlreadyUse from "@/components/pages/partnerProgram/ToolsAlreadyUse";
import Container from "@/components/ui/Container";
import React from "react";

function page() {
	return (
		<div>
			<PartnerHero />
			<StepsToStart />
			<div className="bg-tertiary-500 py-[100px] lg:py-[140px]">
				<Container>
					<Mission />
					<OurPartner/>
					<ToolsAlreadyUse />
					
				</Container>
			</div>

            <FrequentlyAsk />
		</div>
	);
}

export default page;
