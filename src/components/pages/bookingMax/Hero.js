import LazyLoadingVideo from "@/components/global/LazyLoadingVideo";
import Image from "next/image";
import React from "react";

function Hero() {
	return (
		<section className="relative w-full py-[150px] lg:py-0 lg:h-screen ">
			{/* Background Video or Image */}

			<LazyLoadingVideo />
			{/* Content */}
			<div className="relative z-20 px-2.5 sm:px-4 text-center flex flex-col justify-center items-center h-full pb-[150px]">
				<div className="max-w-[940px] mx-auto ">
					<p className="highlighted_text ">Escape room marketing Solution</p>
					<h1 className="text-[clamp(50px,15.6vw,150px)] text-[#fff] leading-tight mb-4 ">
						Booking<span className="text-primary-500 font-[700]">MAX</span>
					</h1>
					<p className="text-base lg:text-[24px] font-[600] text-neutral-300 mb-[48px]">
						We bring the right players to your escape room, turn clicks into bookings, and help you grow revenue with every campaign.
					</p>

					<button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3  rounded flex items-center justify-center gap-2 mx-auto">
						<span>🔒</span> UNLOCK MARKETING PLAN
					</button>
				</div>
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-x-2 gap-y-8 sm:gap-8 absolute z-10 bottom-10 left-1/2 transform -translate-x-1/2  w-full max-w-[1400px]">
				<div className="flex flex-col items-center">
					<p className="text-[#FFF] text-[24px] lg:text-[36px] font-bold leading-[1.2]">35+</p>
					<p className="text-neutral-300 text-[16px] lg:text-[20px] text-center ">Escape room served</p>
				</div>
				<div className="flex flex-col items-center">
					<p className="text-[#FFF] text-[24px] lg:text-[36px] font-bold leading-[1.2]">$200M+</p>
					<p className="text-neutral-300 text-[16px] lg:text-[20px] text-center">Revenue for escape room clients</p>
				</div>
				<div className="flex flex-col items-center">
					<p className="text-[#FFF] text-[24px] lg:text-[36px] font-bold leading-[1.2]">1M+</p>
					<p className="text-neutral-300 text-[16px] lg:text-[20px] text-center ">Booked via Our Ads</p>
				</div>
				<div className="flex flex-col items-center">
					<p className="text-[#FFF] text-[24px] lg:text-[36px] font-bold leading-[1.2]">150K+</p>
					<p className="text-neutral-300 text-[16px] lg:text-[20px] text-center">5-star reviews generated</p>
				</div>
			</div>
		</section>
	);
}

export default Hero;
