import LazyLoadingVideo from "@/components/global/LazyLoadingVideo";

import Image from "next/image";
import AnimatedText from "./AnimatedText";
import VideoCompresed from "@/components/global/VideoStream";

function HeroHome() {
	return (
		<section className="relative w-full  sm:h-screen bg-secondary-950">
			{/* Background Video or Image */}

			<div className="absolute inset-0 z-10">
				<LazyLoadingVideo video_url="https://ermstorage.sfo3.cdn.digitaloceanspaces.com/hero.mp4" />
				{/* <VideoCompresed src="pages/home/hero_video/hero.m3u8" /> */}
				<div className="absolute inset-0 z-10 bg-[#000000c6]"></div>
			</div>
			{/* Content */}
			<div className="relative z-20 h-full py-[150px] sm:py-0 px-2.5 sm:px-4 text-center">
				<div className="max-w-[940px] mx-auto h-full flex flex-col justify-center items-center">
					<p className="highlighted_text mb-3">Escape Room Marketing Agency</p>
					<h1 className="text-[clamp(38px,10vw,64px)] md:text-[96px] font-extrabold text-neutral-50 leading-tight sm:mb-4 ">
						More Bookings.
						<br />
						<span className="relative inline-block h-[0.9em] sm:h-[0.8em] overflow-hidden align-baseline w-full">
							<AnimatedText />
						</span>
					</h1>
					<p className="text-base md:text-[20px] text-neutral-300 mb-[60px]">
						Get more first-timers, repeat players, and corporate groups— without lifting a finger.
					</p>

					<button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 mb-[100px] rounded flex items-center justify-center gap-2 mx-auto">
						<span>🔒</span> UNLOCK MARKETING PLAN
					</button>

					{/* Partner Logos */}
					<div className="grid grid-cols-3 justify-items-center gap-5 sm:gap-8 absolute bottom-10">
						<Image src="/pages/home/google.svg" alt="Google Partner" height={45} width={100} className="h-[35px] sm:h-[45px] w-auto" />
						<Image src="/pages/home/microsoft.svg" alt="Microsoft Advertising" height={45} width={100} className="h-[35px] sm:h-[45px] w-auto" />
						<Image src="/pages/home/meta.svg" alt="Meta Business Partner" height={45} width={100} className="h-[35px] sm:h-[45px] w-auto" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroHome;
