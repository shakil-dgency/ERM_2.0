import Hero from "@/components/pages/about/Hero";
import CaseCard from "@/components/pages/caseStudies/CaseCard";
import Container from "@/components/ui/Container";
import React from "react";

function page() {
	return (
		<div>
			<Hero />
			<div className="pt-[100px] pb-[150px] bg-secondary-900">
				<Container>
					<div className="space-y-[50px] xl:mx-[90px]">
						{[...Array(3)].map((_, i) => (
							<CaseCard key={i} />
						))}
					</div>
				</Container>
				
			</div>
		</div>
	);
}

export default page;
