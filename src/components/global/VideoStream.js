"use client";
import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

function VideoStream({ src }) {
	const videoRef = useRef(null);
	const hlsRef = useRef(null);
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		// IntersectionObserver callback
		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// When visible -> load and play
					if (Hls.isSupported()) {
						if (!hlsRef.current) {
							const hls = new Hls();
							hls.loadSource(src);
							hls.attachMedia(video);
							hlsRef.current = hls;
						}
					} else if (video.canPlayType("application/vnd.apple.mpegurl")) {
						video.src = src; // Safari native HLS
					}
					setIsIntersecting(true);
					video.play().catch(() => {});
					console.log(isIntersecting);
				} else {
					// Pause when not visible
					video.pause();
				}
			});
		};

		// Create observer
		const observer = new IntersectionObserver(handleIntersection, {
			root: null, // viewport
			rootMargin: "100px",
			threshold: 0,
		});

		observer.observe(video);

		// Cleanup
		return () => {
			observer.disconnect();
			if (hlsRef.current) {
				hlsRef.current.destroy();
				hlsRef.current = null;
			}
		};
	}, [src]);

	return <>{<video ref={videoRef} loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} className="" />}</>;
}

export default VideoStream;
