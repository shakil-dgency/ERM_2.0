import LazyLoadingVideo from "@/components/global/LazyLoadingVideo";
import HeroButton from "@/components/ui/buttons/HeroButton";
import Image from "next/image";
import React from "react";

function Hero({ data }) {
	// Split by the apostrophe
	const [before, highlightedWithQuotes] = data ? data?.headline.split("'") : [];

	// Remove extra quotes if any
	const highlighted = highlightedWithQuotes?.replace(/'/g, "");

	return (
		<section className="relative w-full py-[150px] lg:py-0 lg:h-screen shadow-[0px_40px_80px_#ff492c20] ">
			{/* Background Video or Image */}

			<div className="absolute inset-0 z-10">
				<LazyLoadingVideo video_url={data?.video_url} />
				{/* <VideoCompresed src="pages/home/hero_video/hero.m3u8" /> */}
				<div className="absolute inset-0 z-10 bg-[#000000d4]"></div>
			</div>
			{/* Content */}
			<div className="relative z-20 px-2.5 sm:px-4 text-center flex flex-col justify-center items-center h-full pb-[150px]">
				<div className="max-w-[940px] mx-auto ">
					<h1 className="highlighted_text ">{data?.Eyebrow_headline}</h1>
					<p className="text-[clamp(50px,15.6vw,150px)] text-[#fff] leading-tight mb-4 ">
						{before}
						<span className="text-primary-500 font-[700]">{highlighted}</span>
					</p>
					<p className="max-w-[880px] mx-auto text-base md:text-[20px] text-neutral-300 mb-[48px]">{data?.description}</p>
					<div className="flex justify-center">
						<HeroButton text={data?.button_text ? data?.button_text : "UNLOCK MARKETING PLAN"} />
					</div>
				</div>
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-8 sm:gap-8 px-2.5 absolute z-10 bottom-10 left-1/2 transform -translate-x-1/2  w-full max-w-[1400px]">
				{data?.statistics?.map((stat, i) => (
					<div key={i} className="flex flex-col items-center ">
						<p className="text-[#FFF] text-[20px] sm:text-[24px] lg:text-[36px] font-bold leading-[1.2]">{stat?.title}</p>
						<p className="text-neutral-300 text-[12px] sm:text-[16px] lg:text-[20px] text-center ">{stat?.short_description}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default Hero;
