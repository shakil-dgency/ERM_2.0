"use client";
import LazyLoadingVideo from "@/components/global/LazyLoadingVideo";
import VideoPopUp from "@/components/global/VideoPopUp";
import FillButton from "@/components/ui/buttons/FillButton";
import StrokeButton from "@/components/ui/buttons/StrokeButton";
import { useState } from "react";

function BookingMaxLongCrad({ data, isStroke = true }) {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true)
		
		
	};

	return (
		<div className="relative max-w-full  rounded-2xl mx-auto aspect-[300/400] xs:aspect-[398/295]  md:aspect-[1584/700] bg-[rgba(22,26,30,0.90)]  ">
			{/* Video or Image Placeholder (can replace with a <video> or <img>) */}

			<div className="absolute inset-0 ">
				<LazyLoadingVideo video_url={data?.intro_video_url} border_radious={true} />
			</div>
			<div className="absolute shadow-[0px_0px_10px_#ff492c60] h-[100.5%] w-full z-10 bg-gradient-to-t from-[#000] to-transparent rounded-2xl "></div>

			<div className="flex items-end h-full pb-[30px] md:pb-[50px] px-5 md:px-[32px] relative z-20">
				<div className={`lg:flex gap-6 items-end w-full ${data?.title ? "justify-between " : "justify-end"}`}>
					{data?.title && (
						<div className="max-w-[700px]">
							<span className="block text-[20px] sm:text-[24px] text-neutral-50 font-[600] mb-2">{data?.title}</span>
							<span className="block text-[14px] sm:text-[18px] text-neutral-300">{data?.short_description}</span>
						</div>
					)}
					<div className="flex items-center md:flex-none gap-3 mt-5 lg:mt-0">
						{isStroke && <StrokeButton text="Learn More" url="/bookingmax" right_icon="/icons/Right_Arrow.svg" />}
						<FillButton text="Watch Video" handleClick={handleOpen} right_icon="/icons/play.svg" />
					</div>
				</div>
			</div>
			{/* Fullscreen Overlay */}
			{open && <VideoPopUp video_url={data?.video_url} open={open} setOpen={setOpen} />}
		</div>
	);
}

export default BookingMaxLongCrad;
