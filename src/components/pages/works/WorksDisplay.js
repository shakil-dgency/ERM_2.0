"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "@/components/ui/Container";
import React from "react";

import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import LazyLoadingVideo from "@/components/global/LazyLoadingVideo";
import Html5ZipViewer from "./Html5ZipViewer";
import { useRef } from "react";

function WorksDisplay({ data }) {
	const videoRefs = useRef([]);

	const handleVideoPlay = (index) => {
		// Pause all other videos
		videoRefs.current.forEach((video, i) => {
			if (i !== index && video) {
				video.pause();
			}
		});
	};

	const generateBreakpoints = (slidesFromDB) => {
		// Define your desired breakpoint order (mobile → desktop)
		const breakpointKeys = [480, 768, 1024, 1280];

		// Always ensure the minimum slides per view is 1
		const minSlides = 1;
		const space = 30;

		const step = slidesFromDB < 3 ? 0.5 : 1;

		// Build breakpoints dynamically
		const breakpoints = {};
		let slidesPerView;

		breakpointKeys.forEach((bp, index) => {
			// Calculate slidesPerView
			let slidesPerView = slidesFromDB - (breakpointKeys.length - 1 - index) * step;

			// Ensure it never goes below 1
			slidesPerView = Math.max(slidesPerView, minSlides);

			breakpoints[bp] = {
				slidesPerView,
				spaceBetween: space,
			};
		});

		return breakpoints;
	};

	const slidesFromDB = data?.image_view; // dynamic value from API or CMS
	const breakpoints = generateBreakpoints(slidesFromDB);

	return (
		<div className={`${data?.image_view <= data?.images?.length ? "" : ""} pt-[40px] md:pt-[90px]`}>
			<Container>
				<div className="max-w-[1096px] mb-10">
					<h2 className="text-neutral-50">{data?.title}</h2>
					<p className="text-[16px] sm:text-[18px] text-neutral-300 mt-3 md:mt-4">{data?.description}</p>
				</div>
				<div>
					<Swiper
						slidesPerView={1}
						spaceBetween={20}
						pagination={{
							clickable: true,
							dynamicBullets: true
						}}
						navigation={true}
						modules={[Pagination, Navigation]}
						className="mySwiper boundedSwiper"
						breakpoints={breakpoints}
					>
						{data?.html5_ads?.length === 0 && data?.video_urls?.length === 0
							? data?.images?.map((image, i) => (
									<SwiperSlide key={i}>
										<div style={{ aspectRatio: image?.width / image?.height }} className="">
											<Image
												src={image ? process.env.NEXT_PUBLIC_API_URL + image?.url : "/"}
												height={image?.height}
												width={image?.width}
												alt=""
												className="h-full w-full"
												quality={90}
											/>
										</div>
									</SwiperSlide>
							  ))
							: data?.html5_ads?.length === 0
							? data?.video_urls?.map((video, j) => (
									<SwiperSlide key={j}>
										<div style={{ aspectRatio: video?.width / video?.height }} className="cursor-pointer">
											<LazyLoadingVideo
												video_url={video?.url}
												muted={false}
												controls={true}
												autoPlay={false}
												poster={video?.poster?.url}
												ref={(el) => (videoRefs.current[j] = el)}
												onPlay={() => handleVideoPlay(j)}
											/>
										</div>
									</SwiperSlide>
							  ))
							: data?.html5_ads?.map((file, z) => (
									<SwiperSlide key={z}>
										<div className="flex justify-center">
											<Html5ZipViewer zipFile={file} />
										</div>
									</SwiperSlide>
							  ))}
					</Swiper>
				</div>
			</Container>
		</div>
	);
}

export default WorksDisplay;
