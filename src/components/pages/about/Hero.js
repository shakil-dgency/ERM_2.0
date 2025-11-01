import LazyLoadingVideo from "@/components/global/LazyLoadingVideo";
import HeroText from "@/components/ui/HeroText";
import React from "react";

const image = "/pages/about/about.png";

function Hero({ data }) {
	return (
		<div
			// style={{
			// 	background: `linear-gradient(0deg, rgba(8, 11, 15, 0.80) 0%, rgba(8, 11, 15, 0.80) 100%), url(${image}) lightgray no-repeat`,
			// 	backgroundSize: "cover",
			// 	backgroundPosition: "center",
			// 	width: "100%",
			// }}
			className="pt-[185px] pb-[190px] shadow-[0px_40px_80px_#ff492c20] relative h-screen flex items-center justify-center"
		>
			<div className="absolute inset-0 z-10">
				<LazyLoadingVideo video_url={data?.background_video_url} />
				<div className="absolute inset-0 z-10 bg-[#000000c6]"></div>
			</div>
			<HeroText data={data?.hero_text} />
		</div>
	);
}

export default Hero;
