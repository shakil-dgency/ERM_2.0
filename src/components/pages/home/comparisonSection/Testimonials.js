"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaPlayCircle } from "react-icons/fa";
import { MdPauseCircle } from "react-icons/md";
import { usePageLoaded } from "@/hooks/usePageLoaded";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { useRef, useState } from "react";

function Testimonials({ data }) {
	const [playingVideo, setPlayingVideo] = useState(null); // Track currently playing video
	const videoRefs = useRef([]); // Store refs for all videos
	const isLoaded = usePageLoaded();

	const handlePlayPause = (index) => {
		// Pause and mute the currently playing video if it's different from the clicked one
		if (playingVideo !== null && playingVideo !== index) {
			videoRefs.current[playingVideo].pause();
			videoRefs.current[playingVideo].muted = true;
		}

		if (playingVideo === index) {
			// Toggle play/pause for the same video
			if (videoRefs.current[index].paused) {
				videoRefs.current[index].play();
				videoRefs.current[index].muted = false; // Unmute when playing
			} else {
				videoRefs.current[index].pause();
				videoRefs.current[index].muted = true; // Mute when paused
			}
			setPlayingVideo(videoRefs.current[index].paused ? null : index);
		} else {
			// Play the new video and unmute it
			videoRefs.current[index].play();
			videoRefs.current[index].muted = false;
			setPlayingVideo(index);
		}
	};

	return (
		<div className=" pb-[80px] lg:pb-[120px]">
			<div className="max-w-[980px] mx-auto  flex flex-col items-center px-2.5 ">
				<h2 className="text-center text-neutral-950">{data?.headline}</h2>
				<p className="text-neutral-700 text-center text-[14px] lg:text-[18px] font-[400] mt-4">{data?.description}</p>
			</div>
			<Container>
				<div className="mt-[50px] lg:mt-[80px]">
					<Swiper
						slidesPerView={1.2}
						spaceBetween={20}
						pagination={{
							clickable: true,
							dynamicBullets:true
						}}
						speed={1000}
						loop={true}
						// initialSlide={3}
						// centeredSlides={true}
						navigation={true}
						modules={[Pagination, Navigation]}
						className="mySwiper videoTestimonials boundedSwiper"
						breakpoints={{
							552: { slidesPerView: 1.5, spaceBetween: 20 },
							768: {
								// >= 768px
								slidesPerView: 2.2,
								spaceBetween: 30,
							},
							1024: {
								// >= 768px
								slidesPerView: 3.2,
								spaceBetween: 30,
							},
							1536: {
								// >= 768px
								slidesPerView: 4,
								spaceBetween: 30,
							},
						}}
					>
						{data?.testimonial_card?.map((item, index) => (
							<SwiperSlide key={index}>
								<div onClick={() => handlePlayPause(index)} className="group cursor-pointer relative w-full max-w-full mx-auto aspect-[378/500] rounded-[10px] overflow-hidden ">
									<video ref={(el) => (videoRefs.current[index] = el)} loop muted playsInline className=" w-full h-full object-cover rounded-lg">
										{isLoaded && <source src={item.video_url} type="video/mp4" />}
									</video>
									<button
										
										className={`cursor-pointer absolute z-20 bottom-[50%] left-[50%] translate-x-[-50%] rounded-[6px] group-hover:scale-110 duration-300 ${videoRefs?.current[index]?.paused ?"group-hover:drop-shadow-[0px_0px_13px_#E64027]": ""} `}
									>
										{!videoRefs?.current[index]?.paused ? (
											// pause button
											<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
												<circle cx="20" cy="20" r="20" fill="#2C3640" className="hidden group-hover:block" />
												<path
													d="M18.9289 14.1071V25.8929C18.9289 26.3191 18.7595 26.7279 18.4581 27.0293C18.1567 27.3307 17.7479 27.5 17.3217 27.5H15.7146C15.2883 27.5 14.8795 27.3307 14.5781 27.0293C14.2767 26.7279 14.1074 26.3191 14.1074 25.8929V14.1071C14.1074 13.6809 14.2767 13.2721 14.5781 12.9707C14.8795 12.6693 15.2883 12.5 15.7146 12.5H17.3217C17.7479 12.5 18.1567 12.6693 18.4581 12.9707C18.7595 13.2721 18.9289 13.6809 18.9289 14.1071ZM24.286 12.5H22.6789C22.2526 12.5 21.8438 12.6693 21.5424 12.9707C21.241 13.2721 21.0717 13.6809 21.0717 14.1071V25.8929C21.0717 26.3191 21.241 26.7279 21.5424 27.0293C21.8438 27.3307 22.2526 27.5 22.6789 27.5H24.286C24.7122 27.5 25.121 27.3307 25.4224 27.0293C25.7238 26.7279 25.8931 26.3191 25.8931 25.8929V14.1071C25.8931 13.6809 25.7238 13.2721 25.4224 12.9707C25.121 12.6693 24.7122 12.5 24.286 12.5Z"
													fill="white"
													className="opacity-0 group-hover:opacity-100 duration-300"
												/>
											</svg>
										) : (
											// play button
											<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
												<path
													d="M20 0C8.95445 0 0 8.9543 0 20C0 31.0457 8.95445 40 20 40C31.0455 40 40 31.0457 40 20C40 8.9543 31.0455 0 20 0ZM26.9125 21.0602L16.9125 27.3102C16.7102 27.4365 16.4801 27.5 16.25 27.5C16.0416 27.5 15.8328 27.4481 15.6439 27.3431C15.2466 27.1228 15 26.7047 15 26.25V13.75C15 13.2953 15.2466 12.8772 15.6439 12.6569C16.0413 12.4353 16.5271 12.4487 16.9125 12.6898L26.9125 18.9398C27.2778 19.1687 27.5 19.5691 27.5 20C27.5 20.4309 27.2778 20.8313 26.9125 21.0602Z"
													fill="#E64027"
												/>
												<path
													d="M20 0C8.95445 0 0 8.9543 0 20C0 31.0457 8.95445 40 20 40C31.0455 40 40 31.0457 40 20C40 8.9543 31.0455 0 20 0ZM26.9125 21.0602L16.9125 27.3102C16.7102 27.4365 16.4801 27.5 16.25 27.5C16.0416 27.5 15.8328 27.4481 15.6439 27.3431C15.2466 27.1228 15 26.7047 15 26.25V13.75C15 13.2953 15.2466 12.8772 15.6439 12.6569C16.0413 12.4353 16.5271 12.4487 16.9125 12.6898L26.9125 18.9398C27.2778 19.1687 27.5 19.5691 27.5 20C27.5 20.4309 27.2778 20.8313 26.9125 21.0602Z"
													fill="#E64027"
												/>
												<path
													d="M27.7289 19.3042L16.1661 11.8709C15.7828 11.6237 15.2717 11.7341 15.0244 12.1174C14.9381 12.2512 14.8923 12.4071 14.8926 12.5664V27.4329C14.8918 27.889 15.261 28.2594 15.7171 28.2601C15.8764 28.2604 16.0323 28.2146 16.1661 28.1283L27.7289 20.695C28.113 20.449 28.2249 19.9381 27.9788 19.554C27.9145 19.4537 27.8293 19.3684 27.7289 19.3042Z"
													fill="white"
												/>
											</svg>
										)}
									</button>
									<div className={`${videoRefs?.current[index]?.paused ? "opacity-100": "opacity-0"} duration-500 absolute inset-0 z-10 bg-[linear-gradient(0deg,rgba(13,17,22,0.6)_0%,rgba(13,17,22,0.6)_100%)]`}></div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</Container>
		</div>
	);
}

export default Testimonials;
