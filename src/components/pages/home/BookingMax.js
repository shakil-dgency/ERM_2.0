"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "@/components/ui/Container";
import ServiceCard from "@/components/global/ServiceCard";
import LazyLoadingVideo from "@/components/global/LazyLoadingVideo";
import VideoStream from "@/components/global/VideoStream";
import ServiceCarusel from "./ServiceCarusel";
import UnderlineHeadline from "@/components/ui/UnderlineHeadline";
import StrokeButton from "@/components/ui/buttons/StrokeButton";
import FillButton from "@/components/ui/buttons/FillButton";

export default function BookingMax({ data, serviceData }) {
	const [open, setOpen] = useState(false);
	const popupVideoRef = useRef(null);
	const overlayRef = useRef(null);

	// Split by the apostrophe
	const [before, highlightedWithQuotes] = data?.headline.split("'");

	// Remove extra quotes if any
	const highlighted = highlightedWithQuotes?.replace(/'/g, "");

	// Lock body scroll when overlay is open
	useEffect(() => {
		if (open) {
			const prev = document.body.style.overflow;
			document.body.style.overflow = "hidden";
			return () => {
				document.body.style.overflow = prev;
			};
		}
	}, [open]);

	const handleOpen = () => {
		setOpen(true);
		setTimeout(() => {
			if (popupVideoRef.current) popupVideoRef.current.play().catch(() => {});
		}, 600); // start after animation
	};

	const handleClose = () => {
		setOpen(false);
		// exitFullscreen();
		if (popupVideoRef.current) {
			popupVideoRef.current.pause();
			popupVideoRef.current.currentTime = 0;
		}
	};

	return (
		<section className=" min-h-screen overflow-x-hidden bg-[url('/pages/home/bookingMaxBg.png')] bg-repeat bg-[length:240px_240px] pb-[100px] ">
			<div className="relative py-[100px] md:py-[140px]">
				{/* Glow/Gradient Backgrounds */}
				<div className="glow_background absolute -left-40 top-[300px] w-[300px] h-[300px] rounded-full blur-[120px] bg-primary-500 " />
				<div className="glow_background absolute z-10 -right-40 bottom-0 w-[300px] h-[300px] rounded-full blur-[120px] bg-primary-500 " />
				{/* <div className="absolute right-0 bottom-0 w-96 h-80 bg-gradient-to-tl from-[#E04828] via-transparent to-transparent opacity-30 rounded-full blur-2xl pointer-events-none" /> */}

				{/* Title & Subheadline */}
				<div className=" px-2.5 flex flex-col items-center mb-[50px] md:mb-[80px] relative z-10">
					<h1 className="text-[clamp(50px,15.6vw,160px)]  font-[400] text-neutral-50 mb-1">
						{before}
						{highlighted && <span className="text-primary-500 font-bold">{highlighted}</span>}
					</h1>
					<UnderlineHeadline text={data?.description} text_light={true} text_center={true} />
				</div>
				<Container>
					{/* Hero Card */}
					<div className="relative max-w-full mx-auto aspect-[398/295]  md:aspect-[1584/700] rounded-[20px] bg-[rgba(22,26,30,0.90)] overflow-hidden">
						{/* Video or Image Placeholder (can replace with a <video> or <img>) */}
						<div className="absolute inset-0 z-10 ]">
							<LazyLoadingVideo video_url={data?.long_card?.video_url} />
							<div className="absolute inset-0 z-10 bg-gradient-to-t from-[#000000] to-transparent"></div>
						</div>

						<div className="flex items-end h-full pb-[30px] md:pb-[50px] px-5 md:px-[32px] relative z-20">
							<div className="md:flex justify-between w-full">
								<div>
									<span className="block text-[20px] sm:text-[24px] text-neutral-50 font-[600] mb-2">{data?.long_card?.title}</span>
									<span className="block text-[14px] sm:text-[18px] text-neutral-300">{data?.long_card?.short_description}</span>
								</div>
								<div className="flex gap-3 mt-5 md:mt-0">
									<StrokeButton text="Learn More" url="/bookingmax" />
									<FillButton text="Watch Video" handleClick={handleOpen} left_icon="/icons/play.svg" />
								</div>
							</div>
						</div>
					</div>

					{/* Features Cards */}
					<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:mt-[80px] ">
						{/* Card 1 */}
						{data?.other_card?.map((card, index) => (
							<div
								key={index}
								className="relative overflow-hidden rounded-[20px] bg-[rgba(22,26,30,0.90)] px-5 md:px-[32px] pb-[45px]  flex flex-col justify-end h-[525px] md:h-[695px]"
							>
								<span className="highlighted_text mb-1 absolute z-20 top-[30px] md:top-[48px]">{card?.tag}</span>
								<div className="relative z-20">
									<h3 className="text-neutral-50 font-[600] text-[20px] md:text-[24px] mb-[10px]">{card?.title}</h3>
									<p className="text-[14px] md:text-[16px] text-neutral-300 leading-[1.2]">{card?.short_description}</p>
								</div>
								<div className="absolute inset-0 z-10">
									<LazyLoadingVideo video_url={card?.video_url} />
									<div className="absolute inset-0 z-10 bg-gradient-to-t from-[#000000] to-[#00000050]"></div>
								</div>
							</div>
						))}
					</div>
				</Container>
			</div>

			{/* Fullscreen Overlay */}
			<AnimatePresence>
				{open && (
					<motion.div
						className="fixed inset-0 z-[1000] h-full w-full flex items-center justify-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						ref={overlayRef}
					>
						{/* Close Button */}
						<button
							onClick={handleClose}
							className="absolute top-4 right-4 md:top-6 md:right-6 rounded-full bg-secondary-600 hover:bg-secondary-700 backdrop-blur px-3 py-2 text-white text-sm md:text-base z-50"
						>
							✕ Close
						</button>

						{/* Video container with zoom animation */}
						<motion.div
							initial={{ scale: 0.4, opacity: 0, y: 50 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.4, opacity: 0, y: 50 }}
							transition={{ duration: 0.6, ease: "easeInOut" }}
							className="w-full h-full sm:h-auto "
						>
							<video
								src={data?.long_card?.video_url}
								ref={popupVideoRef}
								muted={false}
								playsInline
								preload="metadata"
								className="w-full h-full sm:h-auto object-cover "
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<ServiceCarusel data={serviceData} />
		</section>
	);
}
