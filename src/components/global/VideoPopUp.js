"use client";
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuPlus } from "react-icons/lu";

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
			document.body.classList.add("overflow-hidden");
			document.body.classList.add("lg:mr-[12.8px]");
			return () => {
				document.body.classList.remove("overflow-hidden");
				document.body.classList.remove("lg:mr-[12.8px]");
			};
		}
	}, [open]);

	const handleClose = () => {
		setOpen(false);
		document.body.classList.remove("overflow-hidden");
		document.body.classList.remove("lg:mr-[12.8px]");
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
							className="group absolute cursor-pointer top-4 right-4 md:top-6 md:right-6 rounded-full bg-[#ff482c57] hover:bg-transparent hover:border-primary-400 border-transparent border-[1px] duration-500 backdrop-blur-[20px] p-2 z-50"
						>
							<LuPlus className="group-hover:text-primary-500 rotate-45 text-white text-[22px] group-hover:scale-150 duration-300 ease-in " />
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
								controlsList="nofullscreen"
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
