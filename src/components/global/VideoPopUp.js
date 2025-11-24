"use client"
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function VideoPopUp({ video_url, open, setOpen }) {
	const popupVideoRef = useRef(null);
	const overlayRef = useRef(null);

	// Lock body scroll when overlay is open
	useEffect(() => {
		if (open && popupVideoRef.current) {
			setTimeout(() => {
				popupVideoRef.current.play().catch(() => {});
			}, 600);
		}
		if (open) {
			// document.body.style.overflow = "hidden";
			return () => {
				document.body.style.overflow = "";
			};
		}
	}, [open]);

	const handleClose = () => {
		setOpen(false);
		// exitFullscreen();
		if (popupVideoRef.current) {
			popupVideoRef.current.pause();
			popupVideoRef.current.currentTime = 0;
		}
	};

	if (!open) return <></>;
	return (
		<div className="">
			<div className="bg-[#000000de] backdrop-blur-[5px] h-full w-full fixed inset-0 z-50"></div>
			<AnimatePresence>
				{open && (
					<motion.div
						className="fixed inset-0 z-[1000] mx-2.5 md:mx-0 aspect-[16/9] md:aspect-auto  md:h-[80%] md:w-[80%] top-[50%] md:left-[50%] md:translate-x-[-50%] translate-y-[-50%] rounded-[20px]"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						ref={overlayRef}
					>
						{/* Close Button */}
						<button
							onClick={handleClose}
							className="absolute cursor-pointer top-4 right-4 md:top-6 md:right-6 rounded-full bg-secondary-600 hover:bg-secondary-700 backdrop-blur px-3 py-2 text-white text-sm md:text-base z-50"
						>
							✕ <span className="hidden md:inline-block">Close</span>
						</button>

						{/* Video container with zoom animation */}
						<motion.div
							initial={{ scale: 0.4, opacity: 0, y: 50 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.4, opacity: 0, y: 50 }}
							transition={{ duration: 0.6, ease: "easeInOut" }}
							className="w-full h-full "
						>
							<video
								src={video_url}
								ref={popupVideoRef}
								controls
								muted={false}
								playsInline
								preload="metadata"
								className="w-full h-full object-cover rounded-[20px]"
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default VideoPopUp;
