import Container from "@/components/ui/Container";
import React from "react";

function VideoSection() {
	return (
		<div className="bg-secondary-900 py-[100px] lg:py-[140px]">
			<Container>
				<div className="max-w-[1260px] mb-10 lg:mb-[100px]">
					<p className="text-[14px] text-primary-500 font-[700] uppercase tracking-[5.6px] ">Everything you need</p>
					<h2 className="text-[54px] font-[700] text-neutral-50 ">
						Ad Campaigns Built for{" "}
						<span className="text-primary-500 relative">
							Escape Room Growth.
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="100%"
								height="14"
								viewBox="0 0 100% 14"
								fill="none"
								className="absolute -bottom-2 left-0 w-full"
							>
								<path d="M2.22266 12.1311C32.5774 -6.55895 210.348 6.21491 810.813 12.1311" stroke="#FF492C" strokeWidth="3" strokeLinecap="round" />
							</svg>
						</span>
					</h2>
				</div>
			</Container>
			<div className="relative w-full h-[600px] lg:h-[900px] mb-[200px] lg:mb-0 lg:mt-10">
				<video
					autoPlay
					loop
					muted={true}
					playsInline
					preload="metadata"
					poster=""
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
					aria-hidden="true"
					className="absolute inset-0"
				>
					<source src="/pages/home/hero.webm" type="video/webm" />
					{/* <source src="/pages/home/hero.mp4" type="video/mp4" /> */}
				</video>
				<div
					className="absolute inset-0"
					style={{
						background: "linear-gradient(180deg, #0d1116 0%, #000a 30%, #000a 70%, #0d1116 100%)",
					}}
				></div>

				{/* .....text..... */}
				<Container>
					<div className="relative flex flex-col justify-end h-full">
						<p className="text-neutral-50 text-[20px] lg:text-[24px] font-[600] leading-[1.3] pb-[10px]">Google & Meta Ads</p>
						<p className="text-neutral-300 text-[14px] lg:text-[20px] pb-[10px] lg:pb-[25px] leading-[1.3] max-w-[900px]">
							Show up when people search “fun things to do near me.” Our AI-optimized campaigns drive real bookings, not just clicks.
						</p>
						<div className="group cursor-pointer text-primary-600 text-[16px] font-[500] flex items-center gap-[5px] pb-[50px] lg:pb-0">
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
				</Container>

				{/* .....Tab Button.... */}

				<Container>
					<div className=" lg:absolute bottom-0 lg:top-0 left-2.5 lg:left-[inherit] right-2.5 lg:right-[inherit]">
						<div className="grid lg:flex grid-cols-2 gap-2.5 sm:gap-5 text-[12px] md:text-[16px] 2xl:text-[18px]">
							<span className=" flex justify-center items-center px-[25px] 2xl:px-[45px] py-[15px] 2xl:py-[25px]  font-[600] text-neutral-50 rounded-[6px] md:rounded-[10px] border-[2px] border-primary-500">
								Smart Booking Ads
							</span>
							<span className=" flex justify-center items-center px-[25px] 2xl:px-[45px] py-[15px] 2xl:py-[25px]  font-[600] text-neutral-50 rounded-[6px] md:rounded-[10px] border-[2px] border-neutral-700">
								High-Converting Landing Pages
							</span>
							<span className=" flex justify-center items-center px-[25px] 2xl:px-[45px] py-[15px] 2xl:py-[25px]  font-[600] text-neutral-50 rounded-[6px] md:rounded-[10px] border-[2px] border-neutral-700">
								Everywhere They Look
							</span>
							<span className=" flex justify-center items-center px-[25px] 2xl:px-[45px] py-[15px] 2xl:py-[25px]  font-[600] text-neutral-50 rounded-[6px] md:rounded-[10px] border-[2px] border-neutral-700">
								Real-Time Performance
							</span>
							<span className="col-span-full flex justify-center items-center px-[25px] 2xl:px-[45px] py-[15px] 2xl:py-[25px]  font-[600] text-neutral-50 rounded-[6px] md:rounded-[10px] border-[2px] border-neutral-700">
								Local Player Targeting
							</span>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}

export default VideoSection;
