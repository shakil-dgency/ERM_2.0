"use client";
import LazyLoadingVideo from "@/components/global/LazyLoadingVideo";
import Container from "@/components/ui/Container";
import UnderlineHeadline from "@/components/ui/UnderlineHeadline";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Link from "next/link";

function VideoSection({ data }) {
	const [state, setState] = useState({
		title: data?.strategy_card[0]?.title,
		description: data?.strategy_card[0]?.description,
		tag: data?.strategy_card[0]?.tags,
		video_url: data?.strategy_card[0]?.video_url,
		button_url: data?.strategy_card[0]?.button_url,
	});

	const handleKeyData = (item) => {
		setState((prev) => ({
			...prev,
			title: item?.title,
			description: item?.description,
			tag: item?.tags,
			video_url: item?.video_url,
			button_url: item?.button_url,
		}));
	};
	return (
		<div className="bg-secondary-900 py-[100px] lg:py-[140px]">
			<Container>
				<div className="max-w-[1260px] mb-10 lg:mb-[100px]">
					<p className="text-[14px] text-primary-500 font-[700] uppercase tracking-[5.6px] ">{data?.Eyebrow_headline}</p>
					<UnderlineHeadline text={data?.headline} text_light={true} />
				</div>
			</Container>
			<Container>
				<div className="relative z-20 hidden md:block">
					<Swiper
						slidesPerView={3.5}
						spaceBetween={20}
						className="mySwiper "
						breakpoints={{
							1024: {
								// >= 768px
								slidesPerView: 4.5,
								spaceBetween: 30,
							},
							1536: {
								// >= 768px
								slidesPerView: 5.5,
								spaceBetween: 30,
							},
						}}
					>
						{data?.strategy_card?.map((item, i) => (
							<SwiperSlide key={i}>
								<span
									onClick={() => handleKeyData(item)}
									className={`${
										item?.tags === state?.tag ? "border-primary-500 text-neutral-50" : "border-neutral-500 hover:text-neutral-200 text-neutral-500"
									} relative z-20 cursor-pointer flex justify-center items-center  py-[10px] lg:py-[25px] 2xl:text-[18px]  font-[600]  rounded-[6px] md:rounded-[10px] border-[2px] `}
								>
									{item?.tags}
								</span>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</Container>
			<div className="hidden md:block  relative w-full  md:h-[600px] lg:h-[800px] ">
				<div className=" h-full w-full ">
					<div className="absolute inset-0 z- ">
						<LazyLoadingVideo video_url={state.video_url} />
						{/* <VideoCompresed src="pages/home/hero_video/hero.m3u8" /> */}
						<div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,#0d1116_0%,#000a_30%,#000a_70%,#0d1116_100%)]"></div>
					</div>

					{/* .....text..... */}
					<Container>
						<div className="relative z-10 flex flex-col justify-end h-full">
							<p className="text-neutral-50 text-[20px] lg:text-[24px] font-[600] leading-[1.3] pb-[10px]">{data ? state.title : ""}</p>
							<p className="text-neutral-300 text-[14px] lg:text-[20px] pb-[10px] lg:pb-[25px] leading-[1.3] max-w-[900px]">
								{data ? state.description : ""}
							</p>
							<Link href={`${state?.button_url}`} className="group cursor-pointer text-primary-600 text-[16px] font-[500] flex items-center gap-[5px] pb-[50px] lg:pb-0">
								Learn More
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="5"
									height="8"
									viewBox="0 0 5 8"
									fill="none"
									className="mt-[2px] transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:scale-110"
								>
									<path
										d="M0.689453 1.07009L0.689453 4.41199L0.689453 7.42132C0.689453 7.93629 1.3117 8.19377 1.67647 7.829L4.45513 5.05033C4.90036 4.6051 4.90036 3.88093 4.45513 3.4357L3.39838 2.37896L1.67647 0.657045C1.3117 0.297644 0.689453 0.555126 0.689453 1.07009Z"
										fill="#E64027"
									/>
								</svg>
							</Link>
						</div>
					</Container>
				</div>
			</div>

			{/* .....Tab Button.... */}

			<Container>
				<div className=" md:hidden z-10 relative pt-8 ">
					<div className="grid grid-cols-1 gap-2.5 sm:gap-5 text-[16px] ">
						{data?.strategy_card?.map((item, i) => (
							<div key={i}>
								<span
									onClick={() => handleKeyData(item)}
									className={`${
										item?.tags === state?.tag ? "border-primary-500 text-neutral-50" : "border-neutral-500 text-neutral-500"
									} cursor-pointer flex justify-center items-center px-[25px] 2xl:px-[45px] py-[10px] 2xl:py-[25px]  font-[600]  rounded-[6px] md:rounded-[10px] border-[2px] `}
								>
									{item?.tags}
								</span>
								{/* mobile view */}
								{item?.tags === state?.tag && (
									<div className="relative w-full h-[320px] md:hidden overflow-hidden rounded-[10px] bg-secondary-900 mb-[35px] mt-5">
										<div className="absolute inset-0 ">
											<LazyLoadingVideo video_url={state.video_url} />
											{/* <VideoCompresed src="pages/home/hero_video/hero.m3u8" /> */}
											<div className="absolute inset-0 z-10 bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_100%)]"></div>
										</div>
										<div className="relative z-10 flex flex-col justify-end h-full px-2.5">
											<p className="text-neutral-50 text-[18px] font-[600] leading-[1.3] pb-[10px]">{data ? state.title : ""}</p>
											<p className="text-neutral-300 text-[14px] pb-[10px] lg:pb-[25px] leading-[1.3] max-w-[900px]">
												{data ? state.description : ""}
											</p>
											<div className="group cursor-pointer text-primary-600 text-[14px] font-[500] flex items-center gap-[5px] pb-[20px]">
												Learn More
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="5"
													height="8"
													viewBox="0 0 5 8"
													fill="none"
													className="mt-[2px] transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:scale-110"
												>
													<path
														d="M0.689453 1.07009L0.689453 4.41199L0.689453 7.42132C0.689453 7.93629 1.3117 8.19377 1.67647 7.829L4.45513 5.05033C4.90036 4.6051 4.90036 3.88093 4.45513 3.4357L3.39838 2.37896L1.67647 0.657045C1.3117 0.297644 0.689453 0.555126 0.689453 1.07009Z"
														fill="#E64027"
													/>
												</svg>
											</div>
										</div>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</Container>
		</div>
	);
}

export default VideoSection;
