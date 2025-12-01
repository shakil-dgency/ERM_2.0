"use client";
import Container from "@/components/ui/Container";
import React, { useState } from "react";
import CaseCard from "./CaseCard";
import qs from "qs";
import VideoPopUp from "@/components/global/VideoPopUp";
import { InfinitySpin } from "react-loader-spinner";
import StrokeButton from "@/components/ui/buttons/StrokeButton";

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
						fields: ["name", "designation", "feedback"],
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

	const [open, setOpen] = useState(false);
	const [popupVideoURL, setPopupVideoURL] = useState(null);

	const handleOpenPopup = (url) => {
		setPopupVideoURL(url);
		setOpen(true);
	};

	return (
		<div className="pt-[100px] pb-[150px] bg-secondary-900">
			<Container>
				<div className="flex flex-col gap-y-[50px] xl:mx-[90px]">
					{caseStudy?.map((item, i) => (
						<CaseCard key={i} data={item} onOpenPopup={handleOpenPopup} />
					))}
				</div>
				<div className="flex justify-center mt-[50px]">
					{meta.pagination.page < meta.pagination.pageCount && (
						<>
							{loading ? (
								<div className="flex justify-center ">
									<InfinitySpin width="200" color="#FF492C" />
								</div>
							) : (
								<div className="flex justify-center mt-4">
									<StrokeButton medium={true} text="Load More" handleClick={loadMore} text_light={true} />
								</div>
							)}
						</>
					)}
				</div>
			</Container>
			<VideoPopUp video_url={popupVideoURL} open={open} setOpen={setOpen} />
		</div>
	);
}

export default CaseBody;
