"use client";
import FillButton from "@/components/ui/buttons/FillButton";
import Container from "@/components/ui/Container";
import Image from "next/image";
import React, { useState } from "react";
import qs from "qs";
import { InfinitySpin } from "react-loader-spinner";
import StrokeButton from "@/components/ui/buttons/StrokeButton";

function WorkHomeBody({ initialData, initialMeta }) {
	const [works, setWorks] = useState(initialData);
	const [meta, setMeta] = useState(initialMeta);
	const [loading, setLoading] = useState(false);

	async function loadMore() {
		if (meta.pagination.page >= meta.pagination.pageCount) return;

		setLoading(true);

		const nextPage = meta.pagination.page + 1;

		const query = qs.stringify(
			{
				populate: {
					hero: {
						populate: {
							background_image: true,
							hero_text: true,
						},
					},
				},
				sort: ["work_id:asc"],
				pagination: {
					page: nextPage,
					pageSize: meta.pagination.pageSize,
				},
			},
			{ encodeValuesOnly: true }
		);

		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/works?${query}`);
		const json = await res.json();

		setWorks((prev) => [...prev, ...json.data]);
		setMeta(json.meta);
		setLoading(false);

		console.log(json);
		
	}

	
	return (
		<div className="bg-secondary-900 py-[140px]">
			<Container>
				<div className="space-y-[80px]">
					{works?.map((item, i) => (
						<div
							key={i}
							className={`${
								works.length - 1 === i
									? ""
									: "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[90%] after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-[#7289a0] after:to-transparent after:blur-[0.6px]"
							} flex flex-col-reverse lg:flex-row gap-4 pb-[80px] relative `}
						>
							<div className="flex-1">
								<h2 className="text-neutral-50 mt-3">{item?.hero?.hero_text?.headline}</h2>
								<p className="text-[16px] sm:text-[20px] lg:text-[28px] text-neutral-300 font-[500] mt-2 sm:mt-[20px] lg:mt-[40px] mb-[30px] lg:mb-[60px]">
									{item?.hero?.hero_text?.description}
								</p>
								<div className="flex">
									<FillButton url={`/works/${item?.slug}`} text="SEE DETAILS" />
								</div>
							</div>
							<div className="flex-1 relative">
								<Image
									src={item?.hero ? process.env.NEXT_PUBLIC_API_URL + item?.hero?.background_image?.url : "/"}
									height={300}
									width={500}
									alt="Escaperoom marketer portfolio"
									className=" bg-secondary-700 h-full w-full object-cover"
									quality={90}
								/>
							</div>
						</div>
					))}

					<div className="flex justify-center mt-[50px]">
						{meta.pagination.page < meta.pagination.pageCount && (
							<>
						{loading ? (
							<div className="flex justify-center ">
								<InfinitySpin width="200" color="#FF492C" />
							</div>
						) : (
							<div className="flex justify-center mt-4 ">
								<StrokeButton medium={true} text="Load More" handleClick={loadMore} text_light={true} />
							</div>
						)}
					</>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
}

export default WorkHomeBody;
