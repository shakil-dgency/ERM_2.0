"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import Container from "@/components/ui/Container";
import ServiceCard from "@/components/global/ServiceCard";
import LazyLoadingVideo from "@/components/global/LazyLoadingVideo";
import VideoStream from "@/components/global/VideoStream";
import ServiceCarusel from "./ServiceCarusel";

const slides = [
	{
		category: "Marketing",
		image: "", // Change to your image path
		title: "Google & Meta Ads",
		text: "Show up when people search “fun things to do near me.” Our AI-optimized campaigns drive real bookings, not just clicks.",
		link: "#",
	},
	{
		category: "Website",
		image: "",
		title: "Google & Meta Ads",
		text: "Show up when people search “fun things to do near me.” Our AI-optimized campaigns drive real bookings, not just clicks.",
		link: "#",
	},
	{
		category: "Website",
		image: "",
		title: "Google & Meta Ads",
		text: "Show up when people search “fun things to do near me.” Our AI-optimized campaigns drive real bookings, not just clicks.",
		link: "#",
	},
	{
		category: "Website",
		image: "",
		title: "Google & Meta Ads",
		text: "Show up when people search “fun things to do near me.” Our AI-optimized campaigns drive real bookings, not just clicks.",
		link: "#",
	},
	{
		category: "Website",
		image: "",
		title: "Google & Meta Ads",
		text: "Show up when people search “fun things to do near me.” Our AI-optimized campaigns drive real bookings, not just clicks.",
		link: "#",
	},
];

export default function BookingMax() {
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
		<section className=" min-h-screen overflow-x-hidden bg-[url('/pages/home/bookingMaxBg.png')] bg-repeat bg-[length:240px_240px] ">
			<div className="relative py-[100px] md:py-[140px]">
				{/* Glow/Gradient Backgrounds */}
				<div className="glow_background absolute -left-40 top-[300px] w-[300px] h-[300px] rounded-full blur-[120px] bg-primary-500 " />
				<div className="glow_background absolute z-10 -right-40 bottom-0 w-[300px] h-[300px] rounded-full blur-[120px] bg-primary-500 " />
				{/* <div className="absolute right-0 bottom-0 w-96 h-80 bg-gradient-to-tl from-[#E04828] via-transparent to-transparent opacity-30 rounded-full blur-2xl pointer-events-none" /> */}

				{/* Title & Subheadline */}
				<div className=" px-2.5 flex flex-col items-center mb-[50px] md:mb-[80px] relative z-10">
					<h1 className="text-[clamp(50px,15.6vw,160px)]  font-[400] text-neutral-50 mb-1">
						Booking<span className="text-primary-500 font-[700]">MAX</span>
					</h1>
					<h2 className=" leading-[1.1] text-neutral-100 text-center mb-2">
						Finally, Marketing That Solves the Puzzle.
						<br className="hidden xl:block" />
						The Escape Room{" "}
						<span className="text-primary-500 relative">
							Growth Engine.
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="413"
								height="14"
								viewBox="0 0 413 14"
								fill="none"
								className="absolute -bottom-2 left-0 w-full"
							>
								<path d="M2.22266 12.1311C32.5774 -6.55895 210.348 6.21491 410.813 12.1311" stroke="#FF492C" strokeWidth="3" strokeLinecap="round" />
							</svg>
						</span>
					</h2>
				</div>
				<Container>
					{/* Hero Card */}
					<div className="relative max-w-full mx-auto aspect-[398/295]  md:aspect-[1584/700] rounded-[20px] bg-[rgba(22,26,30,0.90)] overflow-hidden">
						{/* Video or Image Placeholder (can replace with a <video> or <img>) */}
						<div className="absolute inset-0 z-10 ]">
							<VideoStream src="video/compresed/bookingMax.m3u8" />
							<div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent"></div>
						</div>

						<div className="flex items-end h-full pb-[30px] md:pb-[50px] px-5 md:px-[32px] relative z-20">
							<div className="md:flex justify-between w-full">
								<div>
									<span className="block text-[20px] sm:text-[24px] text-neutral-50 font-[600] mb-2">How It Works</span>
									<span className="block text-[14px] sm:text-[18px] text-neutral-300">
										We handle the marketing, so you can focus on creating unforgettable experiences.
									</span>
								</div>
								<div className="flex gap-3 mt-5 md:mt-0">
									<button
										variant="outline"
										className="text-[14px] md:text-[18px] font-[700] border-primary-500 border-[1px] text-neutral-50 hover:bg-[#1f2327] transition rounded-[10px] px-[15px] md:px-[35px] py-2 md:py-[20px]"
									>
										Learn More
									</button>
									<button
										onClick={handleOpen}
										className="text-[14px] md:text-[18px] bg-primary-700 hover:bg-primary-900 text-neutral-50 flex gap-1 items-center transition rounded-[10px] px-[15px] md:px-[35px] py-2 md:py-[20px]"
									>
										Watch Video
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Features Cards */}
					<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:mt-[80px] ">
						{/* Card 1 */}
						<div className="relative overflow-hidden rounded-[20px] bg-[rgba(22,26,30,0.90)] px-5 md:px-[32px] pb-[45px]  flex flex-col justify-end h-[525px] md:h-[695px]">
							<span className="highlighted_text mb-1 absolute z-20 top-[30px] md:top-[48px]">Website</span>
							<div className="relative z-20">
								<h3 className="text-neutral-50 font-[600] text-[20px] md:text-[24px] mb-[10px]">Seamless UX. Sold-Out Slots.</h3>
								<p className="text-[14px] md:text-[16px] text-neutral-300 leading-[1.2]">
									We build high-converting websites that work with your booking system.
								</p>
							</div>
							<div className="absolute inset-0 z-10">
								<VideoStream src="video/compresed/bookingMax.m3u8" />
								<div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#00000050]"></div>
							</div>
						</div>
						{/* Card 2 */}
						<div className="relative overflow-hidden rounded-[20px] bg-[rgba(22,26,30,0.90)] px-5 md:px-[32px] pb-[45px]  flex flex-col justify-end h-[525px] md:h-[695px]">
							<span className=" highlighted_text mb-1 absolute z-20 top-[30px] md:top-[48px] ">Advertising</span>
							<div className="relative z-20">
								<h3 className="text-neutral-50 font-[600] text-[20px] md:text-[24px] mb-[10px]">Real Traffic. Real Bookings.</h3>
								<p className="text-[14px] md:text-[16px] text-neutral-300 leading-[1.2]">
									We run your ads across all major platforms to reach the right players at the right time.
								</p>
							</div>
							<div className="absolute inset-0 z-10">
								<VideoStream src="video/compresed/bookingMax.m3u8" />
								<div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#00000050]"></div>
							</div>
						</div>
						{/* Card 3 */}
						<div className="relative overflow-hidden rounded-[20px] bg-[rgba(22,26,30,0.90)] px-5 md:px-[32px] pb-[45px]  flex flex-col justify-end h-[525px] md:h-[695px]">
							<span className="highlighted_text mb-1 absolute z-20 top-[30px] md:top-[48px]">Marketing</span>
							<div className="relative z-20">
								<h3 className="text-neutral-50 font-[600] text-[20px] md:text-[24px] mb-[10px]">Loyalty. Buzz. Bookings.</h3>
								<p className="text-[14px] md:text-[16px] text-neutral-300 leading-[1.2]">
									We build your brand, boost your reviews, and keep players coming back.
								</p>
							</div>
							<div className="absolute inset-0 z-10">
								<VideoStream src="video/compresed/bookingMax.m3u8" />
								<div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#00000050]"></div>
							</div>
						</div>
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
							<video ref={popupVideoRef} muted={false} playsInline preload="metadata" className="w-full h-full sm:h-auto object-cover ">
								<source src="/video/bookingMax.webm" type="video/webm" />
							</video>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<ServiceCarusel />
		</section>
	);
}
