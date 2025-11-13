import LazyLoadingVideo from "@/components/global/LazyLoadingVideo";
import HeroText from "@/components/ui/HeroText";
import React from "react";

function Hero({ data, video = false }) {
	return (
		<div
			style={
				!video
					? {
							background: `linear-gradient(0deg, rgba(8, 11, 15, 0.80) 0%, rgba(8, 11, 15, 0.80) 100%), url(${data?.background_image ? process.env.NEXT_PUBLIC_API_URL + data?.background_image?.url :"/"}) lightgray no-repeat`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							width: "100%",
					  }
					: {}
			}
			className={`${video ? " shadow-[0px_40px_80px_#ff492c20] relative h-screen flex items-center justify-center":""} pt-[140px] pb-[140px]`}
		>
			{video && (
				<div className="absolute inset-0 z-10">
					<LazyLoadingVideo video_url={data?.background_video_url} />
					<div className="absolute inset-0 z-10 bg-[#000000c6]"></div>
				</div>
			)}

			<HeroText data={data?.hero_text} />
		</div>
	);
}

export default Hero;
