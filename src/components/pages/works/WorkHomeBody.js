"use client";
import FillButton from "@/components/ui/buttons/FillButton";
import Container from "@/components/ui/Container";
import Image from "next/image";
import React, { useState } from "react";
import qs from "qs";

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
							<button
								onClick={loadMore}
								className="cursor-pointer flex items-center gap-2 border-[1px] border-primary-500 text-neutral-50 text-[16px] font-[700] py-2 px-4 rounded"
							>
								<span>{loading ? "Loading..." : "Load More"}</span>{" "}
								<span className="pt-[2px]">
									<svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
										<path
											d="M6.42859 7.03312L10.2313 1.47851C10.407 1.22198 10.5 0.963519 10.5 0.748684C10.5 0.333343 10.1667 0.076416 9.60869 0.076416L1.39002 0.0764156C0.832694 0.0764156 0.5 0.333019 0.5 0.747389C0.5 0.962547 0.59309 1.21688 0.769312 1.47397L4.5719 7.03117C4.81684 7.38856 5.14646 7.58647 5.50045 7.58647C5.85419 7.58655 6.18372 7.3909 6.42859 7.03312Z"
											fill="#fff"
										/>
									</svg>
								</span>
							</button>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
}

export default WorkHomeBody;
