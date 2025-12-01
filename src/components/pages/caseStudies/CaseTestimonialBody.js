"use client";
import VideoPopUp from "@/components/global/VideoPopUp";
import React, { useState } from "react";
import Testimonial from "../singleCaseStudies/Testimonial";

function CaseTestimonialBody({data}) {
	const [open, setOpen] = useState(false);
	const [popupVideoURL, setPopupVideoURL] = useState(null);

	const handleOpenPopup = (url) => {
		setPopupVideoURL(url);
		setOpen(true);
	};
	return (
		<div>
			<Testimonial data={data} onOpenPopup={handleOpenPopup} />

			<VideoPopUp video_url={popupVideoURL} open={open} setOpen={setOpen} />
		</div>
	);
}

export default CaseTestimonialBody;
