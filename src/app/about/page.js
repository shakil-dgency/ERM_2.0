import Banner from "@/components/global/Banner";
import Hero from "@/components/pages/about/Hero";
import Mission from "@/components/pages/about/Mission";
import StatsAndClients from "@/components/pages/home/StatsAndClients";
import Container from "@/components/ui/Container";
import React from "react";
import qs from "qs";
import { buildMetadataFromSeo, getData } from "@/services/helper";
import { notFound } from "next/navigation";
import ToolsCard from "@/components/pages/home/ToolsCard";
import StructureData from "@/components/global/StructureData";

export async function generateMetadata() {
	return buildMetadataFromSeo("/api/about-us");
}

async function page() {
	const query = qs.stringify(
		{
			populate: {
				hero: { populate: ["background_image", "hero_text"] },
				mission_vision_1: { populate: ["image"] },
				portfolio: {
					populate: {
						statistics: true,
						logos: true,
						cards: { populate: ["image", "logos_with_alt"] },
					},
				},
				mission_vision_2: { populate: ["image"] },
				seo: {
					fields: ["structuredData"],
				},
			},
		},
		{ encodeValuesOnly: true }
	);

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/about-us?${query}`;

	const { data } = await getData(url, "About page", {
		next: { revalidate: 60 },
	});

	if (!data) {
		return notFound();
	}

	const seo = data?.seo;

	return (
		<>
			{seo &&
				seo.structuredData?.map((item, i) => {
					return <StructureData data={item} key={i} />;
				})}
			<div>
				<Hero data={data?.hero} />
				<div className="">
					<div className="bg-tertiary-500 py-[100px] lg:py-[140px]">
						<Container>
							<Mission data={data?.mission_vision_1} />
						</Container>
					</div>
					<div className="bg-secondary-900 pt-[120px] lg:pt-[140px]">
						<Container>
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:mt-[60px]">
								{data?.portfolio.cards.map((card, i) => (
									<ToolsCard key={i} data={card} isAbout={true} index={i} />
								))}
							</div>
						</Container>
						<StatsAndClients about={true} data={data?.portfolio} />
					</div>
					<div className="bg-tertiary-500 py-[100px] lg:py-[140px]">
						<Container>
							<Mission data={data?.mission_vision_2} />
						</Container>
					</div>
				</div>
			</div>
		</>
	);
}

export default page;
