import React from "react";
import AnimatedLogoGrid from "./AnimatedLogoGrid";
import Container from "@/components/ui/Container";

function StatsAndClients({ about }) {
	return (
		<div className="bg-secondary-900 py-[100px] md:py-[140px]">
			<Container>
				<div className="max-w-[1260px] mb-[40px] xs:mb-[60px] lg:mb-[150px]">
					<p className="highlighted_text">GROW YOUR REVENUE</p>
					<h2 className=" text-neutral-50 ">
						Escape rooms create memories. We bring them{" "}
						<span className="text-primary-500 relative">
							more players
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="413"
								height="14"
								viewBox="0 0 413 14"
								fill="none"
								className="absolute -bottom-2 left-0 w-full"
							>
								<path d="M2.22266 12.1311C32.5774 -6.55895 210.348 6.21491 410.813 12.1311" stroke="#FF492C" strokeWidth="3" strokeLinecap="round" />
							</svg>
						</span>
						, more often.
					</h2>
				</div>
				<div className={`${about ? "" : "grid grid-cols-1 lg:grid-cols-3 gap-6"}`}>
					<div className="lg:col-start-1 lg:col-end-3">
						<div className={`${about ? "max-w-[1300px] mx-auto" : ""} grid xs:grid-cols-2 xs:justify-items-center gap-y-[40px] xs:gap-y-[100px]`}>
							<div className="">
								<div className="relative">
									<p className="text-[48px] sm:text-[74px] lg:text-[96px] font-[500] text-neutral-50">35+</p>
									<div className="w-full sm:h-[20px] lg:h-[70px] bg-gradient-to-t from-secondary-900 from-40% to-transparent to-100% absolute -left-2 bottom-3 z-10"></div>
								</div>
								<span className="text-[12px] sm:text-[14px] lg:text-[16px] px-[25px] py-2.5 text-primary-200 rounded-[10px] bg-[rgba(255,73,44,0.20)]">
									Escape room served
								</span>
							</div>
							<div className="">
								<div className="relative">
									<p className="text-[48px] sm:text-[74px] lg:text-[96px] font-[500] text-neutral-50">$200M+</p>
									<div className="w-full sm:h-[20px] lg:h-[70px] bg-gradient-to-t from-secondary-900 from-40% to-transparent to-100% absolute -left-2 bottom-3 z-10"></div>
								</div>
								<span className="text-[12px] sm:text-[14px] lg:text-[16px] px-[25px] py-2.5 text-primary-200 rounded-[10px] bg-[rgba(255,73,44,0.20)]">Escape Room Revenue</span>
							</div>
							<div className="">
								<div className="relative">
									<p className="text-[48px] sm:text-[74px] lg:text-[96px] font-[500] text-neutral-50">1M+</p>
									<div className="w-full sm:h-[20px] lg:h-[70px] bg-gradient-to-t from-secondary-900 from-40% to-transparent to-100% absolute -left-2 bottom-3 z-10"></div>
								</div>
								<span className="text-[12px] sm:text-[14px] lg:text-[16px] px-[25px] py-2.5 text-primary-200 rounded-[10px] bg-[rgba(255,73,44,0.20)]">Booked via Our Ads</span>
							</div>
							<div className="">
								<div className="relative">
									<p className="text-[48px] sm:text-[74px] lg:text-[96px] font-[500] text-neutral-50">150K+</p>
									<div className="w-full sm:h-[20px] lg:h-[70px] bg-gradient-to-t from-secondary-900 from-40% to-transparent to-100% absolute -left-2 bottom-3 z-10"></div>
								</div>
								<span className="text-[12px] sm:text-[14px] lg:text-[16px] px-[25px] py-2.5 text-primary-200 rounded-[10px] bg-[rgba(255,73,44,0.20)]">5-star reviews generated</span>
							</div>
						</div>
						{!about && (
							<div className="flex flex-col items-center space-y-[30px] lg:hidden  mt-[60px] ">
								<div className="max-w-[536px] w-full  aspect-[536/305] rounded-[10px] bg-[rgba(27,33,39,0.40)] backdrop-blur-[25px]"></div>
								<div className="max-w-[536px] w-full aspect-[536/305]  rounded-[10px] bg-[rgba(27,33,39,0.40)] backdrop-blur-[25px]"></div>
								<div className="max-w-[536px] w-full aspect-[536/305] rounded-[10px] bg-[rgba(27,33,39,0.40)] backdrop-blur-[25px]"></div>
							</div>
						)}
						<div className="mt-[100px] lg:mt-[136px]">
							<p className="text-[24px] sm:text-[36px] font-[700] text-neutral-50">Trusted by Escape Room Globally</p>

							<AnimatedLogoGrid />
						</div>
					</div>
					{!about && (
						<div className="hidden lg:block space-y-[30px] col-start-3 col-end-4">
							<div className="max-w-[536px] h-[305px] rounded-[10px] bg-[rgba(27,33,39,0.40)] backdrop-blur-[25px]"></div>
							<div className="max-w-[536px] h-[305px] rounded-[10px] bg-[rgba(27,33,39,0.40)] backdrop-blur-[25px]"></div>
							<div className="max-w-[536px] h-[305px] rounded-[10px] bg-[rgba(27,33,39,0.40)] backdrop-blur-[25px]"></div>
						</div>
					)}
				</div>
			</Container>
		</div>
	);
}

export default StatsAndClients;
