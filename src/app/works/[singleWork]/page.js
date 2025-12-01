import StructureData from "@/components/global/StructureData";
import Hero from "@/components/pages/about/Hero";
import WorksDisplay from "@/components/pages/works/WorksDisplay";
import { buildMetadataFromSeo, getData } from "@/services/helper";
import { notFound } from "next/navigation";
import React from "react";

export const revalidate = 60;

export async function generateMetadata({ params }) {
	const { singleWork } = params;
	return buildMetadataFromSeo(`/api/works/${singleWork}`);
}

async function page({ params }) {
	const { singleWork } = params;
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/works/${singleWork}`;

	const { data } = await getData(url, "singleWork Page");

	if (!data) {
		notFound();
	}

	const seo = data?.seo;

	return (
		<>
			{seo &&
				seo.structuredData?.map((item, i) => {
					return <StructureData data={item} key={i} />;
				})}
			<div>
				<Hero data={data?.hero} work={true} lightShadow={true} />
				<div className="pb-[140px] pt-[60px] bg-secondary-900">
					{data?.portfolio_section?.map((item, i) => (
						<WorksDisplay key={i} data={item} />
					))}
				</div>
			</div>
		</>
	);
}

export default page;
