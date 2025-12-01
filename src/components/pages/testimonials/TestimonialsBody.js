"use client"
import React, { useState } from "react";
import Testimonial from "../singleCaseStudies/Testimonial";
import Container from "@/components/ui/Container";
import VideoPopUp from "@/components/global/VideoPopUp";

function TestimonialsBody({ data }) {
	const [open, setOpen] = useState(false);
	const [popupVideoURL, setPopupVideoURL] = useState(null);

	const handleOpenPopup = (url) => {
		setPopupVideoURL(url);
		setOpen(true);
	};
	return (
		<div className="bg-secondary-900 pb-[100px] lg:pb-[140px] pt-2 lg:pt-[80px] px-2.5">
			<div className="max-w-[1316px] mx-auto space-y-[130px] md:space-y-[140px]">
				{data?.map((item, i) => (
					<Testimonial key={i} data={item} onOpenPopup={handleOpenPopup} text_light={true} />
				))}
			</div>
			<VideoPopUp video_url={popupVideoURL} open={open} setOpen={setOpen} />
		</div>
	);
}

export default TestimonialsBody;
