import LazyLoadingVideo from "@/components/global/LazyLoadingVideo";

import Image from "next/image";
import AnimatedText from "./AnimatedText";

function HeroHome({ data }) {
	return (
		<section className="relative w-full  sm:h-screen bg-secondary-950">
			{/* Background Video or Image */}

			<div className="absolute inset-0 z-10">
				<LazyLoadingVideo video_url={data?.video_url} />
				{/* <VideoCompresed src="pages/home/hero_video/hero.m3u8" /> */}
				<div className="absolute inset-0 z-10 bg-[#000000c6]"></div>
			</div>
			{/* Content */}
			<div className="relative z-20 h-full py-[150px] sm:py-0 px-2.5 sm:px-4 text-center">
				<div className="max-w-[1240px] mx-auto h-full">
					<div className="pt-0 sm:pt-[150px]">
						<p className="highlighted_text mb-3">{data?.Eyebrow_headline}</p>
						<h1 className=" text-[clamp(30px,10vw,64px)] xl:text-[96px] font-extrabold text-neutral-50 leading-tight  ">
							{data?.title_first_line}
							<br />
							<span className="relative inline-block h-[1.4em] sm:h-[1.4em] w-full ">
								<AnimatedText sentences={data?.title_second_line} />
							</span>
						</h1>
						<p className="text-base md:text-[20px] text-neutral-300 mb-[60px]">{data?.description}</p>

						<button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 mb-[100px] rounded flex items-center justify-center gap-2 mx-auto">
							<span>🔒</span> {data?.button_text ? data?.button_text : "UNLOCK MARKETING PLAN"}
						</button>
					</div>

					{/* Partner Logos */}
					<div className="flex justify-center">
						<div className="max-w-[940px] mx-auto grid grid-cols-3 justify-items-center gap-5 sm:gap-8 absolute bottom-10">
							{data?.logos.map((logo, i) => (
								<Image
									key={i}
									src={logo ? process.env.NEXT_PUBLIC_API_URL + logo?.url : ""}
									alt={`Partner Logo ${i}`}
									height={45}
									width={100}
									className="h-[35px] sm:h-[45px] w-auto"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroHome;
