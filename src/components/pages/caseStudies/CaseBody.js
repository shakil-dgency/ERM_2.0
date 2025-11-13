"use client";
import Container from "@/components/ui/Container";
import React, { useState } from "react";
import CaseCard from "./CaseCard";
import qs from "qs";

function CaseBody({ initialData, initialMeta }) {
	const [caseStudy, setCaseStudy] = useState(initialData);
	const [meta, setMeta] = useState(initialMeta);
	const [loading, setLoading] = useState(false);

	async function loadMore() {
		if (meta.pagination.page >= meta.pagination.pageCount) return;

		setLoading(true);

		const nextPage = meta.pagination.page + 1;

		const query = qs.stringify(
			{
				populate: {
					main_image: true,
					client_feedback: {
						fields: ["designation", "name"],
					},
				},
				pagination: {
					page: nextPage,
					pageSize: meta.pagination.pageSize,
				},
			},
			{ encodeValuesOnly: true }
		);

		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/case-studies?${query}`);
		const json = await res.json();
		

		setCaseStudy((prev) => [...prev, ...json.data]);
		setMeta(json.meta);
		setLoading(false);
	}

	return (
		<div className="pt-[100px] pb-[150px] bg-secondary-900">
			<Container>
				<div className="space-y-[50px] xl:mx-[90px]">
					{caseStudy?.map((item, i) => (
						<CaseCard key={i} data={item} />
					))}
				</div>
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
			</Container>
		</div>
	);
}

export default CaseBody;
