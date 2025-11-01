"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const phrases = ["Better Reviews.", "Full Rooms."];

function AnimatedText() {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(1); // 1 = up, -1 = down

	useEffect(() => {
		const timer = setTimeout(() => {
			setIndex((prev) => {
				if (prev === 0) {
					setDirection(1); // up
					return 1;
				} else {
					setDirection(-1); // down
					return 0;
				}
			});
		}, 2000);
		return () => clearTimeout(timer);
	}, [index]);
	return (
		<AnimatePresence mode="wait">
			<motion.span
				key={phrases[index]}
				initial={{
					y: direction === 1 ? "100%" : "-100%",
					opacity: 0,
				}}
				animate={{ y: "-20%", opacity: 1 }}
				exit={{
					y: direction === 1 ? "100%" : "-100%",
					opacity: 0,
				}}
				transition={{ y: { type: "tween", duration: 0.7 } }}
				className="absolute left-0 w-full text-primary-100"
				style={{ whiteSpace: "nowrap" }}
			>
				{phrases[index]}
			</motion.span>
		</AnimatePresence>
	);
}

export default AnimatedText;
