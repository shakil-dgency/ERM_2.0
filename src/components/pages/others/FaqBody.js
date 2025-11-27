import Faq from "@/components/global/faq/Faq";
import Container from "@/components/ui/Container";
import UnderlineHeadline from "@/components/ui/UnderlineHeadline";
import React from "react";

function FaqBody({ data }) {
	return (
		<div className="bg-secondary-900 py-[100px] lg:py-[140px]">
			<Container>
				<div className="space-y-[160px]">
					{data?.map((item, i) => (
						<div key={i}>
							<UnderlineHeadline text={item?.title} text_light={true} />

							<div className="mt-[100px] max-w-[1300px] mx-auto">
								<Faq allFaq={true} data={item?.faq} />
							</div>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
}

export default FaqBody;
