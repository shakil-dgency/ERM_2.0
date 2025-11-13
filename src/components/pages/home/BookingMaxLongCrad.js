"use client";
import LazyLoadingVideo from "@/components/global/LazyLoadingVideo";
import FillButton from "@/components/ui/buttons/FillButton";
import StrokeButton from "@/components/ui/buttons/StrokeButton";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function BookingMaxLongCrad({ data, isStroke = true }) {
	const [open, setOpen] = useState(false);
	const popupVideoRef = useRef(null);
	const overlayRef = useRef(null);

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
		<div className="relative max-w-full mx-auto aspect-[300/400] xs:aspect-[398/295]  md:aspect-[1584/700] rounded-[0.9rem] bg-[rgba(22,26,30,0.90)] overflow-hidden ">
			{/* Video or Image Placeholder (can replace with a <video> or <img>) */}

			<div className="absolute inset-0 ">
				<LazyLoadingVideo video_url={data?.video_url} border_radious={true} />
			</div>
			<div className="absolute inset-0 h-full w-full z-10 bg-gradient-to-t from-[#000] to-transparent rounded-[0.9rem]"></div>

			<div className="flex items-end h-full pb-[30px] md:pb-[50px] px-5 md:px-[32px] relative z-20">
				<div className={`lg:flex gap-6 items-end w-full ${data?.title ? "justify-between " : "justify-end"}`}>
					{data?.title && (
						<div>
							<span className="block text-[20px] sm:text-[24px] text-neutral-50 font-[600] mb-2">{data?.title}</span>
							<span className="block text-[14px] sm:text-[18px] text-neutral-300">{data?.short_description}</span>
						</div>
					)}
					<div className="flex items-center md:flex-none gap-3 mt-5 lg:mt-0">
						{isStroke && <StrokeButton text="Learn More" url="/bookingmax" right_icon="/icons/Right_Arrow.svg" />}
						<FillButton text="Watch Video" handleClick={handleOpen} left_icon="/icons/play.svg" />
					</div>
				</div>
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
								src={data?.video_url}
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
		</div>
	);
}

export default BookingMaxLongCrad;
