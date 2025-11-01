"use client";
import { usePageLoaded } from "@/hooks/usePageLoaded";
import React from "react";
import ReactPlayer from "react-player";

function LazyLoadingVideo({ video_url, autoPlay = true, controls = false, muted = true, loop = true }) {
	// Lazy video logic

	const isLoaded = usePageLoaded();

	return (
		<div className="absolute inset-0 z-10  ">
			{!isLoaded ? (
				<img src="/pages/home/heroImage.png" alt="" className="w-full h-full object-cover" aria-hidden="true" draggable={false} />
			) : (
				<div className="w-full h-full bg-secondary-900">
					<video
						src={video_url}
						autoPlay={autoPlay}
						loop={loop}
						muted={muted}
						playsInline
						controls={controls}
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
					/>
				</div>
			)}
		</div>
	);
}

export default LazyLoadingVideo;
